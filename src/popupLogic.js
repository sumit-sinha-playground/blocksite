// popupLogic.js

export const POPULAR_SITES = ['youtube.com', 'instagram.com', 'facebook.com', 'x.com'];

// Fetch blocked websites from Chrome storage
export function fetchBlockedWebsites(callback) {
    chrome.storage.sync.get(['blockedSites'], (result) => {
        const blockedWebsites = result.blockedSites || [];
        callback(blockedWebsites);
    });
}

// Get the merged list of sites to display in the popup
export function getSitesToDisplay(currentHostname, blockedSites) {
    const sites = new Set();
    
    if (currentHostname) {
        sites.add(currentHostname);
    }
    
    POPULAR_SITES.forEach(site => sites.add(site));
    blockedSites.forEach(site => sites.add(site));
    
    return Array.from(sites);
}

// Toggle block status of a website
export function toggleBlockStatus(site, isBlocked, callback) {
    chrome.storage.sync.get(['blockedSites'], (result) => {
        let blockedSites = result.blockedSites || [];

        if (isBlocked) {
            if (!blockedSites.includes(site)) {
                blockedSites.push(site);
            }
        } else {
            blockedSites = blockedSites.filter((item) => item !== site);
        }

        chrome.storage.sync.set({ blockedSites }, () => {
            chrome.runtime.sendMessage({ action: 'updateRules' });
            callback(blockedSites);
        });
    });
}