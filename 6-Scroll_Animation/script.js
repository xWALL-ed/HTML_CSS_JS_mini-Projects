var boxes = document.querySelectorAll(".box");

window.addEventListener('scroll', scrolling);
scrolling();
function scrolling(){
    const winBottom = window.innerHeight/100 * 80;
    console.log(winBottom);
    boxes.forEach(box =>{
        const boxTop = box.getBoundingClientRect().top;

        if(boxTop < winBottom){
            box.classList.add("active");
        }
        else{
            box.classList.remove("active");
        }
    });
}