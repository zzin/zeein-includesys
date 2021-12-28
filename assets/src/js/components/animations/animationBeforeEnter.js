import { gsap, Power0, Power1, Power2, Power3, Power4, Back } from 'gsap';
import loading from './loading';

const animationBeforeEnter = (data) => {
	let sendTitle = 'Home';
	switch (data.next.namespace) {
		case 'page-about-us':
			sendTitle = 'About US';
			break;
		case 'page-portfolio':
			sendTitle = 'Portfolio';
			break;
		case 'page-contact':
			sendTitle = 'Contact';
			break;
	}
	loading.loadingBeforeOut(sendTitle);
};

export default animationBeforeEnter;
