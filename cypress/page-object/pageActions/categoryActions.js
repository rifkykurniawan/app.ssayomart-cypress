const categoryLocator = require('../pageElements/categoryPage.json');
const homeLocator = require('../pageElements/homepage.json');

export class categoryActions {
    clickCategoryDropdown() {
        cy.get(homeLocator.Home_page.categoryDropdown).click();
    }
    verifyCategoryDropdown() {
        cy.get(homeLocator.Category_Dropdown.minyakDropdown).should('be.visible');
        cy.get(homeLocator.Category_Dropdown.sausDropdown).should('be.visible');
        cy.get(homeLocator.Category_Dropdown.tepungDropdown).should('be.visible');
        cy.get(homeLocator.Category_Dropdown.mieDropdown).should('be.visible');
        cy.get(homeLocator.Category_Dropdown.makananInstantDropdown).should('be.visible');
        cy.get(homeLocator.Category_Dropdown.susuDropdown).should('be.visible');
        cy.get(homeLocator.Category_Dropdown.makananKalengDropdown).should('be.visible');
        cy.get(homeLocator.Category_Dropdown.rumputLautDropdown).should('be.visible');
        cy.get(homeLocator.Category_Dropdown.berasDropdown).should('be.visible');
        cy.get(homeLocator.Category_Dropdown.perawatanDiriDropdown).should('be.visible');
        cy.get(homeLocator.Category_Dropdown.snackDropdown).should('be.visible');
        cy.get(homeLocator.Category_Dropdown.permenDropdown).should('be.visible');
        cy.get(homeLocator.Category_Dropdown.minumanDropdown).should('be.visible');
        cy.get(homeLocator.Category_Dropdown.makananKesehatanDropdown).should('be.visible');
        cy.get(homeLocator.Category_Dropdown.dagingDropdown).should('be.visible');
        cy.get(homeLocator.Category_Dropdown.makananBekuDropdown).should('be.visible');
        cy.get(homeLocator.Category_Dropdown.produk21Dropdown).should('be.visible');
    }

    clickMinyakDropdown() {
        cy.get(homeLocator.Category_Dropdown.minyakDropdown).click();
    }
    clickSausDropdown() {
        cy.get(homeLocator.Category_Dropdown.sausDropdown).click();
    }
    clickTepungDropdown() {
        cy.get(homeLocator.Category_Dropdown.tepungDropdown).click();
    }
    clickMieDropdown() {
        cy.get(homeLocator.Category_Dropdown.mieDropdown).click();
    }
    clickMakananInstantDropdown() {
        cy.get(homeLocator.Category_Dropdown.makananInstantDropdown).click();
    }
    clickSusuDropdown() {
        cy.get(homeLocator.Category_Dropdown.susuDropdown).click();
    }
    clickMakananKalengDropdown() {
        cy.get(homeLocator.Category_Dropdown.makananKalengDropdown).click();
    }
    clickRumputLautDropdown() {
        cy.get(homeLocator.Category_Dropdown.rumputLautDropdown).click();
    }
    clickBerasDropdown() {
        cy.get(homeLocator.Category_Dropdown.berasDropdown).click();
    }
    clickPerawatanDiriDropdown() {
        cy.get(homeLocator.Category_Dropdown.perawatanDiriDropdown).click();
    }
    clickSnackDropdown() {
        cy.get(homeLocator.Category_Dropdown.snackDropdown).click();
    }
    clickPermenDropdown() {
        cy.get(homeLocator.Category_Dropdown.permenDropdown).click();
    }
    clickMinumanDropdown() {
        cy.get(homeLocator.Category_Dropdown.minumanDropdown).click();
    }
    clickMakananKesehatanDropdown() {
        cy.get(homeLocator.Category_Dropdown.makananKesehatanDropdown).click();
    }
    clickDagingDropdown() {
        cy.get(homeLocator.Category_Dropdown.dagingDropdown).click();
    }
    clickMakananBekuDropdown() {
        cy.get(homeLocator.Category_Dropdown.makananBekuDropdown).click();
    }
    clickProduk21Dropdown() {
        cy.get(homeLocator.Category_Dropdown.produk21Dropdown).click();
    }
    clickBumbuDropdown() {
        cy.get(homeLocator.Category_Dropdown.bumbuDropdown).click();
    }
}