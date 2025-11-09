# Mautic Embed URL Option Bundle

A simple yet powerful Mautic plugin that enhances form management by adding a **Direct URL** option to form detail pages.

## Screenshot

![Direct URL Button](Assets/direct_url.png)

## Overview

This plugin adds a convenient "Direct URL" button alongside the existing "Embedded" button on form detail pages. When clicked, it displays a modal with the direct URL to your form, making it easy to share and use forms without embedding them.

## Features

- **Quick Access**: Instantly view the direct URL for any form
- **Copy to Clipboard**: One-click copying with visual feedback
- **Seamless Integration**: Automatically adds to all form detail pages
- **Zero Configuration**: Works out of the box after installation

## Installation

### Option 1: Composer (Recommended)

1. Add the plugin to your Mautic installation:
   ```bash
   composer require mautic/embed-url-option-bundle
   ```

2. Clear the Mautic cache:
   ```bash
   php bin/console cache:clear
   ```

3. Navigate to Mautic Settings → Plugins
4. Click "Install/Upgrade Plugins"
5. Find "Embed URL Option" and enable it

### Option 2: Manual Installation

1. Clone or download this repository into your Mautic plugins directory:
   ```bash
   cd /path/to/mautic/plugins
   git clone <repository-url> MauticEmbedUrlOptionBundle
   ```

2. Clear the Mautic cache:
   ```bash
   php bin/console cache:clear
   ```

3. Navigate to Mautic Settings → Plugins and install/enable the plugin

### Option 3: Private Repository

If you're hosting this plugin in a private repository, add it to your `composer.json`:

```json
{
    "repositories": [
        {
            "type": "vcs",
            "url": "https://github.com/your-username/mautic-embed-url-option-bundle.git"
        }
    ],
    "require": {
        "mautic/embed-url-option-bundle": "^1.0"
    }
}
```

Then run:
```bash
composer update mautic/embed-url-option-bundle
php bin/console cache:clear
```

## Usage

1. Navigate to any form detail page in Mautic (e.g., `/s/forms/view/1`)
2. Look for the "Direct URL" button in the form options panel
3. Click the button to open a modal displaying the form's direct URL
4. Click the clipboard icon to copy the URL to your clipboard
5. The icon will briefly change to a checkmark to confirm the copy action

## Technical Details

The plugin uses a lightweight JavaScript approach to inject the button into the DOM, ensuring compatibility with Mautic's existing interface. It leverages Mautic's event system to automatically load on relevant pages without impacting performance.

### How It Works

- **Event Listener**: Subscribes to `CoreEvents::VIEW_INJECT_CUSTOM_ASSETS` to inject JavaScript
- **DOM Manipulation**: Dynamically finds the `#header-embedded` element and adds the button to its parent container
- **Modal System**: Uses Bootstrap modals for a consistent user experience

This functionality provides a user experience similar to what you might find in enterprise marketing automation platforms like Eloqua, making form URL management more accessible.

## Requirements

- Mautic 4.x or higher
- PHP 7.4 or higher

## Author

Frederik Wouters

## License

This plugin is provided as-is for use with Mautic installations.

## Support

For issues, questions, or contributions, please open an issue in the repository.

## Publishing to Packagist

To make this plugin available via Composer for everyone:

1. **Push to GitHub** (or GitLab/Bitbucket):
   ```bash
   git init
   git add .
   git commit -m "Initial release v1.0.0"
   git tag v1.0.0
   git remote add origin https://github.com/your-username/mautic-embed-url-option-bundle.git
   git push -u origin main
   git push --tags
   ```

2. **Submit to Packagist**:
   - Go to https://packagist.org
   - Sign in with your GitHub account
   - Click "Submit"
   - Enter your repository URL: `https://github.com/your-username/mautic-embed-url-option-bundle`
   - Packagist will automatically track new releases via your Git tags

3. **Auto-Update Hook** (Optional):
   - In your GitHub repository settings, add Packagist webhook for automatic updates
   - Settings → Webhooks → Add webhook
   - Payload URL: `https://packagist.org/api/github?username=YOUR_USERNAME`

## Version Tagging

When releasing new versions:
```bash
# Update composer.json version if needed
git add .
git commit -m "Release v1.1.0"
git tag v1.1.0
git push && git push --tags
```

Packagist will automatically detect the new tag and update the package.

## Changelog

### Version 1.0.0
- Initial release
- Direct URL button on form detail pages
- Copy to clipboard functionality
- Bootstrap modal integration
- Zero configuration
- Composer support
