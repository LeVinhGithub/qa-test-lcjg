export const productPageColumnHeaderRootByTitle = (title: string) => {
  return `//div[div/div[@class="MuiDataGrid-columnHeaderTitle" and text()='${title}']]`;
};

export const productPageMenuIconByTitle = (title: string) => {
  return `${productPageColumnHeaderRootByTitle(
    title,
  )}//button[@aria-label="Menu"]`;
};

export const productPageOptionMenuByText = (option: string) => {
  return `//div[@class="MuiGridMenu-root"]//li[text()='${option}']`;
};

export const productPageFilterColumnRootByText = (columnName: string) => {
  return `//div[@class="MuiGridPanel-root"]//div[label[text()='${columnName}']]`;
};

export const productPageFilterColumnDropdown = (columnName: string) => {
  return `${productPageFilterColumnRootByText(columnName)}//select`;
};

export const productPageFilterColumnInput = (columnName: string) => {
  return `${productPageFilterColumnRootByText(columnName)}//input`;
};

export const productPageCell = (index: number) => {
  return `//div[@role="row"]/div[@role="cell"][${index}]`;
};
