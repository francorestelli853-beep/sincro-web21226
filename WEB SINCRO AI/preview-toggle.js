// =========================================
// Collapsible Preview Toggle
// =========================================

function togglePreview(previewId) {
    const preview = document.getElementById(previewId);
    const button = event.currentTarget;
    const icon = button.querySelector('.toggle-icon');

    if (preview.classList.contains('active')) {
        preview.classList.remove('active');
        icon.textContent = '▼';
    } else {
        preview.classList.add('active');
        icon.textContent = '▲';
    }
}
