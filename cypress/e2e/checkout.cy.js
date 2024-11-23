import { checkoutActions } from "../page-object/pageActions/checkoutActions";
import { categoryActions } from "../page-object/pageActions/categoryActions";
import { authActions } from "../page-object/pageActions/authActions";

const checkout_Actions = new checkoutActions();
const category_Actions = new categoryActions();
const auth_Actions = new authActions();

describe('Checkout Module', () => {
    beforeEach(() => {
        cy.visit('https://apps.ssayomart.com')
        auth_Actions.clickProfile();
        auth_Actions.inputRegisteredEmail('ariawanputra@gmail.com');
        auth_Actions.inputRegisteredPassword('megamendung');
        auth_Actions.clickMasuk();
        auth_Actions.changeLanguage();
        auth_Actions.selectEnglishLanguage();
        category_Actions.clickCategoryDropdown();
        category_Actions.clickMinyakDropdown();
    });
    it('TC-001 Success checkout one item', () => {
        checkout_Actions.clickPlusButtonOneProduct();
        checkout_Actions.clickChartButton();
        checkout_Actions.clickSelectAllButton();
        checkout_Actions.clickCheckoutButton();
        //need to add more steps
    });
    it('TC-002 Success checkout multiple item', () => {
        checkout_Actions.clickPlusButtonMultipleProduct();
        checkout_Actions.clickChartButton();
        checkout_Actions.clickSelectAllButton();
        checkout_Actions.clickCheckoutButton();
        //need to add more steps
    });
});