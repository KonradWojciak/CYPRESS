describe("nazwa testu", () => {
  
 /// GET  
    it("corect work with GET", () => {
    ///funkcja bez parametrów to implementacja testu
    cy.request({
      method: "GET",
      failOnStatusCode: false,
      url: "http://locallhlblhbh.bhlkbk",
    }).as("details"); /// nadajemy wywołaniu alias DETAILS
    cy.log("Request was sent");
    // Step 1
    cy.get("details").its("status").should("eq", 200);

    cy.log("Request status is corect"); ///

    cy.get("@details").its("body").should("not.be.empty"); /// body nie jest puste
    cy.log("Body is not empty.");

    // aDebug 
    cy.get('@details').then((response) => {
    cy.log('Response was: ' + JSON.stringify(response.body)) // sprawdzamy dokładnie co jest w body
  });

/////           POST
it("corect work with POST", () => {
    ///funkcja bez parametrów to implementacja testu
    cy.request({
      method: "POST",
      failOnStatusCode: false,
      url: "http://locallhlblhbh.bhlkbk",
      body:{                            // warto randomizowac te dane
            "Nazwa elementu":"Stołek",
            "Szczegól elementu":"Zileony"
      },
    }).as("details"); /// nadajemy wywołaniu alias DETAILS
    cy.log("Request was sent");

    // Step 1
    cy.get("details").its("status").should("eq", 200);

    cy.log("Request status is corect"); ///
    // Step 2
    cy.get("@details").its("body").should("not.be.empty"); /// body nie jest puste
    cy.log("Body is not empty.");

    // Step 3
    cy.get('@details').then((response) => {
    cy.wrap(JSON.stringify(response.body))                // .wrap  cypresuje czyli 
    .should('include', "Stołek" )
    .should('include', "Zielony" )

  });
    
//////////////   DELETE

it("corect work with Delete new added ", () => {

    let id;

    //SET-UP
    cy.request({
      method: "POST",
      failOnStatusCode: false,
      url: "http://locallhlblhbh.bhlkbk",
      body:{                           
            "Nazwa elementu":"Stołek",
            "Szczegól elementu":"Zileony"
      },
    }).as("testData");
    cy.get("@testData").its("status").should("eq", 200);

    cy.get('@testData').then((response) => {

        const id = response.body.length
        cy.log("New element was created with id =" + id);
        Cypress.env("id", id)
    })

    cy.log("Del Test Data created correctly.") 
   
    // Step 1                           /// usuwamy

cy.then(()=>{                           
    const id = Cypress.env("id")        // przypisujemy zmienna ID do środowiska cypress
    cy.request({
        method: "DELETE",
        failOnStatusCode: false,
        url: `http://locallhlblhbh/bhlkbk${id}`,
      }).as("@details");
      cy.get("@details").its("status").should("eq", 200);

// Step 2                       Sprawdzamy czy ie ma 
    
cy.get('@details').then((response) => {
    cy.wrap(JSON.stringify(response.body))              
    .should('not.include', "Stołek" )
    .should('not.include', "Zielony" );
    
})



////////////// sprawdzamy szybkośc
  it("Test time duretion",() =>{
    cy.request(request).then(response => {
        assert.isTrue(response.duration <= 150)
      })
  })

});

})
/// failOnStatusCode: false
///it.only odpala tylko ten konkretny