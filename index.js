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
function getColor() {
	return window.matchMedia('(prefers-color-scheme: light)').matches;
}
function addclick(o, cl, ch) {
	o.innerHTML = cl;
	o.onclick = function () {
		if (o.innerHTML == cl)
			o.innerHTML = ch;
		else
			o.innerHTML = cl;
	}
}
function init() {
	let body = document.getElementsByTagName('body')[0];
	body.innerHTML = '<div id="navi"></div><center><div style="display: none; position: fixed; top: 0; left: 0; height: 100%; width: 100%; background-color: rgba(200, 200, 200, 0.1); color: black;" id="alert_cover"><span style="border-radius: 2vh; padding: 3vh; width: 40%; position: fixed; top: 0.5vw; left: 30%; background-color: rgb(240, 240, 240);" class="page-container" id="alert_container"><span id="alert_text">text</span><br><span style="float: right; height: 4vh; width: 8vh; border-radius: 0.5vh; color: rgb(0, 200, 0);" class="hover" id="alert_confirm">确认</span></span></center></div><marquee scrollamount="2" scrolldelay="1" style="height: 5vh;border: 0.1vh solid grey; font-size: 3vh;"> 欢迎来到 Qianwenyu 的网站 </marquee>' + body.innerHTML + '<button onclick="modal(\'本网站前端作者 : qwy<br>后端作者 : cola_tin\')">?</button>';
	document.getElementById('alert_confirm').onclick = () => {
		document.getElementById('alert_cover').style.display = 'none';
	}
}
function modal(text) {
	document.getElementById('alert_cover').style.display = 'grid';
	document.getElementById('alert_text').innerHTML = text;
}