describe("Dashboard", () => {
  it("Should successfully complete the signin form and redirect to /dashboard", () => {
    cy.visit("http://localhost:3000/signin");
    cy.typeLogin({ email: "test@mail.com", password: "test12345" });
    cy.get("[data-cy=submit]").click();
  });

  it("sidebar progress link should work and go to /", () => {
    cy.get("#progress").click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/");
    });
  });
});
