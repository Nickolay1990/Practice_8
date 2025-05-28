import Swiper from 'swiper';
import 'swiper/css';
import { Navigation } from 'swiper/modules';

export const ToursSwiper = new Swiper('.tours-swiper', {
	spaceBetween: 32,
	allowTouchMove: false,
	breakpoints: {
		360: { slidesPerView: 1 },
		1440: { slidesPerView: 2 },
	},
});

export const gallerySwiper = new Swiper('.gallery-swiper', {
	spaceBetween: 16,
	allowTouchMove: false,
	breakpoints: {
		360: { slidesPerView: 1 },
		835: {
			slidesPerView: 2,
			slidesPerGroup: 2,
		},
		1440: {
			slidesPerView: 3,
			slidesPerGroup: 3,
		},
	},
});

export const reviewsSwiper = new Swiper('.reviews-swiper', {
	modules: [Navigation],
	spaceBetween: 32,
	allowTouchMove: false,
	navigation: {
		nextEl: '#swipe-reviews-next',
		prevEl: '#swipe-reviews-prev',
	},
	breakpoints: {
		360: { slidesPerView: 1 },
		835: {
			slidesPerView: 2,
			slidesPerGroup: 1,
		},
		1440: {
			slidesPerView: 4,
			slidesPerGroup: 2,
		},
	},
});
