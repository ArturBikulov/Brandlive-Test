const Page = require("../base/page");

class ProductsPage extends Page {
    // Choose Products button 
    get productsBtn() {return $('#menu-item-828');}
    // Choose All Hands button
    get allHandsBtn() {return $('#menu-item-6612');}
    
async products() {
    // Click on products button
    await this.productsBtn.click();
    // Click on All Hands button
    await this.allHandsBtn.click();
}  
}

module.exports = new ProductsPage();
