const Page = require("../base/page");

class TellyClubPage extends Page {
    // Choose Products button 
    get productBtn() {return $('#menu-item-828');}
    // Choose telly club button
    get tellyClubBtn() {return $('[id="menu-item-10003"]');}
    // Choose Enter the club button
    get enterTheClubBtn() {return $('[class*="gradient-border gradient"]');}
    //  Choose Next button one slect your space
    get nextBtn() {return $('.button-pill--container');}
    // Choose Lo fi2
    get chooseLoFiBtn() {return $('[id="1"]');}
    // Choose Input name
    get nameInput() {return $('[name="name"]');}
    // Choose Input email
    get emailInput() {return $('[name="email"]');}
    // Choose join room
    get joinRoomBtn() {return $('[class="tc-airlock-join-room"]');}

async tellyClub(userName, userEmail) {
    // Click on products button
    await this.productBtn.click();
    // Click on telly club button
    await this.tellyClubBtn.click();
    // Click to enter the club
    await this.enterTheClubBtn.click();
    // Click next button
    await this.nextBtn.click();
    // Click on Lo fi
    await this.chooseLoFiBtn.click();
    // Click next button
    await this.nextBtn.click();
    // Type name
    await this.nameInput.setValue(userName);
    // Type email
    await this.emailInput.setValue(userEmail);
    // scroll into the buttom of the page to the next element button
    await this.nextBtn.scrollIntoView();
    // click next button
    await this.nextBtn.click();
}  
}

module.exports = new TellyClubPage();
