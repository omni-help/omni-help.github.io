// Theme preload script to prevent flash of incorrect theme
// This script runs immediately and sets the theme before the page renders

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
})();