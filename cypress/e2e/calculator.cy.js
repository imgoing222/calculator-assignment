const clickDigit = (text) => cy.contains(".digit", text).click();
const clickOperator = (text) => cy.get(text).click();
const getDisplayNumber = (text) => cy.get(".result").should("have.text", text);

describe("연산 테스트", () => {
	it("-1 + 3 + 5 * 2", () => {
		cy.visit("http://127.0.0.1:5500/index.html");

		clickDigit("1");
		clickOperator(".plusMinusSign");
		clickOperator(".plus");
		clickDigit("3");
		clickOperator(".plus");
		clickDigit("5");
		clickOperator(".times");
		clickDigit("2");
		clickOperator(".equals");

		getDisplayNumber("12");
	});
});

describe("버튼 테스트", () => {
	it("C 버튼 동작", () => {
		cy.visit("http://127.0.0.1:5500/index.html");

		clickDigit("1");
		clickDigit("3");
		clickOperator("C");

		getDisplayNumber("0");
	});

	it("% 버튼 동작", () => {
		cy.visit("http://127.0.0.1:5500/index.html");

		clickDigit("1");
		clickDigit("0");
		clickDigit("0");
		clickOperator("%");
		clickOperator("+");
		clickDigit("7");

		getDisplayNumber("107");
	});
});
