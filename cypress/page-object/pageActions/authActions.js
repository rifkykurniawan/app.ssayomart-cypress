const homeLocator = require('../pageElements/homepage.json');
const loginLocator = require('../pageElements/loginpage.json');
const registerLocator = require('../pageElements/registerpage.json');

export class authActions {
    clickProfile() {
        cy.get(homeLocator.Home_page.profileIcon).click();
    }
    clickDaftar() {
        cy.get(loginLocator.login_page.daftarButton).click();
    }
    inputNewUsername(username) {
        cy.get(registerLocator.registerPage.inputUsername).type(username);
    }
    inputNewEmail(email) {
        cy.get(registerLocator.registerPage.inputEmail).type(email);
    }
    inputNewPassword(password) {
        cy.get(registerLocator.registerPage.inputPassword).type(password);
    }
    inputNewConfirmPassword(confirmPassword) {
        cy.get(registerLocator.registerPage.inputConfirmPassword).type(confirmPassword);
    }
    clickDaftarButton() {
        cy.get(registerLocator.registerPage.daftarButton).click();
    }
    inputEmail(email) {
        cy.get(loginLocator.login_page.inputEmail).type(email);
    }
    inputPassword(password) {
        cy.get(loginLocator.login_page.inputPassword).type(password);
    }
    clickMasuk() {
        cy.get(loginLocator.login_page.masukButton).click();
    }
    verifyDefaultHomepage() {
        cy.get(homeLocator.Home_page.profileIcon).should('be.visible');
        cy.get(homeLocator.Home_page.iconUser).should('be.visible');
    }
    verifyWarningMessage() {
        cy.get(loginLocator.login_page.warningMessage).should('be.visible');
    }
    clickKeluar() {
        cy.get(homeLocator.Home_page.keluarButton).click();
    }
    verifyAlertLogout() {
        cy.get(loginLocator.login_page.alertLogout).should('be.visible');
        cy.get(loginLocator.login_page.alertLogout).should('have.text', 'Anda telah berhasil keluar.');
        
    }
    changeLanguage(){
        cy.get(homeLocator.Home_page.changeLanguage).click();
    }
    selectEnglishLanguage(){
        cy.get(homeLocator.Home_page.selectEnglishLanguage).click();
    }
}