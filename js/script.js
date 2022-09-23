let fixId, fixTop;

window.onload = function () {
  fixId = document.getElementById("nav-bar");
  fixTop = fixId.offsetTop;
};

window.onscroll = function () {
  console.log(window.pageYOffset, fixTop);
  if (window.pageYOffset > fixTop) {
    fixId.style.position = "fixed";
    fixId.style.top = "0px";
  } else {
    fixId.style.position = "absolute";
    fixId.style.bottom = "-10px";
    fixId.style.top = "unset";
  }
};


const avantiPagina = function() {
  const paginaCorrente = document.getElementsByClassName("active")[0]
  paginaCorrente.classList.remove("active")
  const numeroPagina = Number(paginaCorrente.id.split("-")[1])
  const prossimaPagina = document.getElementById("pag-" + (numeroPagina + 1))
  if(prossimaPagina == null) {
      document.getElementById("pag-1").classList.add("active")
  } else {
      prossimaPagina.classList.add("active")
  }
}
