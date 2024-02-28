var a = ["[БЛЭТ]", "[ТОП]", "[ПОТ]", "[БАН]", "[ПРО]", "https://", "YT_"];
var b = ["adolfgitler", "zieghiel", "siskaputina", "adskyhach", "импатент", "navalny", "владимирзеленский", "bandera", "zigamyot", "konchavadima", "zalupamamonta"];
var c = ["777", "666", "1488", "1161", "228", "46", "2014"];
var d = [".com", ".ru", ".png", ".jpeg", ".txt", ".PRO MAX 64GB", ".exe"];

var aa = a.length - 1;
var bb = b.length - 1;
var cc = c.length - 1;
var dd = d.length - 1;

function g(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var ra = g(0, aa);
var aaa = a[ra];
var rb = g(0, bb);
var bbb = b[rb];
var rc = g(0, cc);
var ccc = c[rc];
var rd = g(0, dd);
var ddd = d[rd];
var hh = aaa+bbb+ccc+ddd;

function zi() {
  var huy = document.getElementById('www');
  huy.remove();
  var ra = g(0, aa);
  var aaa = a[ra];
  var rb = g(0, bb);
  var bbb = b[rb];
  var rc = g(0, cc);
  var ccc = c[rc];
  var rd = g(0, dd);
  var ddd = d[rd];
  var hh = aaa+bbb+ccc+ddd;
  var h = document.createElement("h2");
  h.innerHTML = hh;
  var hhh = document.getElementById('nik');
  document.body.insertBefore(h, hhh);
  h.id = 'www';
}
