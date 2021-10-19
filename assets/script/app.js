const navToggle = document.querySelector('.nav__toggle');
const navWrapper = document.querySelector('.nav__wrapper');
const searchForm = document.querySelector('.search__form');
const searchToggle = document.querySelector('.search__toggle');

function removeAllActive() {
  activeElem = document.querySelectorAll('.active');
  activeElem.forEach((elem) => {
    elem.classList.remove("active");
  });

}

navToggle.addEventListener("click", function(event) {
  if(searchForm.classList.contains("active")) {
    removeAllActive();
  }

  if (navWrapper.classList.contains("active")) {
    this.setAttribute("aria-expanded", "false");
    this.setAttribute("aria-label", "menu");
    navWrapper.classList.remove("active");
  } else {
    navWrapper.classList.add("active");
    this.setAttribute("aria-label", "close menu");
    this.setAttribute("aria-expanded", "true");
  }
})

searchToggle.addEventListener("click", function(event) {
  if(navWrapper.classList.contains("active")) {
    removeAllActive();
  }
  searchForm.classList.toggle("active");

})
