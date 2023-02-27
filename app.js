
// sdsd
const body = document.body;
const triggerMenu = document.querySelector(".trigger-menu");
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
const hide = "hidden";
let lastScroll = 0;



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
function openTest(evt, testimonial) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tab-pane");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("nav-link");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(testimonial).style.display = "block";
  evt.currentTarget.className += " active";
}

// intersection observer
if ('IntersectionObserver' in window)  {
  // Recommended: make this selector more specific with a `data-animate-on-visible`
  let elements = document.querySelectorAll("svg");

  let observer = new IntersectionObserver(entries => {
    // quit early if users wants Reduced Motion
    let mediaQuery = window.matchMedia('(prefers-reduced-motion: no-preference)');
    if(!mediaQuery.matches) {
      return;
    }

    for(let entry of entries) {
      if(!entry.isIntersecting) {
        continue;
      }

      // Look for <animate> or <animateTransform> that need JS to start
      let beginElements = entry.target.querySelectorAll(`:scope [begin="indefinite"]`);
      for(let beginEl of beginElements) {
        beginEl.beginElement();

        // Unobserve so we don’t re-animate the dead
        observer.unobserve(entry.target);
      }
    }
  },
  {
    threshold: .5 // 50% of element must be visible
  });

  for(let elem of elements) {
    observer.observe(elem);
  }
}
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
