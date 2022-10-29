
//Menu Burger Header

let menuBtn = document.querySelector(".header__burger-mobile");
let menu = document.querySelector(".mobile__nav");
let wrap = document.querySelector(".wrap");
menuBtn.addEventListener("click", function(){ menu.classList.toggle("active")
menuBtn.classList.toggle("active");
wrap.classList.toggle("wrap__active")
});

// Accordion price

const boxes = Array.from(document.querySelectorAll(".price__name"));
boxes.forEach((box) => {
    box.addEventListener("click", boxHandler);
});

function boxHandler(e) {
    e.preventDefault();
    let currentBox = e.target.closest(".price__name");
    let currentContent = e.target.nextElementSibling;
    currentBox.classList.toggle("price__name-active");
    if (currentBox.classList.contains("price__name-active")) {
        currentContent.style.maxHeight = currentContent.scrollHeight + "px";
    }
    else {
        currentContent.style.maxHeight = 0;
    }
}

//Carousel class stock

const prev = document.getElementById ("stock__arrow-prev");
let next = document.getElementById ("stock__arrow-next");
let slides = document.querySelectorAll (".stock__card");
let dots = document.querySelectorAll(".stock__dot");

let index = 0;

const activeSlide = n => {
    for(slide of slides) {
        slide.classList.remove ("stock__card-active");
    }
    slides[n].classList.add("stock__card-active");
}

const activeDot = (n) => {
    for (dot of dots) {
        dot.classList.remove("stock__dot-active");
    }
    dots[n].classList.add("stock__dot-active");
}

const prepareCurrentSlide = ind => {
    activeSlide(ind);
    activeDot(ind);
}


const nextSlide = () => {
    if(index == slides.length - 1) {
        index = 0;
        prepareCurrentSlide(index);
    }else {
        index ++;
        prepareCurrentSlide(index);
    }
}

const prevSlide = () => {
    if(index == 0) {
        index = slides.length - 1
        prepareCurrentSlide(index);
    }else {
        index --;
        prepareCurrentSlide(index);
    }
}

dots.forEach((item, indexDot) => {
    item.addEventListener("click", () => {
        index = indexDot;
        prepareCurrentSlide(index);
    })
})

next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);
setInterval(nextSlide, 2500);

// Scroll
const downElem = document.getElementById("main__down");
const endScroll = document.getElementById("footer");

downElem.addEventListener("click", function () {
  endScroll.scrollIntoView({ behavior: "smooth" });
});

