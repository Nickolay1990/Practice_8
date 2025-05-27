import Swiper from 'swiper';
import 'swiper/css';

export const ToursSwiper = new Swiper('.tours-swiper', {
	slidesPerView: 1,
	spaceBetween: 32,
	allowTouchMove: false,
	breakpoints: {
		360: { slidesPerView: 1 },
		1440: { slidesPerView: 2 },
	},
});

export const gallerySwiper = new Swiper('.gallery-swiper', {
	slidesPerView: 1,
	spaceBetween: 32,
	allowTouchMove: false,
	breakpoints: {
		360: { slidesPerView: 1 },
		1440: { slidesPerView: 2 },
	},
});
