describe("Landing page", () => {
  it("should sucessfuly load", () => {
    cy.visit("http://localhost:3000");
  });

  it("navbar logo link should work and go to /", () => {
    cy.get("#logo").click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/");
    });
    cy.go("back");
  });

  it("navbar sign in link should work and go to /signin", () => {
    cy.get("#signIn-link").click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/signin");
    });
    cy.go("back");
  });

  it("navbar sign up link should work and go to /signup", () => {
    cy.get("#signUp-link").click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/signup");
    });
    cy.go("back");
  });

  it("Join now button should work", () => {
    cy.get("#join-now").click();
    cy.go("back");
  });

  it("Sign in button should work", () => {
    cy.get("#signIn-bttn").click();
  });
});
