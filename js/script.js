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

function fadeinright() {
  let fadeinright = document.querySelectorAll(".fadeinright");

  for (let i = 0; i < fadeinright.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = fadeinright[i].getBoundingClientRect().top;
    let elementVisible = 0;

    if (elementTop < windowHeight - elementVisible) {
      fadeinright[i].classList.add("active");
    } else {
      fadeinright[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", fadeinright);

function fadeinright2() {
  let fadeinright2 = document.querySelectorAll(".fadeinright2");

  for (let i = 0; i < fadeinright2.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = fadeinright2[i].getBoundingClientRect().top;
    let elementVisible = 0;

    if (elementTop < windowHeight - elementVisible) {
      fadeinright2[i].classList.add("active");
    } else {
      fadeinright2[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", fadeinright2);

function fadeinright3() {
  let fadeinright3 = document.querySelectorAll(".fadeinright3");

  for (let i = 0; i < fadeinright3.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = fadeinright3[i].getBoundingClientRect().top;
    let elementVisible = 0;

    if (elementTop < windowHeight - elementVisible) {
      fadeinright3[i].classList.add("active");
    } else {
      fadeinright3[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", fadeinright3);

function fadeblog() {
  let fadeblog = document.querySelectorAll(".fadeblog");

  for (let i = 0; i < fadeblog.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = fadeblog[i].getBoundingClientRect().top;
    let elementVisible = 0;

    if (elementTop < windowHeight - elementVisible) {
      fadeblog[i].classList.add("active");
    } else {
      fadeblog[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", fadeblog);

function fadeblog2() {
  let fadeblog2 = document.querySelectorAll(".fadeblog2");

  for (let i = 0; i < fadeblog2.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = fadeblog2[i].getBoundingClientRect().top;
    let elementVisible = 0;

    if (elementTop < windowHeight - elementVisible) {
      fadeblog2[i].classList.add("active");
    } else {
      fadeblog2[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", fadeblog2);

function fadeblog3() {
  let fadeblog3 = document.querySelectorAll(".fadeblog3");

  for (let i = 0; i < fadeblog3.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = fadeblog3[i].getBoundingClientRect().top;
    let elementVisible = 0;

    if (elementTop < windowHeight - elementVisible) {
      fadeblog3[i].classList.add("active");
    } else {
      fadeblog3[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", fadeblog3);

function fadeblog4() {
  let fadeblog4 = document.querySelectorAll(".fadeblog4");

  for (let i = 0; i < fadeblog4.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = fadeblog4[i].getBoundingClientRect().top;
    let elementVisible = 0;

    if (elementTop < windowHeight - elementVisible) {
      fadeblog4[i].classList.add("active");
    } else {
      fadeblog4[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", fadeblog4);

function fadeblog5() {
  let fadeblog5 = document.querySelectorAll(".fadeblog5");

  for (let i = 0; i < fadeblog5.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = fadeblog5[i].getBoundingClientRect().top;
    let elementVisible = 0;

    if (elementTop < windowHeight - elementVisible) {
      fadeblog5[i].classList.add("active");
    } else {
      fadeblog5[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", fadeblog5);

function fadeblog6() {
  let fadeblog6 = document.querySelectorAll(".fadeblog6");

  for (let i = 0; i < fadeblog6.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = fadeblog6[i].getBoundingClientRect().top;
    let elementVisible = 0;

    if (elementTop < windowHeight - elementVisible) {
      fadeblog6[i].classList.add("active");
    } else {
      fadeblog6[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", fadeblog6);
