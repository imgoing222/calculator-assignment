describe("계산기 작동 테스트", () => {
	it("2 + 3 = 5", () => {
		cy.visit("http://127.0.0.1:5500/index.html");
		cy.contains("button", "2").click();
		cy.contains(".sum", "+").click();
		cy.contains("button", "3").click();
		cy.contains("button", "=").click();
		cy.get(".result").should("have.value", "5");
	});
});
