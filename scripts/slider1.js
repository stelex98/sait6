let imgWidth = 388; // width img+padding slider1
let imgWidth2 = 290; // width img+padding slider2
let blockId = "slide1";
let left = document.getElementById("left1");
let right = document.getElementById("right1");
const timeout = 500;
document.querySelector(".carousel").style = "width: var(--box-width)";
let amountImgForShow = 3;//amount of  img slider1
document.querySelector(".carousel2").style = "width: var(--box-width)";
let amountImgForShow2 = 4;// amount of  img slider2

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
document.addEventListener("DOMContentLoaded", function (event) {
  window.onresize = () => {
    clientWidth = document.documentElement.clientWidth;
    if (clientWidth <= 1200 && clientWidth > 895) {
      document.querySelector(".carousel").style = "width: 776px";
      amountImgForShow = 2;
      document.querySelector(".carousel2").style = "width: 870px";
      amountImgForShow2 = 3;
    } else if (clientWidth <= 895 && clientWidth > 780) {
      document.querySelector(".carousel2").style = "width: 580px";
      amountImgForShow2 = 2;
    } else if (clientWidth <= 780 && clientWidth > 580) {
      document.querySelector(".carousel").style = "width: 388px";
      amountImgForShow = 1;
    } else if (clientWidth <= 580) {
      document.querySelector(".carousel2").style = "width: 290px";
      amountImgForShow2 = 1;
    }
    if (clientWidth > 1200) {
      document.querySelector(".carousel").style = "width: var(--box-width)";
      amountImgForShow = 3;
      document.querySelector(".carousel2").style = "width: var(--box-width)";
      amountImgForShow2 = 4;
    }
  };
});

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
