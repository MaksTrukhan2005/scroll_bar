'use strict'

window.onscroll = function() { prograsBarFunction() };

function prograsBarFunction() {
    const myBar = document.getElementById('myBar')
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const height = scrollHeight - clientHeight;
    const scrolled = (scrollTop / height) * 100;

    myBar.style.width = scrolled.toFixed(1) + "%";
}

