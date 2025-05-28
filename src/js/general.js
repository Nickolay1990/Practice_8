import DOM from './navigation';

export function setEqualHeigth() {
	let height = Math.max(
		...Array.from(DOM.reviewsCards).map(card => card.clientHeight)
	);

	DOM.reviewsCards.forEach(card => {
		card.style.height = `${height}px`;
	});
}
