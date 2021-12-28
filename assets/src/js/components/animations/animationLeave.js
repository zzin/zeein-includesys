import { gsap, Power0, Power1, Power2, Power3, Power4, Back } from 'gsap';
import loading from './loading';

const animationLeave = (container) => {
	const menuToggle = document.querySelector('.menu-toggle');
	const tl = gsap.timeline();
	// console.log(currentContainer, nextContainer);
	// const currentContainer = data.current.container;
	// const nextContainer = data.next.container;
	// console.log(
	// 	data,
	// 	currentContainer,
	// 	nextContainer,
	// 	data.current.namespace,
	// 	data.next.namespace,
	// 	data.trigger,
	// 	data.next.container
	// );

	if (menuToggle.getAttribute('aria-expanded')) menuToggle.click();

	// console.log(data, data.current.container);
	loading.loadingIn();

	tl.to(container, {
		alpha: 1,
		duration: 0.6,
		clearProps: 'all',
		ease: 'Power2.easeOut',
		onComplete: () => {
			container.style.opacity = 0;
		},
	});
	return tl;
};

export default animationLeave;
