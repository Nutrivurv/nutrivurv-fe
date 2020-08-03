describe("Food", () => {
  it("Should successfully complete the signin form and redirect to /dashboard", () => {
    cy.visit("http://nutrivurv.com/signin");
    cy.typeLogin({ email: "test@test.com", password: "123456789" });
    cy.get("[data-cy=submit]").click();
  });
  it("sidebar food link should work and go to /", () => {
    cy.get("#food").click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/");
    });
  });
});
