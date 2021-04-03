imgWidth = 388; // width img+padding slider1
amountImgForShow = 3; //amount of  img slider1
imgWidth2 = 290; // width img+padding slider2
amountImgForShow2 = 4; // amount of  img slider2

// let shiftX=0;
let imgWidth_dop = 0;
let blockId = "slide1";
let left = document.getElementById("left1");
let right = document.getElementById("right1");
const timeout = 500;
document.addEventListener("DOMContentLoaded", function (event) {
  window.onresize = () => {
    clientWidth = document.documentElement.clientWidth;
    if (clientWidth <= 1200 && clientWidth > 895) {
      amountImgForShow = 2;
      amountImgForShow2 = 3;
    } else if (clientWidth <= 895 && clientWidth > 780) {
      amountImgForShow2 = 2;
    } else if (clientWidth <= 780 && clientWidth > 580) {
      amountImgForShow = 1;
    } else if (clientWidth <= 580 && clientWidth > 390) {
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
      amountImgForShow = 3;
      imgWidth = 388;
      amountImgForShow2 = 4;
      imgWidth2 = 290;
    }
  };
});

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