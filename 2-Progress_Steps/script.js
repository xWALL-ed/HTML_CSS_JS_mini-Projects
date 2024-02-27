var nxtBtn = document.getElementById("next");
var prevBtn = document.getElementById("prev");
var circles = document.querySelectorAll(".circle");
var progress = document.getElementById("progress");

var counter=0;
var progressPercent=100/(circles.length-1);;

nxtBtn.addEventListener('click',()=>{
    counter++;
    if(counter==3) nxtBtn.disabled=true;
    else prevBtn.disabled=false;
    circles[counter].classList.add("active");
    progress.style.width = `${progressPercent*counter}%`;
});
prevBtn.addEventListener('click',()=>{
    counter--;
    if(counter==0) prevBtn.disabled=true;
    else nxtBtn.disabled=false;
    circles[counter+1].classList.remove("active");
    progress.style.width = `${progressPercent*counter}%`;
});
