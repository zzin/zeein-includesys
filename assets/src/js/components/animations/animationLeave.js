import { gsap, Power0, Power1, Power2, Power3, Power4, Back } from 'gsap';
import loading from '../loading';

const animationLeave = (data) => {
	const menuToggle = document.querySelector('.menu-toggle');
	console.log(data, data.current.container);
	loading.loadingIn();
	if (menuToggle.getAttribute('aria-expanded')) menuToggle.click();
	// if (menuToggle.getAttribute('aria-expanded')) {
	// 	setTimeout(() => {
	// 		menuToggle.click();
	// 	}, 200);
	// }
	// return setTimeout(() => {
	// 	return true;
	// }, 600);
	const tlContainer = gsap.timeline();
	const container = data.current.container;

	tlContainer.to(container, {
		alpha: 1,
		duration: 0.6,
		clearProps: 'all',
		ease: 'Power2.easeOut',
		onComplete: () => {
			container.style.opacity = 0;
		},
	});
};

export default animationLeave;
