// Theme preload script to prevent flash of incorrect theme
// This script runs immediately and sets the theme before the page renders

// Create and inject style element to hide content until theme is applied
(function () {
    // Create style element
    const style = document.createElement('style');
    style.textContent = 'html:not([data-theme-ready]) { opacity: 0; }';

    // Inject style element at the beginning of head for immediate effect
    const head = document.head || document.getElementsByTagName('head')[0];
    if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
    } else {
        head.appendChild(style);
    }
})();

// Apply theme
(function () {
    // Get saved preference or default to system
    const savedTheme = localStorage.getItem('theme-preference') || 'system';

    // Apply theme immediately
    if (savedTheme === 'system') {
        // Check system preference
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
    } else {
        // Apply saved theme
        document.documentElement.setAttribute('data-theme', savedTheme);
    }

    // Mark as ready and make visible after a brief delay to ensure CSS has applied
    setTimeout(function () {
        document.documentElement.setAttribute('data-theme-ready', 'true');
    }, 20);
})();