
let blockId ="slide1";
let left = document.getElementById('left1');
let right = document.getElementById('right1');
// click = document.querySelectorAll('.arrows');
// slide1.addEventListener('click', (e) => {
// 	blockId = 'slide1';
// 	left = document.getElementById(e.target.id);
// 	right = document.getElementById(e.target.id);
// });
// slide2.addEventListener('click', (e) => {
// 	blockId = 'slide2';
// 	left = document.getElementById(e.target.id);
// 	right = document.getElementById(e.target.id);
// });

karusel1 = document.getElementById(blockId);
// ПЕРЕТАСКИВАНИЕ
let xCoordinateMovement = 0;
let xCoordinateStart = 0;
karusel1.addEventListener('dragstart', startMovement);
function startMovement(e) {
	let check = false;
	xCoordinateStart = e.pageX;
	karusel1.addEventListener('dragend', (e) => {
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
left.addEventListener('click', shiftLeft);
left.addEventListener('mousedown', function(down) {
	if (down.button !== 0) return;
	let interval = setInterval(shiftLeft, 500);
	left.addEventListener('mouseup', (upe) => {
		if (upe.button === 0) {
			clearInterval(interval);
		}
	});
});
right.addEventListener('click', shiftRight);
right.addEventListener('mousedown', function(down) {
	if (down.button !== 0) return;
	let interval2 = setInterval(shiftRight, 500);
	right.addEventListener('mouseup', function(up) {
		if (up.button === 0) {
			clearInterval(interval2);
		}
	});
});

//SLIDER
const imgWidth = 386; // ширина картинки+ отступ
const amountImgForShow = 3; // сколько картинок показываем
let shiftX = imgWidth; // на сколько сдвинуть по оси x
let shiftX2 = 0;
let counter = 0;
let offset = 0;
// if(blockId=="slide1"){ images = document.querySelectorAll('#slide1 img');}
// if(blockId=="slide2"){ images = document.querySelectorAll('#slide2 img');}
images = document.querySelectorAll(`#${blockId} img`);
let allImgAmaunt = images.length;

function shiftLeft() {
	if (offset != 0) shiftX += offset;
	if (counter == allImgAmaunt - amountImgForShow) {
		shiftX -= offset;
		counter--;
		offset = 0;
	}
	karusel1.style.transform = 'translateX(' + -shiftX + 'px)';
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
	karusel1.style.transform = 'translateX(' + shiftX2 + 'px)';
	counter--;
	if (counter < 0) {
		counter = 0;
	}
}
