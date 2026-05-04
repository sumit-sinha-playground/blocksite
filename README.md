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

- **Smart Popup Menu**: Quickly block or unblock the current website directly from the extension icon.
- **Popular Sites Shortcuts**: One-click blocking for common distractions like YouTube, Instagram, Facebook, and X (Twitter), always visible in the popup.
- **Simple Block List Management**: Add or remove websites through an intuitive options page or the popup menu.
- **Domain-Level Blocking**: Intelligent filtering (`||domain^`) that blocks both the bare domain and all subdomains (e.g., blocking `example.com` also blocks `www.example.com`).
- **Pre-configured Defaults**: Comes with YouTube already in the block list.
- **Warning Page**: A deterrent page appears when you attempt to access a blocked site.
- **Optimized Performance**: Bundled and minified using `esbuild` for maximum speed and minimal memory footprint.
- **Privacy-Focused**: Operates entirely locally; your data never leaves your device.

## Installation Guide

### Step 1: Build the Extension

Before installing, you must generate the optimized build:

1. Open your terminal in the project root.
2. Run `npm install` to install dependencies.
3. Run `npm run build` to create the optimized `build/` directory.

The `build/` folder will contain the processed HTML, minified CSS, and bundled JavaScript required by Chrome.

### Step 2: Open Chrome Extensions Page

1. Open Google Chrome
2. Click the three vertical dots menu in the top-right corner
3. Select **More tools** → **Extensions**
4. Alternatively, navigate directly to `chrome://extensions/` in your address bar

### Step 3: Enable Developer Mode

In the Extensions page, you'll see a toggle switch labeled "Developer mode" in the top-right corner. Click it to enable Developer mode. You'll notice the interface changes to display additional options including "Load unpacked".

### Step 4: Load the Extension

1. Click the "Load unpacked" button.
2. Navigate to the project directory and select the **`build`** folder.
3. Click "Open" (or "Select Folder").
4. The SuperBlocker extension should now appear in your extensions list.

### Step 5: Verify Installation

Once loaded, you should see SuperBlocker listed with:
- Extension icon
- Name: "SuperBlocker"
- Version number
- Enable/Disable toggle (should be enabled by default)
- Details, Remove, and other action buttons

Congratulations! SuperBlocker is now installed and ready to use.

## How to Use SuperBlocker in Chrome

### Accessing the Popup Menu (Recommended)

The easiest way to manage your sites is through the Popup Menu:

1. Click the **Extensions** icon (puzzle piece) in the top-right of Chrome.
2. Find **SuperBlocker** and click its icon.
3. You will see:
   - The **Current Website** at the top.
   - **Popular Sites** (YouTube, Facebook, etc.) below it.
   - Any other **Blocked Sites**.
4. Simply **check or uncheck** the boxes to toggle blocking for those sites immediately.

### Accessing the Options Page

For a full view of all blocked sites:

1. Right-click the SuperBlocker icon and select **Options**.
2. Or go to `chrome://extensions/`, find SuperBlocker, click **Details**, and select **Extension options**.

### Adding Websites to Your Block List

Once you're on the options page:

1. **Locate the Input Field**: You'll see a text input labeled "Enter website domain to block" with an "Add" button next to it.

2. **Enter the Domain**: Type the domain name you want to block. For example:
   - `facebook.com` (instead of www.facebook.com)
   - `reddit.com`
   - `twitter.com`
   - `instagram.com`
   - `tiktok.com`

3. **Domain Entry**: Enter only the domain name without `http://` or `www`. For example, entering `youtube.com` will automatically block `www.youtube.com`, `music.youtube.com`, etc., using the extension's intelligent `||domain^` filtering.

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

## Development and Building

To build the extension for production:

```bash
npm run build
```

This creates a `build/` folder with bundled JS, minified CSS, and optimized HTML.

## Installing in Chrome

1. Build the extension using the command above.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer mode** (top-right).
4. Click **Load unpacked** and select the **`build`** folder from this project.
5. The extension is now ready to use!
