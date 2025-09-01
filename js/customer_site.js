const CUSTOMER_SITES = {
    wolong: {
        api: 'https://wolongzyw.com/api.php/provide/vod',
        name: '卧龙资源',
    }, 
    maotai: {
        api: 'https://caiji.maotaizy.cc/api.php/provide/vod',
        name: '茅台资源',
    },
    dbzy: {
        api: 'https://dbzy.tv/api.php/provide/vod',
        name: '豆瓣资源',
    },
    modu: {
        api: 'https://www.mdzyapi.com/api.php/provide/vod',
        name: '魔都资源'
    },
    ruyi: {
        api: 'https://cj.rycjapi.com/api.php/provide/vod',
        name: '如意资源',
    },
    maoyan: {
        api: 'https://api.maoyanapi.top/api.php/provide/vod',
        name: '猫眼资源',
    },
    jisu: {
      "api": "https://jszyapi.com/api.php/provide/vod",
      "name": "极速资源",
      "detail": "https://jszyapi.com"
    },
    tyyszy: {
      "api": "https://tyyszy.com/api.php/provide/vod",
      "name": "天涯资源"
    },
    zuid: {
      "api": "https://api.zuidapi.com/api.php/provide/vod",
      "name": "最大资源"
    },
    wujin: {
      "api": "https://api.wujinapi.me/api.php/provide/vod",
      "name": "无尽资源"
    },
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
