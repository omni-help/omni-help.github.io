// Theme switcher functionality

// Function to set the theme
function setTheme(theme) {
    // If theme is 'system', check system preference
    if (theme === 'system') {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
        document.getElementById('theme-toggle').checked = prefersDark;
    } else {
        document.documentElement.setAttribute('data-theme', theme);
        document.getElementById('theme-toggle').checked = (theme === 'dark');
    }

    // Save preference to localStorage
    localStorage.setItem('theme-preference', theme);

    // Update the select dropdown
    document.getElementById('theme-select').value = theme;
}

// Function to initialize theme
function initializeTheme() {
    // Create theme toggle container
    const toggleContainer = document.createElement('div');
    toggleContainer.className = 'theme-toggle-container';

    // Create toggle switch
    const toggleLabel = document.createElement('label');
    toggleLabel.className = 'theme-toggle';

    const toggleInput = document.createElement('input');
    toggleInput.type = 'checkbox';
    toggleInput.id = 'theme-toggle';

    const toggleSlider = document.createElement('span');
    toggleSlider.className = 'theme-toggle-slider';

    toggleLabel.appendChild(toggleInput);
    toggleLabel.appendChild(toggleSlider);

    // Create select dropdown for system preference
    const themeSelect = document.createElement('select');
    themeSelect.id = 'theme-select';
    themeSelect.className = 'theme-select';

    const optionSystem = document.createElement('option');
    optionSystem.value = 'system';
    optionSystem.textContent = 'System';

    const optionLight = document.createElement('option');
    optionLight.value = 'light';
    optionLight.textContent = 'Light';

    const optionDark = document.createElement('option');
    optionDark.value = 'dark';
    optionDark.textContent = 'Dark';

    themeSelect.appendChild(optionSystem);
    themeSelect.appendChild(optionLight);
    themeSelect.appendChild(optionDark);

    // Add elements to container
    toggleContainer.appendChild(toggleLabel);
    toggleContainer.appendChild(themeSelect);

    // Add container to body
    document.body.appendChild(toggleContainer);

    // Get saved preference or default to system
    const savedTheme = localStorage.getItem('theme-preference') || 'system';

    // Set initial theme
    setTheme(savedTheme);

    // Add event listeners
    toggleInput.addEventListener('change', function () {
        setTheme(this.checked ? 'dark' : 'light');
    });

    themeSelect.addEventListener('change', function () {
        setTheme(this.value);
    });

    // Listen for system preference changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
        if (localStorage.getItem('theme-preference') === 'system') {
            setTheme('system');
        }
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeTheme);