var btnOpen = document.getElementById("open");
var btnClose = document.getElementById("close");
var circle = document.getElementById("circle");
var container = document.querySelector(".container");
var nav = document.querySelector(".nav-container");

btnOpen.addEventListener('click',()=>{
    circle.classList.add("active");
    container.classList.add("show-nav");
    nav.classList.add("active");
});
btnClose.addEventListener('click',()=>{
    circle.classList.remove("active");
    container.classList.remove("show-nav");
    nav.classList.remove("active");
});