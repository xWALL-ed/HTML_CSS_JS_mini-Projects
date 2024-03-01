var nxtBtn = document.getElementById("next");
var prevBtn = document.getElementById("prev");
var circles = document.querySelectorAll(".circle");
var circles1 = document.querySelector(".circle:nth-child(2)");
var progress = document.getElementById("progress");
var progress_cnt = document.querySelector(".progress-container");
var check =  window.getComputedStyle(progress_cnt).getPropertyValue('flex-direction');
var xtrcheck =  window.getComputedStyle(circles1).getPropertyValue('position');

var counter=0;
var progressPercent=100/(circles.length-1);

window.addEventListener('resize',() => {
    check =  window.getComputedStyle(progress_cnt).getPropertyValue('flex-direction');
    progress.style.transition = "none";
    if(check == "column"){
        progress.style.height = `${progressPercent*counter}%`;
        progress.style.width = "4px";
    } else{
        progress.style.width = `${progressPercent*counter}%`;
        progress.style.height = "4px";
    }
    circles1.style.transition = "none";
    xtrcheck =  window.getComputedStyle(circles1).getPropertyValue('position');
    if(xtrcheck=="absolute"){
        circles1.innerHTML=`${parseInt(progressPercent*counter)}%`;
    }
    else{
        circles1.innerHTML="1";
    }

});
nxtBtn.addEventListener('click',()=>{
    progress.style.transition = "0.4s ease";
    counter++;
    if(counter==3) nxtBtn.disabled=true;
    else prevBtn.disabled=false;
    circles[counter].classList.add("active");
    if(check == "column"){
        if(xtrcheck=="absolute"){
            circles1.innerHTML=`${parseInt(progressPercent*counter)}%`;
        }
        else{
            circles1.innerHTML="1";
        }
        progress.style.height = `${parseInt(progressPercent*counter)}%`;
    } else{
        if(xtrcheck=="absolute"){
            circles1.innerHTML=`${parseInt(progressPercent*counter)}%`;
        }
        else{
            circles1.innerHTML="1";
        }
        progress.style.width = `${parseInt(progressPercent*counter)}%`;
    }
});
prevBtn.addEventListener('click',()=>{
    progress.style.transition = "0.4s ease";
    counter--;
    if(counter==0) prevBtn.disabled=true;
    else nxtBtn.disabled=false;
    circles[counter+1].classList.remove("active");
    if(check == "column"){
        if(xtrcheck=="absolute"){
            circles1.innerHTML=`${parseInt(progressPercent*counter)}%`;
        }
        else{
            circles1.innerHTML="1";
        }
        progress.style.height = `${parseInt(progressPercent*counter)}%`;
    } else{
        if(xtrcheck=="absolute"){
            circles1.innerHTML=`${parseInt(progressPercent*counter)}%`;
        }
        else{
            circles1.innerHTML="1";
        }
        progress.style.width = `${parseInt(progressPercent*counter)}%`;
    }
});
