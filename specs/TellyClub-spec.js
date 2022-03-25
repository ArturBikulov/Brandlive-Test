const TellyClubsPage = require("../Page objects/TellyClub.page");
const Credentials = require("../base/credentials.json")

describe("Products", () => {
  it("Should be able to try beta Telly Club ", async () => {
    // navigate Brndlive website
    await TellyClubsPage.open();
    await TellyClubsPage.tellyClub(Credentials.userName, Credentials.userEmail);
  });
});
