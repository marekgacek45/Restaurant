const hamburgerBtn = document.querySelector('.hamburger')
const navList = document.querySelector('.nav__list-mobile')
const footerYearSpan = document.querySelector('.footer__bottom-text--year')

const hamburgerHandler = () => {
	hamburgerBtn.classList.toggle('is-active')
	navList.classList.toggle('nav__list-mobile--active')
}

const footerYear = () => {
	const date = new Date()
	const year = date.getFullYear()

	footerYearSpan.innerHTML = year
}

//KARUZELA
const buttons = document.querySelectorAll('[data-carousel-button]')

buttons.forEach(button => {
	button.addEventListener('click', () => {
		const offset = button.dataset.carouselButton === 'next' ? 1 : -1
		const slides = button.closest('[data-carousel]').querySelector('[data-slides]')

		const activeSlide = slides.querySelector('[data-active]')
		let newIndex = [...slides.children].indexOf(activeSlide) + offset
		if (newIndex < 0) newIndex = slides.children.length - 1
		if (newIndex >= slides.children.length) newIndex = 0

		slides.children[newIndex].dataset.active = true
		delete activeSlide.dataset.active
	})
})

const carousel = document.querySelector('[data-carousel]')
const interval = 5000 //
const nextButton = carousel.querySelector("[data-carousel-button='next']")

setInterval(() => {
	nextButton.click()
}, interval)

//handle observer
const navLinks = document.querySelectorAll('.nav__list-item')
const sections = document.querySelectorAll('section')

window.onscroll = function() {
  const currentScrollPos = window.pageYOffset + (window.innerHeight/3);
  for (let i = 0; i < sections.length; i++) {
    if (currentScrollPos >= sections[i].offsetTop) {
      const id = sections[i].getAttribute('id');
      for (let j = 0; j < navLinks.length; j++) {
        navLinks[j].classList.remove('active');
        if (navLinks[j].getAttribute('href') == '#' + id) {
          navLinks[j].classList.add('active');
        }
      }
    }
  }
}

//close nav
const closeNav = () => {
	navLinks.forEach(link => {
    link.addEventListener('click',hamburgerHandler)
  })
}



//reveal

const reveal =() =>{
	const reveals = document.querySelectorAll(".reveal");
	for (let i = 0; i < reveals.length; i++) {
		const windowHeight = window.innerHeight;
		const elementTop = reveals[i].getBoundingClientRect().top;
		const elementVisible = 150;
	
		if (elementTop < windowHeight - elementVisible) {
			reveals[i].classList.add("show");
		} else {
			reveals[i].classList.remove("show");
		}
	}
}
	
	window.addEventListener("scroll", reveal);






hamburgerBtn.addEventListener('click', hamburgerHandler)

footerYear()
closeNav()
