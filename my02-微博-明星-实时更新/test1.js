/**
 * Created by play on 2018/4/7.
 */
//模拟登陆
const puppeteer=require('puppeteer')
let sleep=require('sleep')
const data = require('./data');

const url='https://d.weibo.com/'

async function run(url) {
  const browser= await   puppeteer.launch({headless:false});
  const page=await browser.newPage();
  await page.setViewport({width: 1280, height: 600});
  await page.goto('https://weibo.com/');

  console.log('page.goto');

  await page.waitFor('#pl_login_form')
  sleep.sleep(5);

  // await page.click()

  await page.type('#loginname','xxx@')
  await page.type('#loginname','yyy.com')
  sleep.sleep(3);
  // await page.type('.info_list password .W_input',data.password)
  // await page.click('#pl_login_form > div > div:nth-child(3) > div.info_list.verify.clearfix > div > input')
  await page.keyboard.press('Tab')
  await page.keyboard.type(data.password)
  //await page.type("input[type=email]", "abcdefghijklmnopqrstuvwxyz")

  console.log('type(data.password)')
  await page.click('#pl_login_form > div > div:nth-child(3) > div.info_list.login_btn > a')

  sleep.sleep(5);
  let url2=page.url()
  console.log(url2)
  await page.goto(url);
  sleep.sleep(5);

  await page.screenshot({path:"weibo-stars.jpg"})
  browser.close()
}

run(url)