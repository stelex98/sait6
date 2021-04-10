let id= document.querySelector(".start-mobile-menu");
id.addEventListener("click",()=>{
    let menu = document.getElementById("mobile");
    menu.classList.remove("header__megamenu-list");
    menu.classList.add("mobile");
    document.querySelector(".header__megamenu-internallist").style.cssText="left: 80px;max-width: 70vw;";
    document.querySelector(".none").classList.remove("none");
})
let id_close=document.getElementById("close");
id_close.addEventListener("click",()=>{
    let menu = document.getElementById("mobile");
    menu.classList.remove("mobile");
    menu.classList.add("header__megamenu-list");
    document.querySelector(".header__megamenu-internallist").style.cssText="";
    document.querySelector(".close-menu").classList.add("none");
})
