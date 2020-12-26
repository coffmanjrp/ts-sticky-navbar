"use strict";
var nav = document.querySelector('.nav');
function fixNav() {
    if (window.scrollY > nav.offsetHeight + 748) {
        nav.classList.add('active');
    }
    else {
        nav.classList.remove('active');
    }
}
window.addEventListener('scroll', fixNav);
