describe('Petstore Testing', () => {
    it('Visits PetStore', () => {
        cy.visit('https://petstore.testkube.io/')
        cy.get('.title').should('contain.text', "Swagger Petstore - OpenAPI 3.0")
    })
})
