
var flag = new Array();
flag[0] = false;
flag[1] = false;

var target = new Array();


function OnButtonClick1() {
    target[0] = document.getElementById("button1");
    console.log(1)
    var flag = document.getElementById("waiwai")

    if (flag.hidden == false) {
        flag.hidden = true;

    }
    else {
        flag.hidden = false;
    }


}

function OnButtonClick2() {
    var wObjballoon = document.getElementById("makeImg");
    if (wObjballoon.className == "balloon1") {
        wObjballoon.className = "balloon";
    } else {
        wObjballoon.className = "balloon1";
    }
}

/*var w = $('.contents').width();
var h = $(',contens').height();
$('#rader_result').attr('width', w);
$('#rader_result').attr('height', h);*/




/*function OnButtonClick2() {
    console.log(2);

    target[1] = document.getElementById("button2");
    var flag = document.getElementById("hanashitai")

    if (flag.hidden == false) {
        flag.hidden = true;

    }
    else {
        flag.hidden = false;
    }
}*/


/*
'use strict'
 {
  const btn = document.getElementById('btn');
  btn.addEventListener('click', () => {
      btn.textContent = '押されました';
 })
}
*/