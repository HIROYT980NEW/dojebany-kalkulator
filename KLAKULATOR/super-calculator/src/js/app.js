// This file contains the main JavaScript code for the super calculator application.

import Calculator from '../components/Calculator.js';
import SettingsPanel from '../components/SettingsPanel.js';

class App {
    constructor() {
        this.calculator = new Calculator();
        this.settingsPanel = new SettingsPanel();
        this.init();
    }

    init() {
        this.bindEvents();
        this.render();
    }

    bindEvents() {
        document.getElementById('calculate-btn').addEventListener('click', () => this.calculate());
        document.getElementById('settings-btn').addEventListener('click', () => this.toggleSettings());
    }

    calculate() {
        const input = document.getElementById('calculator-input').value;
        const result = this.calculator.evaluate(input);
        document.getElementById('calculator-result').innerText = result;
    }

    toggleSettings() {
        const settingsPanel = document.getElementById('settings-panel');
        settingsPanel.classList.toggle('hidden');
    }

    render() {
        // Initial rendering logic can be added here
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new App();
});