import { gsap, Power0, Power1, Power2, Power3, Power4, Back } from 'gsap';
import loading from './loading';

const animationEnter = (container) => {
	// console.log(container);
	setTimeout(() => {
		// window.scrollTo(0, 0);
		return loading.loadingOut();
	}, 200);
	// return gsap.from(container, {
	// 	autoAlpha: 0,
	// 	duration: 1,
	// 	clearProps: 'all',
	// 	ease: 'Power2.easeOut',
	// });
};

export default animationEnter;
