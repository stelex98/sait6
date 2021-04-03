let imgWidth = 388; // width img+padding slider1
let imgWidth2 = 290; // width img+padding slider2
// let shiftX=0;
let imgWidth_dop=0;
let blockId = "slide1";
let left = document.getElementById("left1");
let right = document.getElementById("right1");
const timeout = 500;
size();
document.addEventListener("DOMContentLoaded", function (event) {  
  window.onresize = size(); 
});
function size(){
  clientWidth = document.documentElement.clientWidth;
    if (clientWidth <= 1200 && clientWidth > 895) {
      document.querySelector(".carousel").style = "width: 776px; margin: 0 auto;display: block;overflow: hidden;";
      amountImgForShow = 2;
      document.querySelector(".carousel2").style = "width: 870px; margin: 0 auto;display: block;overflow: hidden;";
      amountImgForShow2 = 3;
    } else if (clientWidth <= 895 && clientWidth > 780) {
      document.querySelector(".carousel2").style = "width: 580px; margin: 0 auto;display: block;overflow: hidden;";
      amountImgForShow2 = 2;
    } else if (clientWidth <= 780 && clientWidth > 580) {
      document.querySelector(".carousel").style = "width: 388px; margin: 0 auto;display: block;overflow: hidden;";
      amountImgForShow = 1;
    } else if (clientWidth <= 580 && clientWidth > 390) {
      document.querySelector(".carousel2").style = "width: 290px; margin: 0 auto;display: block;overflow: hidden;";
      amountImgForShow2 = 1;
    } 
    // else if (clientWidth <= 390) {
    //   document.querySelector(".carousel").style = "width: 260px";
    //   img_sl1 = document.querySelectorAll(".product__card-new-img");
    //   for (i = 0; i < img_sl1.length; i++) {
    //     img_sl1[i].style = "width:250px; ";
    //   }
    //   imgWidth = 260; 
    // }
    if (clientWidth > 1200) {
      document.querySelector(".carousel").style = "width: var(--box-width); margin: 0 auto;display: block;overflow: hidden;";
      amountImgForShow = 3;  imgWidth = 388;
      document.querySelector(".carousel2").style = "width: var(--box-width); margin: 0 auto;display: block;overflow: hidden;";
      amountImgForShow2 = 4;  imgWidth2 = 290;
    }
}

document.querySelector(".carousel").style = "width: var(--box-width); margin: 0 auto;display: block;overflow: hidden;";
let amountImgForShow = 3; //amount of  img slider1
document.querySelector(".carousel2").style = "width: var(--box-width); margin: 0 auto;display: block;overflow: hidden;";
let amountImgForShow2 = 4; // amount of  img slider2

karusel1 = document.getElementById(blockId);
// movement
let xCoordinateMovement = 0;
let xCoordinateStart = 0;
karusel1.addEventListener("dragstart", startMovement);
function startMovement(e) {
  let check = false;
  xCoordinateStart = e.pageX;
  karusel1.addEventListener("dragend", (e) => {
    xCoordinateMovement = e.pageX;
    if (xCoordinateMovement < xCoordinateStart && !check) {
      shiftLeft();
      check = true;
    }
    if (xCoordinateMovement > xCoordinateStart && !check) {
      shiftRight();
      check = true;
    }
  });
}
////// left & right
left.addEventListener("click", shiftLeft);
left.addEventListener("mousedown", function (down) {
  if (down.button !== 0) return;
  let interval = setInterval(shiftLeft, timeout);
  left.addEventListener("mouseup", (upe) => {
    if (upe.button === 0) {
      clearInterval(interval);
    }
  });
});
right.addEventListener("click", shiftRight);
right.addEventListener("mousedown", function (down) {
  if (down.button !== 0) return;
  let interval2 = setInterval(shiftRight, timeout);
  right.addEventListener("mouseup", function (up) {
    if (up.button === 0) {
      clearInterval(interval2);
    }
  });
});

//SLIDER
let shiftX = imgWidth; // на сколько сдвинуть по оси x
let shiftX2 = 0;
let counter = 0;
let offset = 0;
images = document.querySelectorAll(`#${blockId} .product__card-new`);
let allImgAmaunt = images.length;

function shiftLeft() {
  if (offset != 0) shiftX += offset;
  if (counter == allImgAmaunt - amountImgForShow) {
    shiftX -= offset;
    counter--;
    offset = 0;
  }
  karusel1.style.transform = "translateX(" + -shiftX + "px)";
  offset = imgWidth;
  counter++;
}

function shiftRight() {
  shiftX2 = -shiftX + imgWidth;
  shiftX = -shiftX2;
  if (shiftX == 0 && shiftX2 == 0) {
    shiftX = imgWidth;
    shiftX2 = 0;
    counter = 0;
    offset = 0;
  }
  karusel1.style.transform = "translateX(" + shiftX2 + "px)";
  counter--;
  if (counter < 0) {
    counter = 0;
  }
}
