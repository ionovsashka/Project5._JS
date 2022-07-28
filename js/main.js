const open = document.querySelector('.button-open')
const close = document.querySelector('.button-close')
const container = document.querySelector('.container')
const circleContainer = document.querySelector('.circle__container')

open.addEventListener('click', (e) => {
	container.classList.add('_show-nav');
	circleContainer.classList.add('rotate');
	e.preventDefault()
})
close.addEventListener('click', () => {
	container.classList.remove('_show-nav');
	circleContainer.classList.remove('rotate');
	e.preventDefault()
})