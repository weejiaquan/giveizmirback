// ==UserScript==
// @name        Replace Izmir(Summer) Asset to JP
// @namespace   ???
// @description lewd izmir please
// @include     *://game.granbluefantasy.jp*
// @version     1.0.0
// @grant       none
// ==/UserScript==

var interval = 0.25; // in seconds
//stolen code from stackoverflow
//from your friendly neighbourhood spiderman (lychwee)
// Code below 

function imgReplace() {
    var images = document.getElementsByTagName('img'),
        len = images.length, img, i;
    for (i = 0; i < len; i += 1) {
        img = images[i];
        img.src = img.src.replace('http://game-a.granbluefantasy.jp/assets_en/img/sp/assets/npc/b/3040126000_02.png', 'http://game-a.granbluefantasy.jp/assets/img/sp/assets/npc/b/3040126000_02.png'); 
       img.src = img.src.replace('http://game-a.granbluefantasy.jp/assets_en/img/sp/assets/npc/f/3040126000_02.jpg', 'http://game-a.granbluefantasy.jp/assets/img/sp/assets/npc/f/3040126000_02.jpg'); 
        img.src = img.src.replace('http://game-a1.granbluefantasy.jp/assets_en/img/sp/assets/npc/raid_normal/3040126000_02.jpg', 'http://game-a1.granbluefantasy.jp/assets/img/sp/assets/npc/raid_normal/3040126000_02.jpg');
    }
}
setInterval(imgReplace, interval * 1000);

