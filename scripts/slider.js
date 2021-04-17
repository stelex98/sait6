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
let shiftX = imgWidth; // на сколько сдвинуть по оси x
let shiftX2 = 0;
let counter = 0;
let offset = 0;
const images = document.querySelectorAll(`#slide1 .product__card-new`);
const allImgAmaunt = images.length;
// slider2
let blockId2 = "slide2";
left2 = document.getElementById("left2");
right2 = document.getElementById("right2");

karusel2 = document.getElementById(blockId2);
let shiftX_2 = imgWidth2; // на сколько сдвинуть по оси x
let shiftX_22 = 0;
let counter2 = 0;
let offset2 = 0;
const images2 = document.querySelectorAll(`#slide2 .product__card`);
const allImgAmaunt2 = images2.length;

document.addEventListener("DOMContentLoaded", function (event) {
  window.onload = () => {
    size();
  };
  window.onresize = () => {
    size();
  };
});

function size() {
  clientWidth = document.documentElement.clientWidth;
  if (clientWidth <= 1200 && clientWidth > 895) {
    amountImgForShow = 2;
    amountImgForShow2 = 3;
  } else if (clientWidth <= 895 && clientWidth > 780) {
    amountImgForShow = 2;
    amountImgForShow2 = 2;
  } else if (clientWidth <= 780 && clientWidth > 580) {
    amountImgForShow = 1;
    amountImgForShow2 = 2;
  } else if (clientWidth <= 580 && clientWidth > 390) {
    amountImgForShow2 = 1;
    amountImgForShow = 1;
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
}

karusel1 = document.getElementById(blockId);
// movement
let xCoordinateMovement = 0;
let xCoordinateStart = 0;
karusel1.addEventListener("dragstart", startMovement);
function startMovement(e) {
  check = false;
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
let xCoordinateMovement1_1 = 0;
let xCoordinateStart1_1 = 0;
karusel1.addEventListener("touchstart", startMovement1_1);
function startMovement1_1(e) {
  check = false;
  //xCoordinateStart = e.pageX;
  xCoordinateStart1_1 = e.changedTouches[0].clientX;
  karusel1.addEventListener("touchend", (e) => {
    //xCoordinateMovement = e.pageX;
    xCoordinateMovement1_1 = e.changedTouches[0].clientX;

    if (xCoordinateMovement1_1 < xCoordinateStart1_1 && !check) {
      shiftLeft();
      check = true;
    }
    if (xCoordinateMovement1_1 > xCoordinateStart1_1 && !check) {
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
function shiftLeft() {
  console.log(allImgAmaunt + " | " + amountImgForShow);
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

// slider2
// let blockId2 = "slide2";
// left2 = document.getElementById("left2");
// right2 = document.getElementById("right2");

// karusel2 = document.getElementById(blockId2);
// let shiftX_2 = imgWidth2; // на сколько сдвинуть по оси x
// let shiftX_22 = 0;
// let counter2 = 0;
// let offset2 = 0;
// const images2 = document.querySelectorAll(`#slide2 .product__card`);
// const allImgAmaunt2 = images2.length;

// movement
let xCoordinateMovement2 = 0;
let xCoordinateStart2 = 0;
karusel2.addEventListener("dragstart", startMovement2);
function startMovement2(e) {
  let check = false;
  xCoordinateStart2 = e.pageX;
  karusel2.addEventListener("dragend", (e) => {
    xCoordinateMovement2 = e.pageX;
    if (xCoordinateMovement2 < xCoordinateStart2 && !check) {
      shiftLeft2();
      check = true;
    }
    if (xCoordinateMovement2 > xCoordinateStart2 && !check) {
      shiftRight2();
      check = true;
    }
  });
}
let xCoordinateMovement2_1 = 0;
let xCoordinateStart2_1 = 0;
karusel2.addEventListener("touchstart", startMovement2_1);
function startMovement2_1(e) {
  check = false;
  //xCoordinateStart = e.pageX;
  xCoordinateStart2_1 = e.changedTouches[0].clientX;
  karusel2.addEventListener("touchend", (e) => {
    //xCoordinateMovement = e.pageX;
    xCoordinateMovement2_1 = e.changedTouches[0].clientX;

    if (xCoordinateMovement2_1 < xCoordinateStart2_1 && !check) {
      shiftLeft2();
      check = true;
    }
    if (xCoordinateMovement2_1 > xCoordinateStart2_1 && !check) {
      shiftRight2();
      check = true;
    }
  });
}
////// left & right
left2.addEventListener("click", shiftLeft2);
left2.addEventListener("mousedown", function (down) {
  if (down.button !== 0) return;
  let interval = setInterval(shiftLeft2, timeout);
  left2.addEventListener("mouseup", (upe) => {
    if (upe.button === 0) {
      clearInterval(interval);
    }
  });
});
right2.addEventListener("click", shiftRight2);
right2.addEventListener("mousedown", function (down) {
  if (down.button !== 0) return;
  let interval2 = setInterval(shiftRight2, timeout);
  right2.addEventListener("mouseup", function (up) {
    if (up.button === 0) {
      clearInterval(interval2);
    }
  });
});

//SLIDER

function shiftLeft2() {
  if (offset2 != 0) shiftX_2 += offset2;
  if (counter2 == allImgAmaunt2 - amountImgForShow2) {
    shiftX_2 -= offset2;
    counter2--;
    offset2 = 0;
  }
  karusel2.style.transform = "translateX(" + -shiftX_2 + "px)";
  offset2 = imgWidth2;
  counter2++;
}

function shiftRight2() {
  shiftX_22 = -shiftX_2 + imgWidth2;
  shiftX_2 = -shiftX_22;
  if (shiftX_2 == 0 && shiftX_22 == 0) {
    shiftX_2 = imgWidth2;
    shiftX_22 = 0;
    counter2 = 0;
    offset2 = 0;
  }
  karusel2.style.transform = "translateX(" + shiftX_22 + "px)";
  counter2--;
  if (counter2 < 0) {
    counter2 = 0;
  }
}
