var bg = document.querySelector(".bg");
var text = document.querySelector(".loading-text");
var counter=0;

var interval = setInterval(loading,30);

function loading(){
    counter+=1;
    if(counter>99){
        clearInterval(interval);
    }
    text.innerHTML=`${counter}%`;
    text.style.opacity = `${100-counter}%`;
    bg.style.filter=`blur(${30-((30/100)*counter)}px)`;
}