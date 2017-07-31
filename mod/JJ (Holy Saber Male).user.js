// ==UserScript==
// @name        JJ (Holy Saber Male)
// @namespace   
// @description Replaces images
// @include     *://game.granbluefantasy.jp*
// @version     1.0.0
// @grant       none
// ==/UserScript==

var interval = 0.25; // in seconds

// DON'T EDIT BELOW ///////////////////

function imgReplace() {
    var images = document.getElementsByTagName('img'),
        len = images.length, img, i;
    for (i = 0; i < len; i += 1) {
        img = images[i];
        img.src = img.src.replace('http://game-a1.granbluefantasy.jp/assets_en/img/sp/assets/leader/my/110201_sw_0_01.png', 'http://i.imgur.com/0NEXNeb.png'); 
        img.src = img.src.replace('http://game-a.granbluefantasy.jp/assets_en/img/sp/assets/leader/p/110201_sw_0_01.png', 'http://i.imgur.com/qeRgVYN.png');
    }
}

setInterval(imgReplace, interval * 1000);

