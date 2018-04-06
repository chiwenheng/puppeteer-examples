/**
 * Created by play on 2018/4/6.
 */

const puppeteer=require('puppeteer')
let sleep=require('sleep')

async function run() {
    const browser= await   puppeteer.launch({headless:false});
    const page=await browser.newPage();
    await page.goto('https://login.taobao.com/member/login.jhtml?style=mini&newMini2=false&from=alimama');

    console.log('page.goto');
    sleep.sleep(2);
    await page.type('#TPL_username_1','playmore2010')
    sleep.sleep(4);
    await page.type('#TPL_password_1','grea2t017')//账号密码，输入太快了
    sleep.sleep(2);
    await page.click('#J_SubmitStatic')//不行，有滑动块验证

    sleep.sleep(2);
    let url=page.url()
    console.log(url)
    // browser.close()
}

run()