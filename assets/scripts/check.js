var submit = document.getElementById("submit");
var psw = document.getElementById("psw");
var username = document.getElementById("username");
var log_out = document.getElementById("logout");

function Submit() {
	if (username.value === 'student' && psw.value === 'learn') {
		window.location.assign("user.html")
	}
}

function logout() {
	window.location.assign("index.html")
}
