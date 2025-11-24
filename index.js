function href(loc) {
	window.location = loc;
}
function hrefabs(loc) {
	window.location = loc;
}
function addmouse(o) {
	o.onmouseover = function () {
		o.classList.add('mouse');
	}
	o.onmouseout = function () {
		o.classList.remove('mouse');
	}
}
function addclick(o, cl, ch) {
	o.innerHTML = cl;
	addmouse(o);
	o.onclick = function () {
		if (o.innerHTML == cl)
			o.innerHTML = ch;
		else
			o.innerHTML = cl, o.classList.remove('mouse');
	}
}