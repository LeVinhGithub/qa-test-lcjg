import {
  productPageCell,
  productPageColumnHeaderRootByTitle,
  productPageFilterColumnInput,
  productPageMenuIconByTitle,
  productPageOptionMenuByText,
} from '../../locator/producr.locator';
import Page from './page.base';

export const COLUMN_TABLE = {
  ID: 1,
  CATEGORY: 2,
  NAME: 3,
  IN_STOCK: 4,
  PRICE: 5,
};

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ProductPage extends Page {
  /**
   * define selectors using getter methods
   */
  async setFilter(titleColumn: string, value: string) {
    await this.hoverElement(
      productPageColumnHeaderRootByTitle(titleColumn) +
        '//div[@class="MuiDataGrid-columnHeaderTitle"]',
    );
    await this.clickElement(productPageMenuIconByTitle(titleColumn));
    await this.clickElement(productPageOptionMenuByText('Filter'));
    await this.inputElement(productPageFilterColumnInput('Value'), value);
    await browser.pause(1000);
    await browser.keys('\uE00C');
  }

  /**
   * Check the value contain the expected value and unique
   * Because don't have enough time so will not include the while loop to loop all pages
   */
  async checkResultContainExpectedValue(index: number, value: string) {
    const listCell = await $$(productPageCell(index));
    for (const cell of listCell) {
      let cellValue = await cell.getText();
      let cellValueArr = cellValue.split(',');
      if (!(await this.isContainAndUnique(cellValueArr, value))) {
        return false;
      }
    }
    return true;
  }

  private async isContainAndUnique(arr: string[], value: string) {
    const hasNoDuplicates = arr.length === new Set(arr).size;
    const hasContains = arr.includes(value);
    return hasNoDuplicates && hasContains;
  }
}

const productPage = new ProductPage();
export default productPage;
