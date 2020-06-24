describe("Dashboard", () => {
  it("should succesfully load", () => {
    cy.visit("http://localhost:3000/dashboard");
  });

  it("Toggler should not be visibe", () => {
    cy.get("navbar-toggler").should("not.be.visible");
  });

  it("Add to Journal button should work", () => {
    cy.get("#add-journal").click();
  });
});
