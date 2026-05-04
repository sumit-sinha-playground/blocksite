// backgroundLogic.js

// Update dynamic rules based on blocked sites
export function updateRules() {
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
                    urlFilter: `||${site}^`,
                    resourceTypes: ['main_frame', 'sub_frame', 'script', 'image', 'stylesheet', 'object', 'xmlhttprequest', 'other']
                }
            });
        });

        chrome.declarativeNetRequest.updateDynamicRules({
            removeRuleIds: Array.from({length: 1000}, (_, i) => 1000 + i),
            addRules: rules
        });
    });
}