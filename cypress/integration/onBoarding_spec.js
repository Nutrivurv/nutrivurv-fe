describe("On-Boarding forms", () => {
  it("should sucessfuly load signup page", () => {
    cy.visit("http://localhost:3000/signup");
  });

  it("Should show errors under inputs ", () => {
    cy.get("[data-cy=submit]").click();
  });

  it("Should complete initial sign up form", () => {
    cy.get("form").within(() => {
      cy.get('input[name="username"]')
        .type("username")
        .should("have.value", "username");
      cy.get('input[name="email"]')
        .type("email@gmail.com")
        .should("have.value", "email@gmail.com");
      cy.get('input[name="password"]')
        .type("password")
        .should("have.value", "password");
      cy.get('input[name="password_repeat"]')
        .type("password")
        .should("have.value", "password");
      cy.get("[data-cy=submit]").click();
    });
  });
  it("Should complete the Getting Personal form", () => {
    cy.get("form").within(() => {
      cy.get('input[name="age"]').type("26");
      cy.get('select')
        .select("female")
        cy.get('input[name="goalWeight"]')
        .type("130")
        .should("have.value", "130");
    });
  })
});
