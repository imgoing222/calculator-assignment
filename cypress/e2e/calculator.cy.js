const clickDigit = (text) => cy.contains(".digit", text).click();
const clickOperator = (text) => cy.contains(".operator", text).click();
const getDisplayNumber = (text) => cy.get(".result").should("have.text", text);

describe("연산 테스트", () => {
	it("-1 + 3 + 5 * 2", () => {
		cy.visit("http://127.0.0.1:5500/index.html");

		clickDigit("1");
		clickOperator("+/-");
		clickOperator("+");
		clickDigit("3");
		clickOperator("+");
		clickDigit("5");
		clickOperator("x");
		clickDigit("2");
		clickOperator("=");

		getDisplayNumber("12");
	});
});
