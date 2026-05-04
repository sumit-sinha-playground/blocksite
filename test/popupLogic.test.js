import { fetchBlockedWebsites, toggleBlockStatus, getSitesToDisplay, POPULAR_SITES } from '../src/popupLogic';

describe('SuperBlocker Extension', () => {
    beforeEach(() => {
        // Mock Chrome storage and runtime APIs
        global.chrome = {
            storage: {
                sync: {
                    get: jest.fn((keys, callback) => {
                        const data = { blockedSites: ['youtube.com', 'example.com'] };
                        callback(data);
                    }),
                    set: jest.fn((data, callback) => callback())
                }
            },
            runtime: {
                sendMessage: jest.fn()
            },
            declarativeNetRequest: {
                updateDynamicRules: jest.fn((rules, callback) => callback())
            }
        };
    });

    test('adds a URL to the blocked list', (done) => {
        toggleBlockStatus('newsite.com', true, (updatedBlockedSites) => {
            expect(global.chrome.storage.sync.set).toHaveBeenCalledWith(
                { blockedSites: ['youtube.com', 'example.com', 'newsite.com'] },
                expect.any(Function)
            );
            done();
        });
    });

    test('removes a URL from the blocked list', (done) => {
        toggleBlockStatus('youtube.com', false, (updatedBlockedSites) => {
            expect(global.chrome.storage.sync.set).toHaveBeenCalledWith(
                { blockedSites: ['example.com'] },
                expect.any(Function)
            );
            done();
        });
    });

    test('fetchBlockedWebsites returns the correct list', (done) => {
        fetchBlockedWebsites((blockedWebsites) => {
            expect(blockedWebsites).toEqual(['youtube.com', 'example.com']);
            done();
        });
    });

    test('getSitesToDisplay returns current site, popular sites, and blocked sites unique and in order', () => {
        const current = 'example.org';
        const blocked = ['blocked.com', 'youtube.com'];
        const result = getSitesToDisplay(current, blocked);
        
        // 1. Current site should be first
        expect(result[0]).toBe(current);
        
        // 2. Popular sites should be present
        POPULAR_SITES.forEach(site => {
            expect(result).toContain(site);
        });
        
        // 3. Blocked sites should be present
        expect(result).toContain('blocked.com');
        
        // 4. No duplicates
        const uniqueResult = [...new Set(result)];
        expect(result.length).toBe(uniqueResult.length);
    });

    test('getSitesToDisplay handles duplicate current and popular site', () => {
        const current = 'youtube.com';
        const blocked = ['example.com'];
        const result = getSitesToDisplay(current, blocked);
        
        expect(result[0]).toBe('youtube.com');
        expect(result.filter(s => s === 'youtube.com').length).toBe(1);
    });
});