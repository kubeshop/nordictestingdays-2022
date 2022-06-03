describe('Petstore Testing', () => {
    it('Visits PetStore', () => {
        cy.visit('https://petstore.testkube.io/')
        cy.get('.title').should('contain.text', "Swagger Petstore - OpenAPI 3.0")
        cy.get('#operations-store-getInventory > .opblock-summary > .opblock-summary-control > .arrow').click()
        cy.get('.try-out > .btn').click()
        cy.get('.execute-wrapper > .btn').click()
        cy.get(':nth-child(1) > .responses-table > tbody > .response > .response-col_status').should('contain.text',"200")
    })
})
