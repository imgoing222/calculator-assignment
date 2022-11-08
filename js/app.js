import { calculator } from "./calculator.js";
import { $, $ALL } from "./utils.js";

class App {
	result = $(".result");

	init() {
		this.setEventListeners();
	}

	setEventListeners() {
		const digits = $ALL(".digit");
		const operators = $ALL(".operator");
		const calculateOperators = ["+", "-", "x", "÷", "="];

		const doNotNeedCalculation = (op) => {
			if (!calculateOperators.includes(op)) return true;
		};

		digits.forEach((digit) =>
			digit.addEventListener("click", (e) => {
				const digit = e.target.innerText;
				calculator.current += digit;
				this.showNumberOnDisplay(calculator.current);
			})
		);

		operators.forEach((operator) =>
			operator.addEventListener("click", (e) => {
				const currentOperator = e.target.innerText;

				// C % +/- 클릭했을 때
				if (doNotNeedCalculation(currentOperator)) {
					switch (currentOperator) {
						case "C":
							calculator.clear();
							this.showNumberOnDisplay(calculator.result);
							break;
						case "%":
							calculator.current = Number(calculator.current) / 100;
							this.showNumberOnDisplay(calculator.current);
							break;
						case "+/-":
							calculator.current = Number(calculator.current) * -1;
							this.showNumberOnDisplay(calculator.current);
							break;
					}
					return;
				}

				// + - x ÷ = 클릭했을 때
				// 저장된 operator로 계산
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
			})
		);
	}

	showNumberOnDisplay(number) {
		this.result.innerText = number;
	}
}

export default App;
