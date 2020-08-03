describe("Dashboard", () => {
  it("Should successfully complete the signin form and redirect to /dashboard", () => {
    cy.visit("http://nutrivurv.com/signin");
    cy.typeLogin({ email: "test@test.com", password: "123456789" });
    cy.get("[data-cy=submit]").click();
  });
  it("sidebar community link should work and go to /", () => {
    cy.get("#progress").click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/");
    });
  });
});
