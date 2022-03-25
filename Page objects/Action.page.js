const Page = require("../base/page");

class ActionPage extends Page {
    // Click on button see it in action
    get actionBtn() {return $('#menu-item-829');}
    // Choose First name input
    get firstNameInput() {return $('[name="firstname"]');}
    // Choose last name input
    get lastNameInput() {return $('[name="lastname"]');}
    // Choose Email input
    get emailInput() {return $('[inputmode="email"]');}
    // Choose phone number
    get phoneNumberInput() {return $('[name="phone"]');}
    // Choose request demo button
    get requestDemoBtn() {return $('[type="submit"]');}

async action() {
    // Click see in action button
    await this.actionBtn.click();
    // Type first name
    await this.firstNameInput.setValue('Artur');
    // Type last name
    await this.lastNameInput.setValue('Bikulov');
    // Type email
    await this.emailInput.setValue('sergii@mro.com');
    // Type phone number
    await this.phoneNumberInput.setValue('43434776272');
    // Click on request demo button
    await this.requestDemoBtn.click();
 }
}

module.exports = new ActionPage();
