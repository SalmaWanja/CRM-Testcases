describe('Ticket Creation Tests', () => {
    it('Create Ticket', () => {
        cy.get(':nth-child(8) > .nav_link_header > :nth-child(1)').click()
        cy.contains('Create Ticket').click()

        cy.get('#ticket-contact-search-input').type('salma{enter}')

        // Wait for the search results to appear
        cy.get('#ticket-contact-live-search')
            .should('be.visible')
            .then($dropdown => {
                // Log the contents of the dropdown for debugging
                cy.log($dropdown.html())
            })

        // Attempt to click the desired item
        cy.get('#ticket-contact-live-search')
            .contains('Salma hassan ||')
            .should('be.visible')
            .click({ force: true })

        // Choosing Issue Source
        cy.wait(10000)
        cy.get('#select2-issue_source_id-container').click()
        cy.get('.select2-search__field').type('inbound{enter}')
    })

})