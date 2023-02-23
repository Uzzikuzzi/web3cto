const body = document.body;
const triggerMenu = document.querySelector(".trigger-menu");
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
let lastScroll = 0;



window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  console.log(currentScroll);
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
// portfolio slider

const slider = document.querySelector(".portfolio-slider-container");
const slideImages = document.querySelectorAll(".slider-item img");
const prevBtn = document.querySelector("#cprev");
const nextBtn = document.querySelector("#cnext");

let counter = 1;
const size = slideImages[0].clientWidth;

 slider.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextBtn.addEventListener('click', () => {
    
    slider.style.transition = "1s all";
    counter++;
    slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
    if ( slideImages.length -1){
        nextBtn.disabled = true;
        
    }
   
});
prevBtn.addEventListener('click', () => {
    slider.style.transition = "1s all";
    counter--;
    slider.style.transform = 'translateX(' + (size * counter) + 'px)';
    if ( slideImages.length +1){
        prevBtn.disabled = true;
    }
});