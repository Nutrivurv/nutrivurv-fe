describe("Dashboard", () => {
    it("should succesfully load", () => {
        cy.visit("http://localhost:3000/dashboard");
    });

    it("Toggler should not be visibe", () => {
        cy.get("navbar-toggler").should("not.be.visible");
      });

});