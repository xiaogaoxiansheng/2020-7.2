"use strict";

var search = document.querySelector('.search');
var sousuo = document.querySelector('#sousuo');
var btn = document.querySelector('#btn');
var body = document.querySelector('body');
var bool = false;
var back = document.querySelector('.back');
var ipt = document.querySelector('.ipt');
var ren = document.querySelector('#ren');
var box = document.querySelector('.box');
var full = document.querySelector('#full');

sousuo.onclick = function () {
  if (bool === false) {
    search.setAttribute('style', 'margin-top:0px;transition: 0.5s;z-index:5;opacity: 1;');
    bool = true;
  } else {
    search.setAttribute('style', 'margin-top:-16px;transition: 0.5s;z-index:-1;opacity: 0;');
    bool = false;
  }
};

btn.onclick = function () {
  if (ipt.value) {
    search.setAttribute('style', 'margin-top:-16px;transition: 0.5s;z-index:-1;opacity: 0;');
    ipt.value = '';
  }
}; // 登录


ren.onclick = function () {
  box.setAttribute('style', 'margin-top:-41px;transition: 0.5s;');
  body.setAttribute('style', 'background-color:rgba(0,0,0,0.7);');
};

full.onclick = function () {
  error(num = -1);
  clear();
  box.setAttribute('style', 'margin-top:-450px;transition: 0.5s;');
  body.setAttribute('style', '');
}; // 验证


var num = -1;
var error_1 = document.querySelector(".error-1");
var error_2 = document.querySelector('.error-2');
var error_3 = document.querySelector('.error-3');
var text = document.querySelector("#text");
var password = document.querySelector('#password');
var slideshow = document.querySelector('.slideshow');

text.onkeyup = function () {
  error(num = -1);
  var val = /^[0-9a-zA-Z]*$/;

  if (val != "" && !val.test(this.value) || this.value.length > 11) {
    error(num = 1);
  } else if (this.value.length <= 11 || !val.test(this.value)) {
    error(num = -1);
  }
};

password.onkeyup = function () {
  console.log(num);

  if (num === 1 || num === 3) {
    console.log(num);
    this.value = '';
    error(num = 3);
    return;
  }

  var val = /^[0-9a-zA-Z]*$/;

  if (val != "" && !val.test(this.value) || this.value.length > 16) {
    console.log(num);
    num = 2;
    error(num);
  } else if (this.value.length <= 16 || !val.test(this.value)) {
    error(num = -2);
  }
}; // 清除


function clear() {
  text.value = '用户名/手机号';
  password.textContent = "密码";
} // 改变验证文字


function error(num) {
  switch (num) {
    case 1:
      error_1.setAttribute('style', "opacity:1;transition: 1s;");
      error_2.setAttribute('style', "opacity:0;transition: 1s;");
      break;

    case -1:
      error_1.setAttribute('style', "opacity:0;transition: 1s;");
      error_2.setAttribute('style', "opacity:0;transition: 1s;");
      error_3.setAttribute('style', "opacity:0;transition: 1s;");
      break;

    case 2:
      error_2.setAttribute('style', "opacity:1;transition: 1s;");
      error_1.setAttribute('style', "opacity:0;transition: 1s;");
      break;

    case -2:
      error_2.setAttribute('style', "opacity:0;transition: 1s;");
      break;

    case 3:
      error_3.setAttribute('style', "opacity:1;transition: 1s;");
      error_1.setAttribute('style', "opacity:0;transition: 1s;");
      error_2.setAttribute('style', "opacity:0;transition: 1s;");
      break;
  }
} //跳转


slideshow.onclick = function () {
  window.location.href = "../html/shop.html";
};