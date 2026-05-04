import { updateRules } from './backgroundLogic.js';

// background.js
chrome.runtime.onInstalled.addListener(() => {
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