// background.js
chrome.runtime.onInstalled.addListener(() => {
    // Set default blocked sites if not exists
    chrome.storage.sync.get(['blockedSites'], function(result) {
        if (!result.blockedSites) {
            chrome.storage.sync.set({blockedSites: ['youtube.com', 'youtu.be']}, function() {
                updateRules();
            });
        } else {
            updateRules();
        }
    });
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'updateRules') {
        updateRules();
    }
});

function updateRules() {
    chrome.storage.sync.get(['blockedSites'], function(result) {
        const blockedSites = result.blockedSites || [];
        const rules = [];

        blockedSites.forEach((site, index) => {
            rules.push({
                id: 1000 + index,
                priority: 1,
                action: {
                    type: 'redirect',
                    redirect: {
                        extensionPath: '/html/warning.html'
                    }
                },
                condition: {
                    urlFilter: `*://*.${site}/*`,
                    resourceTypes: ['main_frame', 'sub_frame', 'script', 'image', 'stylesheet', 'object', 'xmlhttprequest', 'other']
                }
            });
        });

        // Clear existing dynamic rules and add new ones
        chrome.declarativeNetRequest.updateDynamicRules({
            removeRuleIds: Array.from({length: 100}, (_, i) => 1000 + i), // Remove up to 100 rules
            addRules: rules
        });
    });
}