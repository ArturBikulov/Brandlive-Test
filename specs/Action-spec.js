const SeeItInactionPage = require("../Page objects/Action.page");


describe("See it in action", () => {
  it("Should be able to request demo", async () => {
    // Navigate to Branlive website
    await SeeItInactionPage.open();
    // Request demo actions
    await SeeItInactionPage.action(); 
    // Can't find right selctor for choose date , stuck here
  });
});