# 技巧Skill


- 心得
    - JSON.parse
        - JSON.parse(document.querySelector("#productSEOData").innerText
    - 使用jQuery从页面中提取数据非常简单。
    - CAPTCHA人肉识别服务
    - 拦截网络请求
        - DevTools API
        - 设置下载传入文件的方式和位置Page.setDownloadBehavior()
        
    - 广告拦截
        - DevTools协议还有Network.setBlockedURLs()一个带有通配符的字符串数组作为输入
        - Chrome的新版本将附带谷歌内置的“广告拦截器 ” - 它更像是一个广告“过滤器”。该协议已经有一个称为Page.setAdBlockingEnabled()