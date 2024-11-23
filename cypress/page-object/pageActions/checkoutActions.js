const productLocator = require('../pageElements/productPage.json');
const chartLocator = require('../pageElements/chartPage.json');

export class checkoutActions {
    clickPlusButtonOneProduct() {
        cy.get(productLocator.productPage.plusButtonProduct1).click();
    }
    clickPlusButtonMultipleProduct() {
        cy.get(productLocator.productPage.plusButtonProduct1).click();
        cy.get(productLocator.productPage.plusButtonProduct2).click();
        cy.get(productLocator.productPage.plusButtonProduct3).click();
    }
    clickChartButton() {
        cy.get(productLocator.productPage.chartButton).click();
    }
    clickDeleteLastButton() {
        cy.get(chartLocator.chartPage.deleteLastButton).click();
    }
    clickDeleteMultipleButton() {
        cy.get(chartLocator.chartPage.deleteButtonItem1).click();
        cy.get(chartLocator.chartPage.deleteButtonItem2).click();
    }
    clickSelectAllButton() {
        cy.get(chartLocator.chartPage.selectAllButton).click();
    }
    clickCheckoutButton() {
        cy.get(chartLocator.chartPage.checkoutButton).click();
    }
}