
const puppeteer = require('puppeteer');

async function sleep(delay) {
    return new Promise(resolve => setTimeout(resolve, delay));
}

(async () => {
const browser = await puppeteer.launch();
const page = await browser.newPage();

try {
    await page.goto('https://avex.jp/snowman/');
    await sleep(5000);
    await page.screenshot({ path: './image.png'});
} catch(err) {
} finally {
   await browser.close();
}
})()
