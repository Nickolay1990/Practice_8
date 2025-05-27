import 'modern-normalize';
import DOM from './js/navigation.js';
import * as handlers from './js/handlers';
import { ToursSwiper, gallerySwiper } from './js/swiper.js';

DOM.mobileButtons.forEach(button =>
	button.addEventListener('click', handlers.mobileMenuHandler)
);
DOM.toursSwipe.forEach(button =>
	button.addEventListener('click', () =>
		handlers.swipeHandler(button, ToursSwiper)
	)
);

DOM.gallerySwipe.forEach(button =>
	button.addEventListener('click', () =>
		handlers.swipeHandler(button, gallerySwiper)
	)
);

console.log(document.querySelectorAll('[data-button-type="gallery"]'));
