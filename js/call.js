// CallBack

let activeCall = document.querySelector(".back-call");
const modal = document.querySelector(".callback");
const closeCall = document.querySelector(".callback__close");

activeCallAll.onclick = function () {
  modal.style.display = "block";
};

closeCall.onclick = function () {
  modal.style.display = "none";
};
