const slides = document.querySelector('.slides');
const btnNext = document.querySelector('.next');
const btnPrev = document.querySelector('.prev');
const arraySlides = Array.from(slides.querySelectorAll('img'))

let count = 1;

btnNext.addEventListener('click', () => {
  if (count < arraySlides.length) {
    slides.style.transform += "translateX(-400px)"
    slides.style.transition = ".5s"
    count++
  }
})

btnPrev.addEventListener('click', () => {
  if (count > 1) {
    slides.style.transform += "translateX(400px)"
    slides.style.transition = ".5s"
    count--
  }
})
