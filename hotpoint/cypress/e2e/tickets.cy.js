describe('Ticket Creation Tests', () => {
    it('Create Ticket with attachments', () => {
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

        // Select Issue Source
        cy.wait(10000)
        cy.get('#select2-issue_source_id-container').click()
        cy.get('.select2-search__field').type('inbound{enter}')
        //Select Issue Category
        cy.get('#select2-issue_category_id-container').click()
        cy.get('.select2-search__field').type('request{enter}')
        //Select Issue Sub Category
        cy.get('#select2-issue_sub_category_id-container').click()
        cy.get('.select2-search__field').type('Service{enter}')
        //Choose Channel
        cy.get('#select2-channel_id-container').click()
        cy.get('.select2-search__field').type('b2b{enter}')
        //Choose Disposition
        cy.get('#select2-disposition_id-container').click()
        cy.get('.select2-search__field').type('in{enter}')
        //Choose service center
        cy.get('#select2-service_center_id-container').click()
        cy.get('.select2-search__field').type('cbd{enter}')
        //Enter Comments
        cy.get(':nth-child(9) > .form-control').type('This is just a test with an attachment')

        // Attach file
        cy.get('#toggle_files_section').click()
        cy.get('#files').attachFile('dummypdf.pdf')

        cy.get('#contact-ticket-information > .d-flex > .btn').click()

    })

    it.skip('Create Ticket without attachments', () => {
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

        // Select Issue Source
        cy.wait(10000)
        cy.get('#select2-issue_source_id-container').click()
        cy.get('.select2-search__field').type('inbound{enter}')
        //Select Issue Category
        cy.get('#select2-issue_category_id-container').click()
        cy.get('.select2-search__field').type('request{enter}')
        //Select Issue Sub Category
        cy.get('#select2-issue_sub_category_id-container').click()
        cy.get('.select2-search__field').type('Service{enter}')
        //Choose Channel
        cy.get('#select2-channel_id-container').click()
        cy.get('.select2-search__field').type('b2b{enter}')
        //Choose Disposition
        cy.get('#select2-disposition_id-container').click()
        cy.get('.select2-search__field').type('in{enter}')
        //Choose service center
        cy.get('#select2-service_center_id-container').click()
        cy.get('.select2-search__field').type('cbd{enter}')
        //Enter Comments
        cy.get(':nth-child(9) > .form-control').type('This is just a test without an attachment')

    })

})