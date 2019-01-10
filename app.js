const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
  const page = await browser.newPage();
  await page.goto('https://rh-taro.github.io/simple-html-for-puppeteer/');
  await page.select('#number', '12'); // success
  await page.select('#string', '12'); // success
  // await page.select('#number', 12); // failed
  // await page.select('#string', 12); // failed
  await page.screenshot({path: 'selected.png'});
  await browser.close();
})();