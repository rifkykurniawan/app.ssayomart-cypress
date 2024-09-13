import { authActions } from "../../page-object/pageActions/authActions";

const auth_Actions = new authActions();

describe('Authentication Module', () => {
  beforeEach(() => {
    cy.visit('https://apps.ssayomart.com')
  });
  it('TC001 - Success sign up with valid data', () => {
    auth_Actions.clickProfile();
    auth_Actions.clickDaftar();
    auth_Actions.inputNewUsername('ariawanputra');
    auth_Actions.inputNewEmail('ariawanputra@gmail.com');
    auth_Actions.inputNewPassword('megamendung');
    auth_Actions.inputNewConfirmPassword('megamendung');
    auth_Actions.clickDaftarButton();
  });

  it('TC002 - Success login with valid data', () => {
    auth_Actions.clickProfile();
    auth_Actions.inputRegisteredEmail('ariawanputra@gmail.com');
    auth_Actions.inputRegisteredPassword('megamendung');
    auth_Actions.clickMasuk();
    auth_Actions.verifyDefaultHomepage();
  });

  it('TC003 - Failed login with invalid email', () => {
    auth_Actions.clickProfile();
    auth_Actions.inputRegisteredEmail('invalidemail@gmail.com');
    auth_Actions.inputRegisteredPassword('megamendung');
    auth_Actions.clickMasuk();
    auth_Actions.verifyWarningMessage();
  });

  it('TC004 - Failed login with invalid password', () => {
    auth_Actions.clickProfile();
    auth_Actions.inputRegisteredEmail('ariawanputra@gmail.com');
    auth_Actions.inputRegisteredPassword('invalidpassword');
    auth_Actions.clickMasuk();
    auth_Actions.verifyWarningMessage();
  });

  it('TC005 - Failed login with invalid email and password', () => {
    auth_Actions.clickProfile();
    auth_Actions.inputRegisteredEmail('ariawanputra@gmail.com');
    auth_Actions.inputRegisteredPassword('invalidpassword');
    auth_Actions.clickMasuk();
    auth_Actions.verifyWarningMessage();
  });

  it('TC006 - Failed login with empty email and password', () => {
    auth_Actions.clickProfile();
    auth_Actions.clickMasuk();
    auth_Actions.verifyWarningMessage();
  });

  it('TC007 - Failed login with empty email and invalid password', () => {
    auth_Actions.clickProfile();
    auth_Actions.inputRegisteredPassword('invalidpassword');
    auth_Actions.clickMasuk();
    auth_Actions.verifyWarningMessage();
  });

  it('TC008 - Failed login with invalid email and empty password', () => {
    auth_Actions.clickProfile();
    auth_Actions.inputRegisteredEmail('invalidemail@gmail.com');
    auth_Actions.clickMasuk();
    auth_Actions.verifyWarningMessage();
  });

  it('TC009 - Failed login with empty email and valid password', () => {
    auth_Actions.clickProfile();
    auth_Actions.inputRegisteredPassword('megamendung');
    auth_Actions.clickMasuk();
    auth_Actions.verifyWarningMessage();
  });

  it('TC010 - Failed login with valid email and empty password', () => {
    auth_Actions.clickProfile();
    auth_Actions.inputRegisteredEmail('ariawanputra@gmail.com');
    auth_Actions.clickMasuk();
    auth_Actions.verifyWarningMessage();
  });

  it('TC011 - Failed login with empty email and empty password', () => {
    auth_Actions.clickProfile();
    auth_Actions.clickMasuk();
    auth_Actions.verifyWarningMessage();
  });

  it('TC012 - Success logout', () => {
    auth_Actions.clickProfile();
    auth_Actions.inputRegisteredEmail('ariawanputra@gmail.com');
    auth_Actions.inputRegisteredPassword('megamendung');
    auth_Actions.clickMasuk();
    auth_Actions.clickProfile();
    auth_Actions.clickKeluar();
    auth_Actions.verifyAlertLogout();
  });

})