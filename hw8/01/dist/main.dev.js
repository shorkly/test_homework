"use strict";

var playList = [{
  author: "LED ZEPPELIN",
  song: "STAIRWAY TO HEAVEN"
}, {
  author: "QUEEN",
  song: "BOHEMIAN RHAPSODY"
}, {
  author: "LYNYRD SKYNYRD",
  song: "FREE BIRD"
}, {
  author: "DEEP PURPLE",
  song: "SMOKE ON THE WATER"
}, {
  author: "JIMI HENDRIX",
  song: "ALL ALONG THE WATCHTOWER"
}, {
  author: "AC/DC",
  song: "BACK IN BLACK"
}, {
  author: "QUEEN",
  song: "WE WILL ROCK YOU"
}, {
  author: "METALLICA",
  song: "ENTER SANDMAN"
}];

function songs() {
  //debugger
  var i = 1;

  while (true) {
    var obj = playList.splice(0, 1);
    var div = document.createElement('div');
    div.innerHTML = "<ul><li>Author: ".concat(Object.values(obj[0])[0], " <br> Song:").concat(Object.values(obj[0])[1], "</li></ul><br><br>");
    document.body.append(div);
  }
}