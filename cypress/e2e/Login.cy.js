import { authActions } from "../page-object/pageActions/authActions";
const data = require('../fixtures/data.json');

const auth_Actions = new authActions();

describe('Authentication Module', () => {
  beforeEach(() => {
    cy.visit(data.URL.ssayomart)
  });
  it('TC001 - Success sign up with valid data', () => {
    auth_Actions.clickProfile();
    auth_Actions.clickDaftar();
    auth_Actions.inputNewUsername(data.login.newUsername);
    auth_Actions.inputNewEmail(data.login.newEmail);
    auth_Actions.inputNewPassword(data.login.newPassword);
    auth_Actions.inputNewConfirmPassword(data.login.newPassword);
    auth_Actions.clickDaftarButton();
  });
  it('TC002 - Success login with valid data', () => {
    auth_Actions.clickProfile();
    auth_Actions.inputEmail(data.login.registeredEmail);
    auth_Actions.inputPassword(data.login.validPassword);
    auth_Actions.clickMasuk();
    auth_Actions.verifyDefaultHomepage();
  });
  it('TC003 - Failed login with invalid email and valid password', () => {
    auth_Actions.clickProfile();
    auth_Actions.inputEmail(data.login.invalidEmail);
    auth_Actions.inputPassword(data.login.validPassword);
    auth_Actions.clickMasuk();
    auth_Actions.verifyWarningMessage();
  });
  it('TC004 - Failed login with invalid password and valid email', () => {
    auth_Actions.clickProfile();
    auth_Actions.inputEmail(data.login.registeredEmail);
    auth_Actions.inputPassword(data.login.invalidPassword);
    auth_Actions.clickMasuk();
    auth_Actions.verifyWarningMessage();
  });
  it('TC005 - Failed login with invalid email and invalid password', () => {
    auth_Actions.clickProfile();
    auth_Actions.inputEmail(data.login.invalidEmail);
    auth_Actions.inputPassword(data.login.invalidPassword);
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
    auth_Actions.inputPassword(data.login.invalidPassword);
    auth_Actions.clickMasuk();
    auth_Actions.verifyWarningMessage();
  });
  it('TC008 - Failed login with invalid email and empty password', () => {
    auth_Actions.clickProfile();
    auth_Actions.inputEmail(data.login.invalidEmail);
    auth_Actions.clickMasuk();
    auth_Actions.verifyWarningMessage();
  });
  it('TC009 - Failed login with empty email and valid password', () => {
    auth_Actions.clickProfile();
    auth_Actions.inputPassword(data.login.validPassword);
    auth_Actions.clickMasuk();
    auth_Actions.verifyWarningMessage();
  });
  it('TC010 - Failed login with valid email and empty password', () => {
    auth_Actions.clickProfile();
    auth_Actions.inputEmail(data.login.registeredEmail);
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
    auth_Actions.inputEmail(data.login.registeredEmail);
    auth_Actions.inputPassword(data.login.validPassword);
    auth_Actions.clickMasuk();
    auth_Actions.clickProfile();
    auth_Actions.clickKeluar();
    auth_Actions.verifyAlertLogout();
  });

})