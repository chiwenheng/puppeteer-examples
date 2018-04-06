/**
 * @name mouse
 *
 * @desc Most of the things you can click using straight .click() handlers, but for some situation directly instructing the
 * mouse might be convenient. This example load a page that plays back what mouse actions are used on the page.
 *
 * @see {@link https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#pagemouse}
 */

const puppeteer = require('puppeteer');
let sleep=require('sleep');

(async () => {
  const browser = await puppeteer.launch({headless:false})
  const page = await browser.newPage()

    sleep.sleep(2);

  // set the viewport so we know the dimensions of the screen
  await page.setViewport({ width: 800, height: 600 })
    // go to a page setup for mouse event tracking
  await page.goto('http://unixpapa.com/js/testmouse.html')
    sleep.sleep(2);
  // click an area
  await page.mouse.click(132, 103, { button: 'left' })
    sleep.sleep(2);
  // the screenshot should show feedback from the page that right part was clicked.
  await page.screenshot({ path: 'mouse_click.png' })
  await browser.close()
})()
