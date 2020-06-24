describe("On-Boarding forms", () => {
  it("should sucessfuly load signup page", () => {
    cy.visit("http://localhost:3000/signup");
  });

  it("Lets get started page", () => {
    cy.get("#getStarted").click();
  });

  it("Should complete the Getting Personal form", () => {
    cy.get("form").within(() => {
      cy.get('input[name="selected"]').click();
      cy.get(".react-datepicker__month-select").select("December");
      cy.get(".react-datepicker__year-select").select("1991");
      cy.get(":nth-child(1) > .react-datepicker__day--003").click();
      cy.get("#gender").select("female");
      // cy.get('input[name="goalWeight"]')
      //   .type("130")
      //   .should("have.value", "130");
      cy.get("[data-cy=submit]").click();
    });
  });

  it("Should complete How Active are You form", () => {
    cy.get("form").within(() => {
      cy.get("#ActivityLevel3").click();
      cy.get("[data-cy=submit]").click();
    });
  });

  it("Should complete BMI Calc", () => {
    cy.get("form").within(() => {
      cy.get('input[name="ft"]').type("5");
      cy.get('input[name="inch"]').type("2");
      cy.get('input[name="weight"]').type("125");
      cy.get("[data-cy=submit]").click();
    });
  });

  it("Should complete Weight Goal form", () => {
    cy.get("form").within(() => {
      cy.get('input[name="goalWeight"]').clear().type("115");
      cy.get('[style="transform: translateX(-50%); left: 50%;"]').click();
      cy.get("[data-cy=submit]").click();
    });
  });

  it("Should test the various validations", () => {
    cy.get("form").within(() => {
      cy.get('input[name="username"]')
        .type("12345")
        .then(() => {
          cy.get("[data-cy=submit]").click();
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
