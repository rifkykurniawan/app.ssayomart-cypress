import { categoryActions } from "../page-object/pageActions/categoryActions";
import { authActions } from "../page-object/pageActions/authActions";

const category_Actions = new categoryActions();
const auth_Actions = new authActions();


describe('Category Module', () => {
    beforeEach(() => {
        cy.visit('https://apps.ssayomart.com')
        auth_Actions.clickProfile();
        auth_Actions.inputEmail(data.login.registeredEmail);
        auth_Actions.inputPassword(data.login.validPassword);
        auth_Actions.clickMasuk();
        auth_Actions.changeLanguage();
        auth_Actions.selectEnglishLanguage();
        
    });
    it('TC-001 Verify list category dropdown', () => {
        category_Actions.clickCategoryDropdown();
        category_Actions.verifyCategoryDropdown();
    });
    it('TC-002 Success click every list category dropdown', () => {
        category_Actions.clickCategoryDropdown();
        category_Actions.clickMinyakDropdown();
        cy.go('back');
        category_Actions.clickCategoryDropdown();
        category_Actions.clickSausDropdown();
        cy.go('back');
        category_Actions.clickCategoryDropdown();
        category_Actions.clickTepungDropdown();
        cy.go('back');
        category_Actions.clickCategoryDropdown();
        category_Actions.clickMieDropdown();
        cy.go('back');
        category_Actions.clickCategoryDropdown();
        category_Actions.clickMakananInstantDropdown();
        cy.go('back');
        category_Actions.clickCategoryDropdown();
        category_Actions.clickSusuDropdown();
        cy.go('back');
        category_Actions.clickCategoryDropdown();
        category_Actions.clickMakananKalengDropdown();
        cy.go('back');
        category_Actions.clickCategoryDropdown();
        category_Actions.clickRumputLautDropdown();
        cy.go('back');
        category_Actions.clickCategoryDropdown();
        category_Actions.clickBerasDropdown();
        cy.go('back');
        category_Actions.clickCategoryDropdown();
        category_Actions.clickPerawatanDiriDropdown();
        cy.go('back');
        category_Actions.clickCategoryDropdown();
        category_Actions.clickSnackDropdown();
        cy.go('back');
        category_Actions.clickCategoryDropdown();
        category_Actions.clickPermenDropdown();
        cy.go('back');
        category_Actions.clickCategoryDropdown();
        category_Actions.clickMinumanDropdown();
        cy.go('back');
        category_Actions.clickCategoryDropdown();
        category_Actions.clickMakananKesehatanDropdown();
        cy.go('back');
        category_Actions.clickCategoryDropdown();
        category_Actions.clickDagingDropdown();
        cy.go('back');
        category_Actions.clickCategoryDropdown();
        category_Actions.clickMakananBekuDropdown();
        cy.go('back');
        category_Actions.clickCategoryDropdown();
        category_Actions.clickProduk21Dropdown();
    });
});
