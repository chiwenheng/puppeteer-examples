/**
 * Created by play on 2018/4/6.
 */

const puppeteer=require('puppeteer')
let sleep=require('sleep')

async function run() {
    const browser= await   puppeteer.launch({headless:false});
    const page=await browser.newPage();
    await page.goto('http://quotes.toscrape.com/login');

    console.log('page.goto');

    await page.type('#username','xx')
    await page.type('#password','yy')
    await page.click('body > div > form > input.btn.btn-primary')

    sleep.sleep(2);
    let url=page.url()
    console.log(url)
    browser.close()
}

run()