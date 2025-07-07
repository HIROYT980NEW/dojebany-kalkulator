class Calculator {
    constructor() {
        this.currentValue = 0;
        this.previousValue = null;
        this.operation = null;
    }

    clear() {
        this.currentValue = 0;
        this.previousValue = null;
        this.operation = null;
    }

    appendNumber(number) {
        if (this.currentValue === 0) {
            this.currentValue = number;
        } else {
            this.currentValue = `${this.currentValue}${number}`;
        }
    }

    chooseOperation(operation) {
        if (this.currentValue === 0) return;
        if (this.previousValue !== null) {
            this.compute();
        }
        this.operation = operation;
        this.previousValue = this.currentValue;
        this.currentValue = 0;
    }

    compute() {
        let computation;
        const prev = parseFloat(this.previousValue);
        const current = parseFloat(this.currentValue);
        if (isNaN(prev) || isNaN(current)) return;

        switch (this.operation) {
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case '*':
                computation = prev * current;
                break;
            case '/':
                computation = prev / current;
                break;
            default:
                return;
        }
        this.currentValue = computation;
        this.operation = null;
        this.previousValue = null;
    }

    getDisplayValue() {
        return this.currentValue.toString();
    }
}

export default Calculator;