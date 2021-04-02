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
			left.removeEventListener('mouseup', () => {}, false);
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
			right.removeEventListener('mouseup', () => {}, false);
		}
	});
});

//SLIDER
const imgWidth = 320; // ширина картинки+ отступ
const amountImgForShow = 3; // сколько картинок показываем
let shiftX = imgWidth; // на сколько сдвинуть по оси x
let shiftX2 = 0;
let counter = 0;
let offset = 0;
let images = document.querySelectorAll('.karusel img');
let allImgAmaunt = images.length;

function shiftLeft() {
	left.removeEventListener('mousedown', () => {}, false);
	left.removeEventListener('click', () => {}, false);
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
	right.removeEventListener('mousedown', () => {}, false);
	right.removeEventListener('click', () => {}, false);
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
