const body = document.body;
let mobLink = document.querySelectorAll(".mob-link");
let mobilex = document.querySelector(".mobilex");
let checkbox = document.querySelector(".switch");
const triggerMenu = document.querySelector(".trigger-menu");
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
const hide = "hidden";
let lastScroll = 0;



mobLink.forEach(ml => {
  ml.addEventListener('click', () => {
    checkbox.checked = false;
  })
});
mobilex.addEventListener('click', () => {
  checkbox.checked = false;
});


window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
 
  if (currentScroll === 0) {
    body.classList.add(scrollUp);
    body.classList.remove(scrollDown);
    return;
  }

  if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
    // down
    body.classList.add(scrollDown);
    body.classList.remove(scrollUp);
   
  } else if (currentScroll < lastScroll && body.classList.contains(scrollUp)) {
    // up
    body.classList.remove(scrollDown);
    body.classList.add(scrollUp);
    
  }
  lastScroll = currentScroll;
});


// intersection observer
const lined = document.querySelector(".focus-tl-pointer");
const line = document.querySelector(".line");
const qline = document.querySelector(".qline");
const qline2 = document.querySelector(".qline2");
const cardCurvedRed = document.querySelector(".card-curved-red");
const cardCurvedGreen = document.querySelector(".card-curved-green");
const uLineRed = document.querySelector(".sp-uline-red");
const uLineRed2 = document.querySelector(".sp-uline-red2");
const uLineRed3 = document.querySelector(".sp-uline-red3");
const uLineGreen = document.querySelector(".sp-uline-green");
const uLineGreen2 = document.querySelector(".sp-uline-green2");
const uLineGreen3 = document.querySelector(".sp-uline-green3");
const curvedLine2 = document.querySelector(".curved-line2");
const curvedToSection = document.querySelector(".curved-tosection");
const twoDotsLines = document.querySelector(".twodots-lines");
const sect = document.querySelector("#focus-tl");
const sect2 = document.querySelector("#whoWeare");
const sect3 = document.querySelector("#build");
const sect4 = document.querySelector("#pricing");
const sect5 = document.querySelector("#technologies");
const sect6 = document.querySelector("#faq");
const sect7 = document.querySelector("#socials");
let options = {root: sect,}
let option2 = {root: sect2,}
let option3 = {root: sect3,}
let option4 = {root: sect4,}
let option5 = {
  root: sect5,
  rootMargin: 100,
  threshold: 1,
}
let option6 = {root: sect6,}
let option7 = {root: sect7,}
const lineobserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
    else{
      entry.target.classList.remove("active");
    }
  }, options);
});
lineobserver.observe(lined);
const lineobserver2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
    else{
      entry.target.classList.remove("active");
    }
  }, option2);
});
lineobserver2.observe(qline);
lineobserver2.observe(line);
lineobserver2.observe(cardCurvedRed);
lineobserver2.observe(cardCurvedGreen);
lineobserver2.observe(uLineRed);
lineobserver2.observe(uLineGreen);

const lineobserver3 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
    else{
      entry.target.classList.remove("active");
    }
  }, option3);
});
lineobserver3.observe(uLineGreen2);
lineobserver3.observe(curvedLine2);

const lineobserver4 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
    else{
      entry.target.classList.remove("active");
    }
  }, option4);
});
lineobserver4.observe(qline2);
lineobserver4.observe(uLineRed2);

const lineobserver5 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
    else{
      entry.target.classList.remove("active");
    }
  }, option5);
});
lineobserver5.observe(curvedToSection);
lineobserver5.observe(twoDotsLines);

const lineobserver6 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
    else{
      entry.target.classList.remove("active");
    }
  }, option6);
});
lineobserver5.observe(uLineGreen3);

const lineobserver8 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
    else{
      entry.target.classList.remove("active");
    }
  }, option7);
});
lineobserver8.observe(uLineRed3);




// end of observer
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav ul li a");
window.onscroll = () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id"); }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
};



