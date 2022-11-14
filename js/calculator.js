class Calculator {
	stack = [];
	current = 0;
	op = "";
	result = 0;

	setDigit(digit) {
		calculator.current = Number(`${calculator.current}${digit}`);
	}

	add() {
		this.stack.push(this.current);
	}

	substract() {
		this.stack.push(this.current * -1);
	}

	multiply() {
		const tmp = this.stack.pop();
		this.stack.push(tmp * this.current);
	}

	divide() {
		const tmp = this.stack.pop();
		this.stack.push(tmp / this.current);
	}

	percent() {
		calculator.current /= 100;
	}

	convertSign() {
		calculator.current *= -1;
	}

	equals() {
		const res = this.stack.reduce((sum, curr) => sum + curr);
		this.stack = [];
		this.current = res;
		this.op = "";
		this.result = res;
	}

	clear() {
		this.stack = [];
		this.current = 0;
		this.op = "";
		this.result = 0;
	}
}

export const calculator = new Calculator();
