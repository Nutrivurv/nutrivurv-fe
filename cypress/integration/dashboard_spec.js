describe("Dashboard", () => {
  it("Should successfully complete the signin form and redirect to /dashboard", () => {
    cy.visit("http://localhost:3000/signin");
    cy.get("form").within(() => {
      cy.get('input[name="email"]').type("test@mail.com");
      cy.get('input[name="password"]').type("test12345");
      cy.get("[data-cy=submit]").click();
    });
    it("Add to Journal button should work", () => {
      cy.get("#add-journal").click();
      cy.location().should((loc) => {
        expect(loc.pathname).to.eq("/");
      });
    });
  });

  it("sidebar food link should work and go to /", () => {
    cy.get("#food").click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/");
    });
    cy.go("back");
  });

  it("Toggler should not be visibe", () => {
    cy.get("navbar-toggler").should("not.be.visible");
  });
});

describe("page on small screen size", () => {
  it("should set viewport to mobile size", () => {
    cy.viewport(576, 750);
    cy.get(".navbar-toggler").should("be.visible");
    cy.get(".navbar-toggler").click();
    cy.get("#sidebar").find("a").should("be.visible");
  });

  it("sidebar progress link should work and go to /", () => {
    cy.get("#progress").click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/");
    });
  });
});

describe("Dashboard", () => {
  it("Should successfully complete the signin form and redirect to /dashboard", () => {
    cy.visit("http://localhost:3000/signin");
    cy.get("form").within(() => {
      cy.get('input[name="email"]').type("test@mail.com");
      cy.get('input[name="password"]').type("test12345");
      cy.get("[data-cy=submit]").click();
    });
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
  });
});
