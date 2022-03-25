module.exports = class Page {
    // NAvigate to Brandlive.com
    open() {
        return browser.url('https://www.brandlive.com/');
    };
};