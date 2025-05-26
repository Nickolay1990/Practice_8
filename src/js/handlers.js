import DOM from './navigation';
import { swiper } from './swiper';

export function mobileMenuHandler() {
	DOM.mobileMenu.classList.toggle('is-open');
	document.body.classList.toggle('no-scroll');
}

export function swiperTours() {
	const way = this.dataset.swipeTours;

	way === 'next' ? swiper.slideNext() : swiper.slidePrev();

	setSwiperDisabled();
}

function setSwiperDisabled() {
	const [prev, next] = DOM.toursSwipe;

	swiper.isBeginning ? (prev.disabled = true) : (prev.disabled = false);
	swiper.isEnd ? (next.disabled = true) : (next.disabled = false);
}
