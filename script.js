let index = 1

showSlides(index)

function addSlides(n) {
  showSlides(index += n)
}

function currentSlide(n) {
  showSlides(index = n)
}

function showSlides(index) {
  const slides = document.getElementsByClassName("slides")
  const dots = document.getElementsByClassName("dot")

  if (index > slides.length) index = 1
  if (index < 1) index = slides.length

  for (let i = 0;i < slides.length; i++) {
    slides[i].style.display = "none"
    dots[i].className = dots[i].className.replace(" active", "")
  }

  slides[index - 1].style.display = "flex"
  dots[index -1].className += " active"
}
