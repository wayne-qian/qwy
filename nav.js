let NAV1 = '<div class="nav"><span class="navp"><img class="logo" src="https://www.qwy.ac/logo.svg" alt="logo" width="120vmin" height="50vmin"><span onclick="hrefabs(\'https://www.qwy.ac\')" class="navtxt">首页</span><span onclick="hrefabs(\'https://www.qwy.ac/app\')" class="navtxt">应用</span><span onclick="hrefabs(\'https://www.qwy.ac/sug\')" class="navtxt">推荐</span><span onclick="hrefabs(\'https://www.qwy.ac/edit\')" class="navtxt">编辑</span><span onclick="hrefabs(\'https://www.qwy.ac/chat\')" class="navtxt">聊天</span><span onclick="hrefabs(\'https://www.qwy.ac/login\')" class="navtxt">登录</span><span onclick="hrefabs(\'https://www.qwy.ac/register\')" class="navtxt">注册</span><span onclick="tog()" class="navtxt">×</span><span class="navtxt" id="uid"></span></div>';
let NAV2 = '<div class="dropdown"><div class="dropbtn"><img src="https://www.qwy.ac/logo.svg" alt="logo" width="90vmin"> ≡ <span class="navtxt" id="uid"></span></div><div class="dropdown-content"><center><p class="navp"><span onclick="hrefabs(\'https://www.qwy.ac\')" class="togtxt">首页</span><span onclick="hrefabs(\'https://www.qwy.ac/app\')" class="togtxt">应用</span><span onclick="hrefabs(\'https://www.qwy.ac/sug\')" class="togtxt">推荐</span><span onclick="hrefabs(\'https://www.qwy.ac/edit\')" class="togtxt">编辑</span><span onclick="hrefabs(\'https://www.qwy.ac/chat\')" class="togtxt">聊天</span><span onclick="hrefabs(\'https://www.qwy.ac/login\')" class="togtxt">登录</span><span onclick="hrefabs(\'https://www.qwy.ac/register\')" class="togtxt">注册</span></p></center></div></div>';
let Tg = 0;
let Element = document.getElementsByClassName('navtxt');
let window_size = -1;
let Nv = document.getElementsByClassName('nav')[0];
document.getElementById('navi').innerHTML = NAV1;
let data;
(async () => {
	let resp = await fetch("https://ichat-api.qwy.ac/desc", {
		method: "GET",
		headers: {
			"xToken": localStorage.getItem('token')
		}
	});
	data = await resp.json();
})();
setInterval(async () => {
	if (window.innerWidth < 1000 && window_size != 0) {
		document.getElementById('navi').innerHTML = NAV2, window_size = 0;
		if (data.name != undefined)
			document.getElementById('uid').innerText = data.name;
	}
	else if (window.innerWidth >= 1000 && window_size != 1) {
		document.getElementById('navi').innerHTML = NAV1, window_size = 1;
		let Element = document.getElementsByClassName('navtxt');
		for (let i = 0; i < Element.length; i++)
			addmouse(Element[i]);
		Tg = 0;
		Nv = document.getElementsByClassName('nav')[0];
		if (data.name != undefined)
			document.getElementById('uid').innerText = data.name;
	}
}, 100);
function tog() {
	if (Tg == 0)
		Nv.classList.remove('nav'), Tg = 1;
	else
		Nv.classList.add('nav'), Tg = 0;
}