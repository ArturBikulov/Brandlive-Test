const Page = require("../base/page");

class PlayVideoPage extends Page {
    // Click on play video button
    get playVideoBtn() {return $('.title-img');}

async play() {
   await this.playVideoBtn.click();
 }
}

module.exports = new PlayVideoPage();
