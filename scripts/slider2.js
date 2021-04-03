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
  console.log(allImgAmaunt2 + " | " + amountImgForShow2);
  if (offset2 != 0) shiftX_2 += offset2;
  if (counter2 == (allImgAmaunt2 - amountImgForShow2)) {
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
