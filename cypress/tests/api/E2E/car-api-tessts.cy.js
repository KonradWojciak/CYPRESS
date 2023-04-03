describe('Car API tests', () => {

    it('GET car list test', () => {
    
        // Step 1
        cy.request({
            method: 'GET',
            url:'http://localhost:8080/cars'
        }).as('details'); /// as  nazywa nam dany request nadajem ALIAS 
        cy.log('Request was sent.')
        
        // Step 2
        cy.get('@details').its('status').should('eq', 200);
        cy.get('@details').its('body').should('not.be.empty');
        cy.log('Request status is correct and response body is not empty.');
    })
    // Debug
    cy.get('@details').then((response) => {
        cy.log('Response was: ' + JSON.stringify(response.body))

    
    })


/// as  nazywa nam dany request nadajem ALIAS 
/// then pozwalapracować z tym co jest wcześeniej