import { updateRules } from '../src/backgroundLogic';

describe('Background Logic', () => {
    beforeEach(() => {
        global.chrome = {
            storage: {
                sync: {
                    get: jest.fn((keys, callback) => {
                        const data = { blockedSites: ['example.com', 'test.org'] };
                        callback(data);
                    })
                }
            },
            declarativeNetRequest: {
                updateDynamicRules: jest.fn()
            }
        };
    });

    test('updateRules generates correct declarativeNetRequest rules', () => {
        updateRules();

        expect(global.chrome.declarativeNetRequest.updateDynamicRules).toHaveBeenCalledWith({
            removeRuleIds: expect.arrayContaining([1000, 1001, 1999]),
            addRules: [
                {
                    id: 1000,
                    priority: 1,
                    action: {
                        type: 'redirect',
                        redirect: { extensionPath: '/html/warning.html' }
                    },
                    condition: {
                        urlFilter: '||example.com^',
                        resourceTypes: ['main_frame', 'sub_frame', 'script', 'image', 'stylesheet', 'object', 'xmlhttprequest', 'other']
                    }
                },
                {
                    id: 1001,
                    priority: 1,
                    action: {
                        type: 'redirect',
                        redirect: { extensionPath: '/html/warning.html' }
                    },
                    condition: {
                        urlFilter: '||test.org^',
                        resourceTypes: ['main_frame', 'sub_frame', 'script', 'image', 'stylesheet', 'object', 'xmlhttprequest', 'other']
                    }
                }
            ]
        });
        
        // Verify removeRuleIds has length 1000
        const callArgs = global.chrome.declarativeNetRequest.updateDynamicRules.mock.calls[0][0];
        expect(callArgs.removeRuleIds.length).toBe(1000);
        expect(callArgs.removeRuleIds[0]).toBe(1000);
        expect(callArgs.removeRuleIds[999]).toBe(1999);
    });
});
