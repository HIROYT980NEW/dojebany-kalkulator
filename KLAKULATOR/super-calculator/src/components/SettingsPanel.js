class SettingsPanel {
    constructor() {
        this.settings = {
            theme: 'light',
            precision: 2,
            showHistory: true,
        };
        this.init();
    }

    init() {
        this.createSettingsUI();
        this.loadSettings();
    }

    createSettingsUI() {
        const panel = document.createElement('div');
        panel.className = 'settings-panel';

        const themeLabel = document.createElement('label');
        themeLabel.innerText = 'Theme:';
        const themeSelect = document.createElement('select');
        themeSelect.innerHTML = `
            <option value="light">Light</option>
            <option value="dark">Dark</option>
        `;
        themeSelect.value = this.settings.theme;
        themeSelect.addEventListener('change', (e) => {
            this.updateSetting('theme', e.target.value);
        });

        const precisionLabel = document.createElement('label');
        precisionLabel.innerText = 'Precision:';
        const precisionInput = document.createElement('input');
        precisionInput.type = 'number';
        precisionInput.value = this.settings.precision;
        precisionInput.addEventListener('change', (e) => {
            this.updateSetting('precision', e.target.value);
        });

        const historyLabel = document.createElement('label');
        historyLabel.innerText = 'Show History:';
        const historyCheckbox = document.createElement('input');
        historyCheckbox.type = 'checkbox';
        historyCheckbox.checked = this.settings.showHistory;
        historyCheckbox.addEventListener('change', (e) => {
            this.updateSetting('showHistory', e.target.checked);
        });

        panel.appendChild(themeLabel);
        panel.appendChild(themeSelect);
        panel.appendChild(precisionLabel);
        panel.appendChild(precisionInput);
        panel.appendChild(historyLabel);
        panel.appendChild(historyCheckbox);

        document.body.appendChild(panel);
    }

    loadSettings() {
        // Load settings from local storage or default values
        const savedSettings = JSON.parse(localStorage.getItem('calculatorSettings'));
        if (savedSettings) {
            this.settings = { ...this.settings, ...savedSettings };
        }
    }

    updateSetting(key, value) {
        this.settings[key] = value;
        localStorage.setItem('calculatorSettings', JSON.stringify(this.settings));
        this.applySettings();
    }

    applySettings() {
        // Apply the settings to the calculator UI
        document.body.className = this.settings.theme;
        // Additional logic to apply precision and history settings can be added here
    }
}

export default SettingsPanel;