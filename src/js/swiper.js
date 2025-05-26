import Swiper from 'swiper';
import 'swiper/css';

export const swiper = new Swiper('.swiper', {
	slidesPerView: 1,
	spaceBetween: 32,
	allowTouchMove: false,
	breakpoints: {
		360: { slidesPerView: 1 },
		1440: { slidesPerView: 2 },
	},
});
