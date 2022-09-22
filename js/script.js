
let fixId, fixTop;

window.onload = function () {
  fixId = document.getElementById("nav-bar");
  fixTop = fixId.offsetTop;
};

window.onscroll = function () {
  console.log(window.pageYOffset, fixTop)
    if (window.pageYOffset > fixTop) {
      fixId.style.position = "fixed";
      fixId.style.top = "0px";
    } else {
      fixId.style.position = "absolute";
      fixId.style.bottom = "0px";
      fixId.style.top = "unset";
    }
};

  