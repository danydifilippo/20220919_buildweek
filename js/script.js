let fixId, fixTop;

window.onload = function () {
  fixId = document.getElementById("nav-bar");
  fixTop = fixId.offsetTop;
};

window.onscroll = function () {
  with (fixId.style) {
    if (window.pageYOffset > fixTop) {
      position = "fixed";
      top = "0px";
      height = "55px";
    } else {
      position = "absolute";
      top = "441px";
    }
  }
};
