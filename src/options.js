// options.js
document.addEventListener('DOMContentLoaded', function() {
    const blockedList = document.getElementById('blockedList');
    const newSiteInput = document.getElementById('newSite');
    const addBtn = document.getElementById('addBtn');

    // Load blocked sites from storage
    chrome.storage.sync.get(['blockedSites'], function(result) {
        const blockedSites = result.blockedSites || [];
        renderList(blockedSites);
    });

    // Add new site
    addBtn.addEventListener('click', function() {
        const site = newSiteInput.value.trim();
        if (site) {
            chrome.storage.sync.get(['blockedSites'], function(result) {
                const blockedSites = result.blockedSites || [];
                if (!blockedSites.includes(site)) {
                    blockedSites.push(site);
                    chrome.storage.sync.set({blockedSites: blockedSites}, function() {
                        renderList(blockedSites);
                        newSiteInput.value = '';
                        // Notify background to update rules
                        chrome.runtime.sendMessage({action: 'updateRules'});
                    });
                } else {
                    alert('Site already blocked');
                }
            });
        }
    });

    // Render the list
    function renderList(sites) {
        blockedList.innerHTML = '';
        sites.forEach(site => {
            const item = document.createElement('div');
            item.className = 'blocked-item';
            item.innerHTML = `
                <span>${site}</span>
                <button data-site="${site}">Remove</button>
            `;
            blockedList.appendChild(item);
        });

        // Add remove listeners
        document.querySelectorAll('.blocked-item button').forEach(btn => {
            btn.addEventListener('click', function() {
                const siteToRemove = this.getAttribute('data-site');
                chrome.storage.sync.get(['blockedSites'], function(result) {
                    const blockedSites = result.blockedSites || [];
                    const updatedSites = blockedSites.filter(s => s !== siteToRemove);
                    chrome.storage.sync.set({blockedSites: updatedSites}, function() {
                        renderList(updatedSites);
                        // Notify background to update rules
                        chrome.runtime.sendMessage({action: 'updateRules'});
                    });
                });
            });
        });
    }
});