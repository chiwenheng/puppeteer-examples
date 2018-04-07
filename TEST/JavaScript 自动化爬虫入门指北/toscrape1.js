/**
 * Created by play on 2018/4/7.
 */



const puppeteer = require('puppeteer');

let scrape = async () => {
  // Actual Scraping goes Here...
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
   page.goto('http://books.toscrape.com/');
  // await page.waitFor(2000);//等待2s
  await page.waitFor('.next');//等待某标签出现

  let bodyHTML = await page.evaluate(() => document.body.innerHTML);
  browser.close();
  // Return a value
  // return 'test';
  return bodyHTML;
};

scrape().then((value) => {
  console.log(value); // Success!
});

