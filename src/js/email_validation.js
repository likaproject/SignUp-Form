"use strict";
var email = document.getElementById('email');
var city = document.getElementById('city');
var submitReg = document.getElementById('signUpButton');
var messageMail = document.getElementById('messageMail');

var emailRegExp = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

function isValidEmail () {
	if(email.value === '') {
		messageMail.innerHTML = "Это обязательное поле";
		return false;
		
	} else if(!emailRegExp.test(email.value)){
		messageMail.innerHTML = "Неверный адрес почты";
		return false;
			
	} else {
		city.focus();
		messageMail.innerHTML = "";
		return true;
	}
};

email.onblur = isValidEmail;

