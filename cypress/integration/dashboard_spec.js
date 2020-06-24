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

  it("sidebar food link should work and go to /", () => {
    cy.get("#food").click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/");
    });
    cy.go("back");
  });

  it("sidebar progress link should work and go to /", () => {
    cy.get("#progress").click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/");
    });
    cy.go("back");
  });

  it("sidebar community link should work and go to /", () => {
    cy.get("#progress").click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/");
    });
    cy.go("back");
  });
});

describe("page on small screen size", () => {
  it("should set viewport to mobile size", () => {
    cy.viewport(576, 750);
    cy.get(".navbar-toggler").should("be.visible");

  });
});
