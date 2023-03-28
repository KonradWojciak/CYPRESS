/// <reference types="cypress"/>

describe("Nasz pierwszy blok testów", () => {
  it("Test z wizytą w siedzibie LMS", () => {
    // cypress code
    cy.visit("https://www.edu.goit.global/account/login");
  });
});
