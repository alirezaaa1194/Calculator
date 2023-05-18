let numbers = document.querySelectorAll(".number");
let pbaz = document.querySelector(".pbaz");
let pbaste = document.querySelector(".pbaste");
let alamat = document.querySelectorAll(".Al");
let txt = document.querySelector(".txt");
let zero = document.querySelector(".zero");
let clean = document.querySelector(".clean");
let dot = document.querySelector(".dot");
let isdot = false;
let iszero = false;

let backSpace = document.querySelector(".backSpace");
let equal = document.querySelector(".equal");
numbers.forEach(function (numbtn) {
  numbtn.addEventListener("click", function () {
    txt.value += numbtn.id;
    iszero = true;
  });
});

let ispopen = false;
pbaz.addEventListener("click", function () {
  if (
    (txt.value.charAt(txt.value.length - 2) == "+" ||
      txt.value.charAt(txt.value.length - 2) == "-" ||
      txt.value.charAt(txt.value.length - 2) == "*" ||
      txt.value.charAt(txt.value.length - 2) == "/") &&
    txt.value.charAt(txt.value.length - 1) != "(" &&
    txt.value.charAt(txt.value.length - 1) != ")"
  ) {
    txt.value += pbaz.id;
    ispopen = true;
  }
});
pbaste.addEventListener("click", function () {
  if (
    (txt.value.charAt(txt.value.length - 2) != "+" ||
      txt.value.charAt(txt.value.length - 2) != "-" ||
      txt.value.charAt(txt.value.length - 2) != "*" ||
      txt.value.charAt(txt.value.length - 2) != "/") &&
    txt.value.charAt(txt.value.length - 1) != "(" &&
    txt.value.charAt(txt.value.length - 1) != ")" &&
    ispopen == true
  ) {
    txt.value += pbaste.id;
  }
});
alamat.forEach(function (alamatbtn) {
  alamatbtn.addEventListener("click", function () {
    isdot = false;
    iszero = false;
    if (
      txt.value.length > 0 &&
      txt.value.charAt(txt.value.length - 2) != "+" &&
      txt.value.charAt(txt.value.length - 2) != "-" &&
      txt.value.charAt(txt.value.length - 2) != "*" &&
      txt.value.charAt(txt.value.length - 2) != "/"
    ) {
      txt.value += " " + alamatbtn.id + " ";
    }
  });
});

clean.addEventListener("click", function () {
  txt.value = "";
  isdot = false;
});

dot.addEventListener("click", function () {
  if (
    txt.value.length > 0 &&
    txt.value.charAt(txt.value.length - 1) != dot.id &&
    isdot == false
  ) {
    txt.value += "0" + dot.id;
    isdot = true;
  }
  if (txt.value.length <= 0 && isdot == false) {
    txt.value += "0" + dot.id;
    iszero = true;
  }
});

backSpace.addEventListener("click", function () {
  if (
    txt.value.charAt(txt.value.length - 2) == "+" ||
    txt.value.charAt(txt.value.length - 2) == "-" ||
    txt.value.charAt(txt.value.length - 2) == "*" ||
    txt.value.charAt(txt.value.length - 2) == "/"
  ) {
    txt.value = txt.value.substring(0, txt.value.length - 3);
  } else {
    txt.value = txt.value.substring(0, txt.value.length - 1);
  }
  if (txt.value.charAt(txt.value.length - 1) == ".") {
    isdot = false;
  }
});
equal.addEventListener("click", function () {
  if (txt.value.length > 0) {
    let answer = eval(txt.value);
    if (answer % 1 != 0) {
      txt.value = answer.toFixed(2);
      isdot = true;
    } else {
      txt.value = answer;
    }
  }
});
zero.addEventListener("click", function () {
  if (txt.value.length > 0) {
    txt.value += zero.id;
  }
});
