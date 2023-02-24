const body = document.body;
const triggerMenu = document.querySelector(".trigger-menu");
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
const hide = "hidden";
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
const overflow = () =>  {
  const checkBox = document.querySelector(".switch");
  
  if (checkBox.checked == true){
    body.classList.add(hide);
  } else {
    body.classList.remove(hide);
  }
}
overflow();
