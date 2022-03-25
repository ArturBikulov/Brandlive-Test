const ProductsPage = require("../Page objects/Product.page");

describe("Product", () => {
  it("All Hands section on Products", async () => {
    // Navigate to Brandlive website
    await ProductsPage.open();
    await ProductsPage.products();
    // scroll to view video
    await $('[class="btn  play video"]').scrollIntoView();
    //await expect($('[class="btn  play video"]')).toBeDisplayed();
    await $('[class="btn  play video"]').click();
    // see in action don't work all selectors, stuck here
  });
});
