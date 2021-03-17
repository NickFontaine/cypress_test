describe('Available Pets', () => {
    beforeEach(() => cy.request('/pet/findByStatus?status=available').as('availablePets'));

    it('Validate the header', () => {
        cy.get('@availablePets')
            .its('headers')
            .its('content-type')
            .should('include', 'application/json');
    });

    it('Should return the correct status code', () => {
        cy.get('@availablePets').its('status').should('be.equal', 200);
     });
});