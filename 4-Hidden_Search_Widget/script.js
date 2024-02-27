var search = document.querySelector(".search");
var input = document.querySelector(".input");
var btn = document.querySelector(".btn");

btn.addEventListener('click',()=>{
    if(search.classList.contains("active")){
        search.classList.remove("active");
    }else{
        search.classList.add("active");
        input.value="";
        input.focus();
    }
})
