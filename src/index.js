var butt = document.querySelector(".btn");
var par = document.querySelector("#para");
var text1 = document.querySelector("input");

function clickHandler() {
  var a = text1.value;
  var c = 0;
  var n = [];
  var decide = 0;
  for (var i = 0; i < a.length; i++) {
    if (a[i] === "-") {
      continue;
    } else {
      var b = a[i];
      n[c] = b;
      c = c + 1;
    }
    console.log(n);
    var l = n.length;
    for (var k = 0; k < l; k++) {
      if (n[k] === n[l - k - 1]) {
        decide = 0;
      } else {
        decide = 1;
        break;
      }
    }
    if (decide === 0) {
      par.innerHTML = "palidrome";
    } else {
      par.innerHTML = "not a palidrome";
    }
  }
}

butt.addEventListener("click", clickHandler);
