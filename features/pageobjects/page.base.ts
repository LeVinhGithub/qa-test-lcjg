import { environments } from '../../config';
import { FE_ENV_E2E } from '../../constants';

/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
export default class Page {
  /**
   * Opens a page
   * @param path path of the sub page (e.g. /path/to/page.html)
   */
  async open(path: string) {
    await browser.maximizeWindow();
    await browser.url(`${environments[FE_ENV_E2E]}${path}`);
  }

  async clickElement(locator: string) {
    const element = await $(locator);
    await element.waitForDisplayed();
    await element.click();
}

async hoverElement(locator: string) {
    const element = await $(locator);
    await element.moveTo();
}

async selectSelectDropdownElement(locator: string, option: string) {
    const element = await $(locator);
    await browser.pause(2000)
    await element.selectByIndex(1);
  }

  async inputElement(locator: string, value: string) {
    const element = await $(locator);
    await element.setValue(value);
  }
}
