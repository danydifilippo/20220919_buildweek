let fixId, fixTop;

window.onload = function() {
    fixId = document.getElementById('nav-bar')
    fixTop = fixId.offsetTop;
}

window.onscroll = function() {
    with (fixId.style) {
        if (window.pageYOffset > fixTop) {
            fixId.position = 'fixed';
            fixId.top = "2px";
        } else {
            fixId.position ="relative";
            fixId.top = 0;
        }
    }
}