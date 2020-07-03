"use strict";

// 获取商品数据
(function () {
  var xhr = new XMLHttpRequest();
  xhr.open("get", "../json/shop.json", true);
  xhr.send(null);

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      if (xhr.status >= 200 && xhr.status < 300) {
        var json = JSON.parse(xhr.responseText);

        for (var i = 0; json.length > i; i++) {
          show.innerHTML += "\n            <a class=\"card card-reveal\" href=\"#\">\n                <img class=\"card-img-top\" src=\"".concat(json[i].url, "\"/>\n                <div class=\"card-body\">\n                <div class=\"card-body_one\">\n                    <span>").concat(json[i].name, "</span>\n                    <span style=\"").concat(json[i].label === 'ture' ? 'opacity:1;' : 'opacity:0;', "\">").concat(json[i].label === 'ture' ? '新品' : '', "</span>\n                    <div class=\"right\">\n                        \u552E\u4EF7:\n                        <b style=\"letter-spacing:-1px\">").concat(json[i].price, "</b>\n                        <i id=\"buy\" class=\"buy\">\uFF0B</i>\n                    </div>\n                </div>\n                <div class=\"card-body_two\">\n                    ").concat(json[i].intro, "\n                </div>\n                </div>\n            </a>");
        }
      } else {
        alert("请求失败");
      }
    }
  };
})(); //购物车加减


var container = document.querySelector(".container");
var addcar = document.querySelector('#addcar');
var label = document.querySelector('.label');
var shop_img = document.querySelector('.shop-img');
var img = document.querySelector('.img');
var num = 0; // none()

container.onclick = function (e) {
  if (e.target.id === 'buy' && num <= 999) {
    addcar.innerHTML = ++num;
  }

  return false;
};

addcar.addEventListener('click', ck1);

function ck1() {
  if (num > 0) {
    addcar.innerHTML = --num;
  }
} // 跳转


img.onclick = function () {
  window.location.href = "../html/payment.html";
}; // 点击加入购物车
// $('#show').on('click','.buy',function (){
//     alert(localStorage.getItem('card'))
//     // 把点击的商品编号记录下来
//     // localStorage  key  => value
//     //              goods => '{code: ['abc1','abc2','abc1']}'
//     //              goods => '[{code:'abc1',num:1},{},{}]'
//     if (localStorage.getItem('card')) {
//         var goodsArr = JSON.parse( localStorage.getItem('card') );
//     } else {
//         var goodsArr = [];
//     }
//     // 获取当前点击商品的商品编码
//     var code = $(this).attr('code');
//     // 记录是否加入过购物车
//     var hasCode = false;
//     // 遍历数组，判断是否已加入过购物车
//     $.each(goodsArr,function (index,item){
//         if (item.code === code) {
//             item.am++;
//             hasCode = true;
//         }
//     })
//     if (!hasCode) {
//         goodsArr.push({"code":code,"am":1});
//     }
//     var strArr = JSON.stringify(goodsArr);
//     localStorage.setItem('card',strArr);
//     // console.log(goodsArr)
//     // alert('加入购物车成功');
// })