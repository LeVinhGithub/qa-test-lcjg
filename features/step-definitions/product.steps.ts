import { Given, When, Then, DataTable } from '@wdio/cucumber-framework';
import productPage from '../pageobjects/product.page';

const COL_INDEX = {
  ID: 1,
  Categories: 2,
  Name: 3,
  'In Stock': 4,
  Price: 5,
};

When(
  /^I filter product list and should see product list display correctly$/,
  async (table: DataTable) => {
    const data = table.hashes();
    for (const item of data) {
      const column = item['column'];
      const value = item['value'];

      await productPage.open('products');
      await productPage.setFilter(column, value);

      let result = await productPage.checkResultContainExpectedValue(
        COL_INDEX[column],
        value,
      );
      expect(result).toBe(true);
    }
  },
);
