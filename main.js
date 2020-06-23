//// 右クリックメニューに追加
chrome.contextMenus.create({
    title: "新しいタブで開く(twitter画像)",
    contexts: ['image'],
    onclick: function(info, tab) {
        var imgurl = info.srcUrl;

        chrome.tabs.create({
            url: imgurl.replace(/&name.*$/, '&name=orig'),
            active: false
        });
    }
});

//// TODO 画像のリンクをクリックするだけで開けるようにしたい