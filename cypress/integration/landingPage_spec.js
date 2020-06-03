describe('Landing page', () => {
  it('should sucessfuly load', () => {
    cy.visit('http://localhost:3000')
  })

  it('Join now button should work', () => {
    cy.get('#join-now').click();
    cy.go('back');
  })

  it('Sign in button should work', () => {
    cy.get('#signIn-bttn').click();
  })
})
