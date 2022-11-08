class Calculator {
	stack = [];
	current = "";
	op = "";
	result = 0;

	add() {
		this.stack.push(Number(this.current));
	}

	substract() {
		this.stack.push(Number(this.current) * -1);
	}

	multiply() {
		const tmp = this.stack.pop();
		this.stack.push(tmp * Number(this.current));
	}

	divide() {
		const tmp = this.stack.pop();
		this.stack.push(tmp / Number(this.current));
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
		this.current = "";
		this.op = "";
		this.result = 0;
	}
}

export const calculator = new Calculator();
