// ==UserScript==
// @name        Replace Korwa to Summer Korwa
// @namespace   ???
// @description lewd korwa please
// @include     *://game.granbluefantasy.jp*
// @version     1.0.0
// @grant       none
// ==/UserScript==

var interval = 0.25; // in seconds
//stolen code from stackoverflow
//from your friendly neighbourhood spiderman 
// Code below 


function imgReplace() {
    var images = document.getElementsByTagName('img'),
        len = images.length, img, i;
    for (i = 0; i < len; i += 1) {
        img = images[i];
        img.src = img.src.replace('http://game-a.granbluefantasy.jp/assets_en/img_mid/sp/assets/npc/f/3040081000_01.jpg', 'http://game-a.granbluefantasy.jp/assets_en/img/sp/assets/npc/f/3040127000_01.jpg'); 
        img.src = img.src.replace('http://game-a.granbluefantasy.jp/assets_en/img_mid/sp/assets/npc/f/3040081000_02.jpg', 'http://game-a.granbluefantasy.jp/assets_en/img/sp/assets/npc/f/3040127000_02.jpg'); 
        img.src = img.src.replace('http://game-a.granbluefantasy.jp/assets_en/img_mid/sp/assets/npc/m/3040081000_01.jpg', 'http://game-a1.granbluefantasy.jp/assets_en/img/sp/assets/npc/m/3040127000_01.jpg'); 
        img.src = img.src.replace('http://game-a.granbluefantasy.jp/assets_en/img_mid/sp/assets/npc/m/3040081000_02.jpg', 'http://game-a1.granbluefantasy.jp/assets_en/img/sp/assets/npc/m/3040127000_02.jpg'); 
        img.src = img.src.replace('http://game-a.granbluefantasy.jp/assets_en/img/sp/assets/npc/zoom/3040081000_01.png', 'http://game-a.granbluefantasy.jp/assets_en/img/sp/assets/npc/zoom/3040127000_01.png'); 
        img.src = img.src.replace('http://game-a.granbluefantasy.jp/assets_en/img/sp/assets/npc/zoom/3040081000_02.png', 'http://game-a.granbluefantasy.jp/assets_en/img/sp/assets/npc/zoom/3040127000_02.png'); 
        img.src = img.src.replace('http://game-a1.granbluefantasy.jp/assets_en/img/sp/assets/npc/raid_normal/3040081000_01.jpg', 'http://game-a1.granbluefantasy.jp/assets_en/img/sp/assets/npc/raid_normal/3040127000_01.jpg'); 
        img.src = img.src.replace('http://game-a1.granbluefantasy.jp/assets_en/img/sp/assets/npc/raid_normal/3040081000_01.jpg', 'http://game-a1.granbluefantasy.jp/assets_en/img/sp/assets/npc/raid_normal/3040127000_01.jpg'); 
    }
}
setInterval(imgReplace, interval * 1000);
