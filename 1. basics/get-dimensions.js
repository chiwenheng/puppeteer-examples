/**
 * Created by play on 2018/7/9.
 * 获取 宽 高 比例
 * https://www.npmjs.com/package/puppeteer
 */

const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless:false})
  const page = await browser.newPage();
  await page.goto('https://cn.bing.com/');

  // Get the "viewport" of the page, as reported by the page.
  const dimensions = await page.evaluate(() => {
    return {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
      deviceScaleFactor: window.devicePixelRatio
    };
  });

  console.log('Dimensions:', dimensions);//{ width: 800, height: 600, deviceScaleFactor: 1 }

  await browser.close();
})();