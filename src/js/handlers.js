import DOM from './navigation';

export function mobileMenuHandler() {
	DOM.mobileMenu.classList.toggle('is-open');
	document.body.classList.toggle('no-scroll');
}
