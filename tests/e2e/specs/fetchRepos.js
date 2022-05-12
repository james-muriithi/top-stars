describe('fetchRepos', () => {
    it('fetches repos', () => {
        cy.visit('/')
        cy.get('.repo-card').should('have.length', 3)
    })
})