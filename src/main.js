import 'modern-normalize';
import DOM from './js/navigation.js';
import * as handlers from './js/handlers';
import { ToursSwiper, gallerySwiper } from './js/swiper.js';
import { setEqualHeigth } from './js/general.js';

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

DOM.telInput.addEventListener('input', handlers.handleTelInput);

setEqualHeigth();

DOM.navLinks.addEventListener('click', handlers.handleMobileLinks);
