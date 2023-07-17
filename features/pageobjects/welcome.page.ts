import Page from './page.base';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class WelcomePage extends Page {
  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  // public async login (username: string, password: string) {
  //     await this.inputUsername.setValue(username);
  //     await this.inputPassword.setValue(password);
  //     await this.btnSubmit.click();
  // }

  /**
   * overwrite specific options to adapt it to page object
   */
  async openPage() {
    await this.open('');
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  async getHTMLSnapshot() {
    let html = await browser.execute(
      () => document.getElementsByTagName('html')[0].innerHTML,
    );
    console.log('this is htnl log: ' + html);
    return html;
  }
}

const welcomePage = new WelcomePage();
export default welcomePage;
