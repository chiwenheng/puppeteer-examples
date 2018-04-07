/**
 * Created by play on 2018/4/7.
 */

const puppeteer = require('puppeteer');

let scrape = async () => {
  // Actual Scraping goes Here...
  const browser = await puppeteer.launch();
  // const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
   page.goto('http://books.toscrape.com/');
  // await page.waitFor(2000);//等待2s
  await page.waitFor('.next');//等待某标签出现

  const result = await page.evaluate(() => {
// return something
   let data=[];// 创建一个数组保存结果
    let elements=document.querySelectorAll('.product_pod')
    for (var element of elements){
      //#default > div > div > div > div > section > div:nth-child(2) > ol > li:nth-child(1) > article > h3 > a
      let title=element.childNodes[5].innerText
      let price=element.childNodes[7].childNodes[1].innerText
      data.push({title,price})
      console.log({title,price})
    }
    return data
  });


  browser.close()
  // Return a value
  // return 'test';
  return result;
};

 scrape().then((value) => {
  console.log(value); // Success!
});

//退出
//一般情况下，我们不会主动调用process.exit()，这是因为一旦调用process.exit()方法，NodeJs进程会以最快的速度响应退出进程的指令，即使现在NodeJs进程中还有一些异步程序没执行完成，也不会等它执行完。
// process.exit(0)