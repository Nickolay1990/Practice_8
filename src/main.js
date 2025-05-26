import 'modern-normalize';
import DOM from './js/navigation.js';
import * as handlers from './js/handlers';

DOM.mobileButtons.forEach(button =>
	button.addEventListener('click', handlers.mobileMenuHandler)
);
DOM.toursSwipe.forEach(button =>
	button.addEventListener('click', handlers.swiperTours)
);
