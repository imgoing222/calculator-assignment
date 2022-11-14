import { calculator } from "./calculator.js";
import { $, $ALL } from "./utils.js";

class App {
	result = $(".result");

	init() {
		this.setEventListeners();
	}

	setEventListeners() {
		const calculatorArea = $(".calculator");

		calculatorArea.addEventListener("click", (e) => {
			const buttons = e.target.closest("div");
			const { buttonType } = buttons.dataset;
			const buttonText = e.target.innerText;

			if (buttonType === "digits") {
				calculator.setDigit(buttonText);
				this.showNumberOnDisplay(calculator.current);
				return;
			}

			if (buttonType === "white-operators") {
				switch (buttonText) {
					case "C":
						calculator.clear();
						this.showNumberOnDisplay(calculator.result);
						break;
					case "%":
						calculator.percent();
						this.showNumberOnDisplay(calculator.current);
						break;
					case "+/-":
						calculator.convertSign();
						this.showNumberOnDisplay(calculator.current);
						break;
				}
				return;
			}

			if (buttonType === "orange-operators") {
				switch (calculator.op) {
					case "":
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

				if (buttonText === "=") {
					calculator.equals();
					this.showNumberOnDisplay(calculator.result);
				} else {
					calculator.current = 0;
					calculator.op = buttonText;
				}
			}
		});
	}

	showNumberOnDisplay(number) {
		this.result.innerText = number;
	}
}

export default App;
