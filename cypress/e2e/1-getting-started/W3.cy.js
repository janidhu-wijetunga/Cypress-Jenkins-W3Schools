describe('W3Schools Test', () => {

    it('Top Bar Check', () => {

        cy.visit('https://www.w3schools.com/')

        cy.get('#navbtn_tutorials').should('exist').click()
        cy.get('#navbtn_exercises').should('exist').click()
        cy.get('#navbtn_certified').should('exist').click()
        cy.get('#navbtn_services').should('exist').click()
        cy.get('#tnb-google-search-input').should('exist').type("python")
        cy.get('#tnb-dark-mode-toggle-btn').should('exist').click()
        cy.contains('Sign Up').should('exist').click()
        cy.get('.user-profile-component-close-btn').should('exist').click()
        cy.contains('Log in').should('exist').click()
        cy.get('.user-profile-component-close-btn').should('exist').click()

    })

    it('Bottom Bar Check', () => {

        cy.visit('https://www.w3schools.com/')

        cy.get('.subtopnav_firstitem').should('exist').click()
        cy.get('#subtopnav > [href="/css/default.asp"]').should('exist').click()
        cy.get('#subtopnav > [href="/js/default.asp"]').should('exist').click()
        cy.get('#subtopnav > [href="/sql/default.asp"]').should('exist').click()
        cy.get('#subtopnav > [href="/python/default.asp"]').should('exist').click()

    })

})