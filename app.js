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
const sect = document.querySelector("#focus-tl");
const sect2 = document.querySelector("#whoWeare");
const sect3 = document.querySelector("#softdev");
let options = {
  root: sect,
}
let option2 = {
  root: sect2,
}

let option3 = {
  root: sect3,
  rootMargin: 100,
  threshold: 1 ,
}
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


const lineobserver3 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
    else{
      entry.target.classList.remove("active");
    }
  }, option2);
});
lineobserver2.observe(line);

// end
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
