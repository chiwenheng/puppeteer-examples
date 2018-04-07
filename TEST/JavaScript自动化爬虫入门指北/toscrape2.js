/**
 * Created by play on 2018/4/7.
 */



const puppeteer = require('puppeteer')

let scrape = async () => {
  // Actual Scraping goes Here...
  const browser = await puppeteer.launch({headless: false})
  const page = await browser.newPage()
  page.goto('http://books.toscrape.com/')
  // await page.waitFor(2000);//等待2s
  await page.waitFor('.next')//等待某标签出现
  await page.click('#default > div > div > div > div > section > div:nth-child(2) > ol > li:nth-child(1) > article > h3 > a')

  await page.waitFor(2000)//等待2s
  const result = await page.evaluate(() => {
// return something
    let title = document.querySelector('h1').innerText
    let price = document.querySelector('.price_color').innerText
    return {title, price}
  })

  browser.close()
  // Return a value
  // return 'test';
  return result
}

scrape().then((value) => {
  console.log(value) // Success!
})

//退出
process.exit(0)