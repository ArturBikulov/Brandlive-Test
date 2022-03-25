const Page = require("../base/page");

class LoginPage extends Page {
     // Click to login button
  get loginBtn() {return $("#menu-item-247");}
    // Input email
  get emailInput() {return $("#business-email");}
    // Input password
  get passwordInput() {return $('[id="password"]');}
    // Click to submit button
  get submitBtn() {return $(".primary");}

  async login(email, password) {
    await this.loginBtn.click();
    await this.emailInput.setValue(email);
    await this.passwordInput.setValue(password);
    await this.submitBtn.click();
  }
}

module.exports = new LoginPage();
