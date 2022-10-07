let menuBtn = document.querySelector(".header__burger-mobile");
let menu = document.querySelector(".mobile__nav");
let wrap = document.querySelector(".wrap");
menuBtn.addEventListener("click", function(){ menuBtn.classList.toggle("active");
menu.classList.toggle("active");
wrap.classList.toggle("active")                                             
})
