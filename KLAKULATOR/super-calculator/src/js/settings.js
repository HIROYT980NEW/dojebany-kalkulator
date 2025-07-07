const settings = {
    theme: 'light', // Options: 'light', 'dark'
    precision: 2, // Number of decimal places
    showHistory: true, // Show calculation history
    language: 'en', // Options: 'en', 'pl', etc.
    sound: true, // Enable sound effects
    vibration: false, // Enable vibration feedback on mobile devices
};

function updateSetting(key, value) {
    if (settings.hasOwnProperty(key)) {
        settings[key] = value;
        applySettings();
    } else {
        console.error(`Setting ${key} does not exist.`);
    }
}

function applySettings() {
    // Apply theme
    document.body.className = settings.theme;

    // Update precision in calculations
    // This would typically involve updating the calculator logic
    // to respect the new precision setting.

    // Show or hide calculation history
    const historyElement = document.getElementById('history');
    if (historyElement) {
        historyElement.style.display = settings.showHistory ? 'block' : 'none';
    }

    // Update language settings
    // This would involve updating the UI text based on the selected language.

    // Handle sound and vibration settings
    // This would involve enabling/disabling sound effects and vibration feedback.
}

export { settings, updateSetting };