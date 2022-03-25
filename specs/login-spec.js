const LoginPage = require("../Page objects/login.page");
const Credentials = require("../base/credentials.json");

describe("Login", () => {
  it("Should not be able to login with none matching credentials", async () => {
    // Navigate to Brndlive website
    await LoginPage.open();
    await LoginPage.login(Credentials.wrongEmail, Credentials.wrongPassword);
    //Verify error "Looks like you've attempted to sign in with incorrect email/password. Please follow the "Forgot Password" link to set a password for this account."
    await expect($(".error")).toHaveTextContaining(`Looks like you've attempted to sign in with incorrect email/password. Please follow the "Forgot Password" link to set a password for this account.`);
  });

  it("Should not be able to register with no email and no password", async () => {
    // Navigate to Brndlive website
    await LoginPage.open();
    await LoginPage.login(Credentials.emptyEmail, Credentials.emptyPassword);
    //Verify error "Please enter a valid email."
    await expect($(".error")).toHaveTextContaining("Please enter a valid email.");
  });

  it("Should not be able to register with no password", async () => {
    // Navigate to Brndlive website
    await LoginPage.open();
    await LoginPage.login(Credentials.Email, Credentials.emptyPassword);
    // Vetrify Error "Please enter your password."
    await expect($(".error")).toHaveTextContaining("Please enter your password.");
  });
});
