//Service Workers register or Download
if('serviceWorker' in navigator){
  window.addEventListener('load',()=>{
    navigator.serviceWorker
    .register('../../Sw.js')
    .then(reg =>console.log("serviceWorker:Register "))
    .catch(err=> console.log(`serviceWorker:Error:${err}`))
  })
}



let allCards = document.querySelectorAll(".my-card");
let buttons = document.querySelectorAll("button");
let phonePars = document.getElementById("phonePars");
let topbtn = document.querySelector(".tapLightDark");
let myPhoneProjectBtn = document.querySelectorAll(".projectbtn");
const sections = document.querySelectorAll(".section");
const sectionContainer = document.querySelector(".sections");
const dots = document.querySelectorAll(".dot");


let currentSection = 0;
let canScroll = true;
let touchStart = 0;
let touchEnd = 0;

sections.forEach((section, index) => {
  if (0 == index) {
    setDotIndicator();
  }
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", (event) => {
    resetDotIndicator();
    currentSection = index;
    sectionContainer.style.top = currentSection * -100 + "vh";
    setDotIndicator();
  });
});
function goToProducts(index) {
  resetDotIndicator();
  currentSection = index;
  sectionContainer.style.top = currentSection * -100 + "vh";
  setDotIndicator();
}
document.addEventListener("touchstart", (event) => {
  touchStart = event.changedTouches[0].clientY;
});

document.addEventListener("touchend", (event) => {
  touchEnd = event.changedTouches[0].clientY;
  if (touchStart > touchEnd) {
    performScroll(1);
  } else {
    performScroll(-1);
  }
});
document.addEventListener("wheel", (event) => {
  if (!canScroll) {
    return;
  }
  canScroll = false;
  setTimeout(() => {
    canScroll = true;
  }, 500);
  scrollDir = event.deltaY > 1 ? 1 : -1;
  performScroll(scrollDir);
});

function performScroll(scrollDir) {
  resetDotIndicator();
  currentSection += scrollDir;

  if (currentSection >= sections.length - 1) {
    currentSection = sections.length - 1;
  }
  if (0 > currentSection) {
    currentSection = 0;
  }

  sectionContainer.style.top = currentSection * -100 + "vh";

  setDotIndicator();
}
function resetDotIndicator() {
  dots[currentSection].classList.remove("current-dot");
}
function setDotIndicator() {
  dots[currentSection].classList.add("current-dot");
}

buttons.forEach((category) =>
  category.addEventListener("click", function () {
    console.log(category.id);
    allCards.forEach((card) => {
      if (category.id === "all") {
        card.classList.remove("hide");
        return;
      }
      if (category.id !== card.getAttribute("data-name")) {
        card.classList.add("hide");
      } else {
        card.classList.remove("hide");
      }
    });
  })
);

phonePars.addEventListener("click", () => {
  console.log(topbtn);
  topbtn.style.display = "block !important";
  topbtn.classList.toggle("heid");
});

myPhoneProjectBtn.forEach((item) =>
  item.addEventListener("click", () => {
    topbtn.classList.remove("heid");
  })
);

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }
  x[myIndex - 1].style.display = "block";
  setTimeout(carousel, 7000);
}


