/**
 * Add "Direct URL" button to form detail page
 */
(function() {
    'use strict';

    function addDirectUrlButton() {
        console.log('MauticEmbedUrlOption: Attempting to add Direct URL button');

        // Find the embedded button
        var embeddedButton = document.querySelector('[data-target="#modal-automatic-copy"]');
        console.log('MauticEmbedUrlOption: Found embedded button:', embeddedButton);

        if (!embeddedButton) {
            console.log('MauticEmbedUrlOption: No embedded button found, exiting');
            return;
        }

        // Check if we already added the button
        if (document.getElementById('direct-url-button')) {
            return;
        }

        // Get form ID from the hidden input
        var formIdInput = document.getElementById('entityId');
        if (!formIdInput) {
            console.log('MauticEmbedUrlOption: No entityId input found');
            return;
        }
        var formId = formIdInput.value;

        // Build the form URL (same as iframe src)
        var baseUrl = window.location.origin;
        var formUrl = baseUrl + '/form/' + formId;
        console.log('MauticEmbedUrlOption: Form URL:', formUrl);

        // Clone the embedded button
        var directUrlButton = embeddedButton.cloneNode(true);
        directUrlButton.id = 'direct-url-button';
        directUrlButton.setAttribute('data-target', '#modal-direct-url');

        // Update the button text
        var buttonText = directUrlButton.querySelector('.btn') || directUrlButton;
        buttonText.innerHTML = buttonText.innerHTML.replace(
            embeddedButton.textContent.trim(),
            'Direct URL'
        );

        // var panel is the parent div of #header-embedded
        var headerEmbedded = document.getElementById('header-embedded');
        var panel = headerEmbedded ? headerEmbedded.parentElement : null;

        if (panel) {
            panel.appendChild(directUrlButton);
            console.log('MauticEmbedUrlOption: Button appended to panel-body');
        } else {
            console.log('MauticEmbedUrlOption: No panel-body found');
        }

        // Create the modal
        var modalHtml = `
            <div class="modal fade" id="modal-direct-url">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title fw-sb">Direct URL</h5>
                        </div>
                        <div class="modal-body">
                            <p>Use this direct URL to link to your form:</p>
                            <div class="input-group">
                                <input type="text" class="form-control" readonly value="${formUrl}" onclick="this.select();" id="direct-url-input" />
                                <span class="input-group-btn">
                                    <button class="btn btn-default" type="button" id="copy-url-btn" title="Copy to clipboard">
                                        <i class="fa fa-clipboard"></i>
                                    </button>
                                </span>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-ghost" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Append modal to body
        var modalContainer = document.createElement('div');
        modalContainer.innerHTML = modalHtml;
        document.body.appendChild(modalContainer.firstElementChild);

        // Add copy functionality
        document.getElementById('copy-url-btn').addEventListener('click', function() {
            var input = document.getElementById('direct-url-input');
            input.select();
            try {
                document.execCommand('copy');
                var icon = this.querySelector('i');
                var originalClass = icon.className;
                icon.className = 'fa fa-check text-success';
                setTimeout(function() {
                    icon.className = originalClass;
                }, 2000);
            } catch (err) {
                console.error('Failed to copy:', err);
            }
        });
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', addDirectUrlButton);
    } else {
        addDirectUrlButton();
    }

    // Also try after a short delay in case DOM updates
    setTimeout(addDirectUrlButton, 500);
})();
