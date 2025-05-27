import DOM from './navigation';

export function mobileMenuHandler() {
	DOM.mobileMenu.classList.toggle('is-open');
	document.body.classList.toggle('no-scroll');
}

export function swipeHandler(button, swiper) {
	const way = Object.values(button.dataset)[0];
	const type = button.dataset.buttonType;
	const buttons = document.querySelectorAll(`[data-button-type=${type}]`);

	way === 'next' ? swiper.slideNext() : swiper.slidePrev();

	setSwiperButtonDisabled(buttons, swiper);
}

function setSwiperButtonDisabled(buttons, swiper) {
	const [prev, next] = buttons;

	swiper.isBeginning ? (prev.disabled = true) : (prev.disabled = false);
	swiper.isEnd ? (next.disabled = true) : (next.disabled = false);
}
