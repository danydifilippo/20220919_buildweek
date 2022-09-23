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
    fixId.style.bottom = "-15px";
    fixId.style.top = "unset";
  }
};

const avantiPagina = function () {
  const paginaCorrente = document.getElementsByClassName("activ")[0];
  paginaCorrente.classList.remove("activ");
  const numeroPagina = Number(paginaCorrente.id.split("-")[1]);
  const prossimaPagina = document.getElementById("pag-" + (numeroPagina + 1));
  if (prossimaPagina == null) {
    document.getElementById("pag-1").classList.add("activ");
  } else {
    prossimaPagina.classList.add("activ");
  }
};

function fadeinup() {
  let fadeinup = document.querySelectorAll(".fadeinup");

  for (let i = 0; i < fadeinup.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = fadeinup[i].getBoundingClientRect().top;
    let elementVisible = 0;

    if (elementTop < windowHeight - elementVisible) {
      fadeinup[i].classList.add("active");
    } else {
      fadeinup[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", fadeinup);
