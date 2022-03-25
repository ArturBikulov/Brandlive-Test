const PlayPage = require("../Page objects/PlayVideo.page")

describe("Play video", () => {
  it("User should be able to play video", async () => {
    // Navigate to Brandlive website
    await PlayPage.open();
    // Play video
    await PlayPage.play();
    // Need to put selctor to play video, I tried all selectors , stuck here
  });
});
