import { LoginPage } from "../pages/Login";
import { HomePage } from "../pages/HomePage";

describe("EDu goIT global testing", () => {
  it("login and logout test", () => {
    const homePage = new HomePage();
    const loginPage = new LoginPage();

    homePage.navigate();

    loginPage.getLoginInput().type("user888@gmail.com");
    loginPage.getPasswordInput().type("1234567890");
    loginPage.getLoginButton().click();

    homePage.getMainMenuButton().click();
    homePage.getFoundLogoutButton().click();
    homePage.getClickLogoutButton().click();
  });
});

//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
