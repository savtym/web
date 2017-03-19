"use strict"

intNumber.onkeyup = intNumber.oninput;
intNumber.onkeyup = function() {
	resultIntNumber.innerHTML =	/^[0-9]+$/.test(this.value);
}

floatNumber.onkeyup = floatNumber.oninput;
floatNumber.onkeyup = function() {
	resultFloatNumber.innerHTML =	/^[0-9]+[.]+[0-9]+$/.test(this.value);
}

dataNumber.onkeyup = dataNumber.oninput;
dataNumber.onkeyup = function() {
	resultDataNumber.innerHTML =	parseDate(this.value);
}

function parseDate(str) {
  var m = str.match(/^(\d{1,2}).(\d{1,2}).(\d{4})$/);
  return (m) ? new Date(m[3], m[2]-1, m[1]) : false;
}

passwordRepeat.onkeyup = passwordRepeat.oninput;
passwordRepeat.onkeyup = function() {
	resultPassword.innerHTML = (password.value === passwordRepeat.value) ? true : false
}

password.onkeyup = password.oninput;
password.onkeyup = function() {
	resultPassword.innerHTML = (password.value === passwordRepeat.value) ? true : false
}

function send() {
	alert('Good!');
}