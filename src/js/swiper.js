import Swiper from 'swiper';
import 'swiper/css';
import { Navigation } from 'swiper/modules';

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
	// modules: [Navigation],
	slidesPerView: 1,
	spaceBetween: 16,
	allowTouchMove: false,
	// navigation: {
	// 	nextEl: '#swipe-gallery-next',
	// 	prevEl: '#swipe-gallery-prev',
	// },
	breakpoints: {
		360: { slidesPerView: 1 },
		835: {
			slidesPerView: 2,
			slidesPerGroup: 2,
		},
		1440: {
			slidesPerView: 3.4,
			slidesPerGroup: 3,
		},
	},
});
