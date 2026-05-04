# SuperBlocker - Chrome Site Blocker Extension

## Table of Contents
- [Overview](#overview)
- [Purpose](#purpose)
- [Features](#features)
- [Installation Guide](#installation-guide)
- [How to Use SuperBlocker in Chrome](#how-to-use-superblocker-in-chrome)
- [Configuration and Management](#configuration-and-management)
- [Frequently Asked Questions](#frequently-asked-questions)
- [Technical Details](#technical-details)
- [Privacy and Security](#privacy-and-security)

## Overview

SuperBlocker is a lightweight, privacy-focused Chrome extension designed to help users regain control over their web browsing habits by blocking access to distracting websites. Whether you're struggling with procrastination, need to maintain focus during work hours, or want to limit access to specific sites for productivity reasons, SuperBlocker provides a simple yet powerful solution to keep you on track.

The extension uses Chrome's modern declarativeNetRequest API to block websites with minimal performance impact. When a user attempts to visit a blocked site, they are presented with a warning page instead of the blocked content, giving them a moment to reconsider their browsing choices.

## Purpose

In today's digital world, it's easy to fall into patterns of time-wasting browsing. Popular social media platforms and video streaming services are specifically designed to capture and hold user attention. SuperBlocker was created to address this challenge by giving users a simple tool to:

1. **Improve Productivity** - Block distracting websites during work or study sessions to maintain focus and accomplish tasks more efficiently.

2. **Reduce Procrastination** - Create a barrier between yourself and time-sink websites by requiring an intentional action to unblock them, giving you time to reconsider.

3. **Support Digital Wellness** - Help establish healthier browsing habits by limiting access to sites that can consume excessive amounts of time.

4. **Parental Control** - Enable parents and guardians to restrict access to inappropriate or distracting content for younger users.

5. **Workplace Compliance** - Assist organizations in maintaining productive work environments by preventing employee access to non-work-related sites during business hours.

The extension comes pre-configured to block YouTube and its shortlink variant (youtu.be), recognizing these as common sources of distraction. However, the true power of SuperBlocker lies in its flexibility - users can easily customize their block list to suit their specific needs.

## Features

- **Simple Block List Management**: Add or remove websites from your block list through an intuitive options page.
- **Pre-configured Defaults**: Comes with YouTube already in the block list, but fully customizable.
- **Warning Page**: When you attempt to access a blocked site, a warning page appears instead of the content.
- **Efficient Performance**: Uses Chrome's declarativeNetRequest API for minimal performance impact.
- **Privacy-Focused**: All blocking happens locally; no data is sent to external servers.
- **Easy On/Off**: Quickly manage your blocked sites without complex settings.

## Installation Guide

### Step 1: Prepare the Extension

First, ensure you have all the extension files in a folder on your computer:
- `manifest.json`
- `README.md`
- `rules.json`
- `html/options.html`
- `html/warning.html`
- `src/background.js`
- `src/options.js`
- `icons/` (containing icon files)

### Step 2: Open Chrome Extensions Page

1. Open Google Chrome
2. Click the three vertical dots menu in the top-right corner
3. Select **More tools** → **Extensions**
4. Alternatively, navigate directly to `chrome://extensions/` in your address bar

### Step 3: Enable Developer Mode

In the Extensions page, you'll see a toggle switch labeled "Developer mode" in the top-right corner. Click it to enable Developer mode. You'll notice the interface changes to display additional options including "Load unpacked".

### Step 4: Load the Extension

1. Click the "Load unpacked" button
2. Navigate to the folder where you have the SuperBlocker extension files
3. Select the folder and click "Open" (or "Select Folder" depending on your OS)
4. The SuperBlocker extension should now appear in your extensions list with a blue icon

### Step 5: Verify Installation

Once loaded, you should see SuperBlocker listed with:
- Extension icon
- Name: "SuperBlocker"
- Version number
- Enable/Disable toggle (should be enabled by default)
- Details, Remove, and other action buttons

Congratulations! SuperBlocker is now installed and ready to use.

## How to Use SuperBlocker in Chrome

### Accessing the Options Page

To manage your blocked websites list, you need to access the SuperBlocker options page:

1. **Via Extensions Menu**:
   - Click the puzzle icon (Extensions) in the top-right corner of Chrome
   - Find "SuperBlocker" in the list
   - Click on the extension name
   - Select "Options" from the menu

2. **Via Extensions Page**:
   - Open `chrome://extensions/`
   - Find SuperBlocker in the list
   - Click "Details"
   - Scroll down and click "Extension options"

3. **Direct URL**:
   - In Chrome's address bar, type `chrome-extension://[EXTENSION_ID]/html/options.html`
   - Replace [EXTENSION_ID] with SuperBlocker's actual ID (visible in the extensions list)

### Adding Websites to Your Block List

Once you're on the options page:

1. **Locate the Input Field**: You'll see a text input labeled "Enter website domain to block" with an "Add" button next to it.

2. **Enter the Domain**: Type the domain name you want to block. For example:
   - `facebook.com` (instead of www.facebook.com)
   - `reddit.com`
   - `twitter.com`
   - `instagram.com`
   - `tiktok.com`

3. **Important**: Enter only the domain without the protocol (http://, https://) or www prefix. SuperBlocker will automatically block all subdomains and protocol variations.

4. **Click Add**: Press the "Add" button or hit Enter to add the site to your block list.

5. **Verification**: The newly added site should immediately appear in your "Currently Blocked Sites" list below.

### Removing Websites from Your Block List

If you want to stop blocking a website:

1. **View Your Block List**: Look at the "Currently Blocked Sites" section on the options page
2. **Find the Site**: Locate the website you want to unblock
3. **Click Remove**: Next to each blocked site, you'll see a "Remove" button
4. **Confirm Removal**: The site will be removed from your block list immediately
5. **Access Restored**: You'll now be able to visit that website without seeing the warning page

### Testing the Block

After adding a site to your block list:

1. **Open a New Tab**: Create a new tab in Chrome
2. **Attempt to Visit the Blocked Site**: Type the URL in the address bar and press Enter
3. **View the Warning Page**: Instead of the website, you'll see SuperBlocker's warning page
4. **Review the Message**: The warning page will inform you that the site is blocked
5. **Choose Your Action**: From the warning page, you can decide whether to leave it or modify your block list

### Understanding the Warning Page

When you encounter a blocked site, the warning page serves several purposes:

1. **Notification**: It clearly indicates that the site is blocked by SuperBlocker
2. **Deterrent**: It creates a moment of pause that might help you reconsider your browsing choice
3. **Transparency**: It shows you exactly which site triggered the block
4. **Reminder**: It reinforces your intention to maintain productivity

The warning page doesn't provide a direct bypass button. To access a blocked site, you must:
- Remove it from your block list in the options page
- Disable the extension entirely

This design encourages intentional decision-making rather than impulsive unblocking.

## Configuration and Management

### Default Blocked Sites

When you first install SuperBlocker, the following sites are pre-blocked:
- `youtube.com` (full domain)
- `youtu.be` (YouTube's shortlink service)

These defaults are chosen because YouTube is one of the most common sources of extended browsing distraction for many users.

### Customizing Your Block List

Your block list is entirely customizable. You can:
- **Add any domain**: Block any website that distracts you
- **Remove pre-configured sites**: If you want to unblock YouTube, simply remove it from the list
- **Organize your focus**: Build a block list tailored to your specific productivity needs

### Sync Across Devices

If you're signed into the same Google account on multiple devices:
- Your block list automatically syncs across all devices running Chrome
- Changes made on one device appear on others within moments
- This ensures consistent blocking across your digital life

### Temporarily Disabling the Extension

If you need to temporarily access all sites:

1. **Via Extensions Menu**:
   - Click the Extensions icon in Chrome's top-right corner
   - Find SuperBlocker
   - Click the toggle to disable it

2. **Via Extensions Page**:
   - Open `chrome://extensions/`
   - Find SuperBlocker
   - Toggle the enable switch to OFF
   - To re-enable, toggle it back ON

**Note**: Disabling the extension removes all protections until you re-enable it.

## Frequently Asked Questions

**Q: Will SuperBlocker work in Incognito mode?**
A: No, by default, Chrome extensions don't work in Incognito mode. To enable it, go to the extension details and toggle "Allow in Incognito mode."

**Q: Can I set time-based blocking (e.g., only block during work hours)?**
A: The current version of SuperBlocker provides always-on blocking. Time-based scheduling is a potential future feature.

**Q: What if I accidentally block an important site?**
A: You can easily remove it from your block list by accessing the options page and clicking the Remove button next to that site.

**Q: Does SuperBlocker track my browsing?**
A: No. SuperBlocker operates entirely locally and doesn't send any data to external servers. Your privacy is maintained.

**Q: Can I block subdomains specifically?**
A: SuperBlocker automatically blocks all subdomains when you add a domain. For example, adding "youtube.com" also blocks "music.youtube.com" and "studio.youtube.com".

## Running Tests

To run the unit tests for the extension, use the following command:

```
npm test
```

Ensure that you have Jest installed and configured properly.

## Building the Extension

To create a build of the Chrome extension, run the following command:

```
npm run build
```

This will create a `build` folder containing all the necessary files for the Chrome extension.

## Installing the Extension in Chrome

1. Open Chrome and navigate to `chrome://extensions/`.
2. Enable "Developer mode" using the toggle in the top-right corner.
3. Click on "Load unpacked" and select the `build` folder created in the previous step.
4. The extension will now be installed and ready to use.
