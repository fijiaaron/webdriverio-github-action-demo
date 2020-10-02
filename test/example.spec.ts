import LoginPage from  './login.page';
import SecurePage from './secure.page';

describe('My Login application', () => {
    it('should login with valid credentials', () => {
        LoginPage.open();
        console.log(browser.getTitle());

        LoginPage.login('tomsmith', 'SuperSecretPassword!');
        expect(SecurePage.flashAlert).toBeExisting();
        expect(SecurePage.flashAlert).toHaveTextContaining('You logged into a secure area!');

        console.log(browser.getTitle());
    });
});
