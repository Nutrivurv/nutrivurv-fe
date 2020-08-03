describe("Dashboard", () => {
  it("Should successfully complete the signin form and redirect to /dashboard", () => {
    cy.visit("http://localhost:3000/signin");
    cy.typeLogin({ email: "test@mail.com", password: "test12345" });
    cy.get("[data-cy=submit]").click();
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

describe("Searchbar", () => {
  it("Add to Journal button should work", () => {
    cy.visit("http://localhost:3000/signin");
    cy.typeLogin({ email: "test@mail.com", password: "test12345" });
    cy.get("[data-cy=submit]").click();
    cy.get("#add-journal").click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/dashboard/food-search");
    });
  });
  it("Searchbar should function", () => {
    cy.get("#inputSearch").type("Bacon");
    cy.get("[data-cy=submit]").click();
  });
  it("Loader should popup when searching", () => {
    cy.get(".loader").should("be.visible");
  });
  it("Search Results List should appear", () => {
    cy.get("#searchList").should("be.visible");
    cy.get("#searchList").contains("Bacon");
  });
  it("Should be able to Click on item in list", () => {
    cy.get("#searchItem").should("be.visible");
    cy.get("#searchItem").click();
  });
  it("Nutrition Card should appear after item click", () => {
    cy.get(".nutrition").should("be.visible");
  });
});

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
    cy.go("back");
  });

  it("sidebar community link should work and go to /", () => {
    cy.get("#progress").click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/");
    });
  });

  it("Sidebar Budget should populate data", () => {
    cy.visit("/dashboard");
    cy.typeLogin({ email: "test@mail.com", password: "test12345" });
    cy.get("[data-cy=submit]").click();
    cy.get(".data").should("be.visible");
    cy.get("#calories").contains("2214 kcal");
    cy.get("#fats").contains("62 g");
    cy.get("#carbs").contains("123 g");
    cy.get("#protein").contains("62 g");
  });
});
