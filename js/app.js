import { calculator } from "./calculator.js";
import { $ } from "./utils.js";

class App {
	result = $(".result");

	init() {
		this.setEventListeners();
	}

	setEventListeners() {
		const digits = $(".digits");
		const operators = $(".operators");

		digits.addEventListener("click", (e) => {
			const digit = e.target.closest(".digit").innerText;
			calculator.current += digit;
			this.showNumberOnDisplay(calculator.current);
		});

		operators.addEventListener("click", (e) => {
			const currentOperator = e.target.closest(".operator").innerText;

			if (currentOperator === "C") {
				calculator.clear();
				this.showNumberOnDisplay(calculator.result);
				return;
			}
			if (currentOperator === "%") {
				calculator.stack.push(Number(calculator.current) / 100);
				return;
			}
			if (currentOperator === "+/-") {
				calculator.current = Number(calculator.current) * -1;
				this.showNumberOnDisplay(calculator.current);
				return;
			}

			switch (calculator.op) {
				case "":
					calculator.stack.push(Number(calculator.current));
					break;
				case "+":
					calculator.add();
					break;
				case "-":
					calculator.substract();
					break;
				case "x":
					calculator.multiply();
					break;
				case "÷":
					calculator.divide();
					break;
			}

			if (currentOperator === "=") {
				calculator.equals();
				this.showNumberOnDisplay(calculator.result);
			} else {
				calculator.current = "";
				calculator.op = currentOperator;
			}
		});
	}

	showNumberOnDisplay(number) {
		this.result.innerText = number;
	}
}

export default App;
