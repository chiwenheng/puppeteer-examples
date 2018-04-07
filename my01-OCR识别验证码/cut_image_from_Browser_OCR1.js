/**
 * Created by play on 2018/4/7.
 */

const sleep = require('sleep')
const puppeteer = require('puppeteer')
var tesseract = require('node-tesseract');
const data = require('./data');

const code_img_path='var_code.png'

let scrape = async () => {
  // Actual Scraping goes Here...
  const browser = await puppeteer.launch({headless: false})
  const page = await browser.newPage()
   // page.goto('https://www.bmac.com.cn/')
  await page.goto('https://www.bmac.com.cn/webservice/index.jhtml')
  // await page.waitFor(2000);//等待2s
  // await page.waitFor('.capPic')//等待某标签出现


  //
  const svgImage = await page.$('.capPic');
  await svgImage.screenshot({
    path: code_img_path,
    omitBackground: true,
  });
  // const result = function (path) {
  //   return tesseract.process(__dirname + '/'+path,function(err, text) {
  //     if(err) {
  //       console.error(err);
  //     } else {
  //       console.log(text);
  //       return text
  //     }
  //   });
  // }

  // let vc=await result(code_img_path)
  tesseract.process(__dirname + '/'+code_img_path,function(err, text) {
    if(err) {
      console.error(err);
    } else {
      console.log(text);
       page.type('#capstr1',text)
    }
  });
  sleep.msleep(30000)

  page.waitFor(3000)
  await page.type('#cardno1',data.card_no)
  console.log('card_no')
  // page.waitFor(1000)
  // page.type('#capstr1',vc)
  page.waitFor(7000)
  sleep.msleep(30000)

  page.click('.btn1')
  console.log('click')
  page.waitFor(3000)
  await page.waitForNavigation();
  console.log('Navigation',page.url())// https://www.bmac.com.cn/kpcx/inquiryCardRecord.jhtml


  page.waitFor(10000)

  await page.screenshot({path:'gjk1.png'})

  sleep.msleep(3000)
  // browser.close()
  // Return a value
  // return 'test';
  // return result
}

scrape()