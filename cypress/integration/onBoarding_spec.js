describe("On-Boarding forms", () => {
  it("should sucessfuly load signup page", () => {
    cy.visit("http://localhost:3000/signup");
  });

  it("Should show errors under inputs ", () => {
    cy.get("[data-cy=submit]").click();
  });

  it("Should test the various validations", () => {
    cy.get("form").within(() => {
      cy.get('input[name="username"]')
        .type("1Testing")
        .then(() => {
          cy.get("#usernameErr").should(($usernameErr) => {
            const text = $usernameErr.text();
            expect(text).to.match(/Invalid name entry/);
          });
        });
      cy.get('input[name="email"]')
        .type("not_an_email")
        .then(() => {
          cy.get("#emailErr").should(($emailErr) => {
            const text = $emailErr.text();
            expect(text).to.match(/invalid email address/);
          });
        });
      cy.get('input[name="password"]')
        .type("8<")
        .then(() => {
          cy.get("#pwordErr").should(($pwordErr) => {
            const text = $pwordErr.text();
            expect(text).to.match(/Password must have at least 8 characters/);
          });
          cy.get('input[name="password"]')
            .type("greaterthan12")
            .then(() => {
              cy.get("#pwordErr").should(($pwordErr) => {
                const text = $pwordErr.text();
                expect(text).to.match(
                  /Password cannot have more than 12 characters/
                );
              });
            });
        });
      cy.get('input[name="password_repeat"]')
        .type("doesntMatch")
        .then(() => {
          cy.get("#pword2Err").should(($pword2Err) => {
            const text = $pword2Err.text();
            expect(text).to.match(/The passwords do not match/);
          });
        });
      // cy.get("[data-cy=submit]").click();
    });
  });

  it("Should complete initial sign up form", () => {
    cy.get("form").within(() => {
      cy.get('input[name="username"]')
        .clear()
        .type("username")
        .should("have.value", "username");
      cy.get('input[name="email"]')
        .clear()
        .type("email@gmail.com")
        .should("have.value", "email@gmail.com");
      cy.get('input[name="password"]')
        .clear()
        .type("password")
        .should("have.value", "password");
      cy.get('input[name="password_repeat"]')
        .clear()
        .type("password")
        .should("have.value", "password");
      cy.get("[data-cy=submit]").click();
    });
  });
});

describe;
