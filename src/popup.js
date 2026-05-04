import { fetchBlockedWebsites, toggleBlockStatus, getSitesToDisplay } from './popupLogic.js';

document.addEventListener('DOMContentLoaded', () => {
    const blockedListElement = document.getElementById('blocked-list');

    // Get current tab hostname
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const tab = tabs[0];
        let currentHostname = '';
        if (tab && tab.url && tab.url.startsWith('http')) {
            try {
                currentHostname = new URL(tab.url).hostname.replace(/^www\./, '');
            } catch (e) {
                console.error('Invalid URL:', tab.url);
            }
        }

        // Fetch the blocked websites from sync storage
        fetchBlockedWebsites((blockedWebsites) => {
            const sitesToDisplay = getSitesToDisplay(currentHostname, blockedWebsites);
            
            blockedListElement.innerHTML = ''; // Clear existing list

            sitesToDisplay.forEach((site) => {
                const listItem = document.createElement('li');
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.checked = blockedWebsites.includes(site);
                
                checkbox.addEventListener('change', () => {
                    toggleBlockStatus(site, checkbox.checked, (updatedBlockedSites) => {
                        console.log(`Updated block status for ${site}: ${checkbox.checked}`);
                    });
                });

                const label = document.createElement('label');
                label.textContent = site;
                if (site === currentHostname) {
                    label.style.fontWeight = 'bold';
                    label.textContent += ' (current)';
                }

                listItem.appendChild(checkbox);
                listItem.appendChild(label);
                blockedListElement.appendChild(listItem);
            });
        });
    });
});