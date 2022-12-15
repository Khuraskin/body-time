//Menu Burger Header

let menuBtn = document.querySelector(".header__burger-mobile");
let menu = document.querySelector(".mobile__nav");
let wrap = document.querySelector(".wrap");
menuBtn.addEventListener("click", function () {
  menu.classList.toggle("active");
  menuBtn.classList.toggle("active");
  wrap.classList.toggle("wrap__active");
});

// CallBack

let activeCall = document.querySelector(".main__btn", ".back-call");
const modal = document.querySelector(".callback");
const closeCall = document.querySelector(".callback__close");

activeCallAll.onclick = function () {
  modal.style.display = "block";
};

closeCall.onclick = function () {
  modal.style.display = "none";
};
