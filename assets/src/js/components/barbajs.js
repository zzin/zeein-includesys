import barba from '@barba/core';
import {
	gsap,
	Power0,
	Power1,
	Power2,
	Power3,
	Power4,
	Back,
	ScrollToPlugin,
	// eslint-disable-next-line import/named
} from 'gsap/all';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);
import initNavigation from './navigation';
import swiper from './swiper';
import masonry from './masonry';
import initForm from './form';
import scroll from './scroll';
import loading from './loading';
import header from './header';
import initMain from './pageMain';

const body = document.body;
const menuToggle = document.querySelector('.menu-toggle');

const tl = gsap.timeline({ defaults: { ease: Power3.inOut } });

const leaveAnimation = (data) => {
	return new Promise((resolve) => {
		tl.to(data.current.container, {
			y: -50,
			duration: 1.5,
			autoAlpha: 0,
			// onComplete: () => {
			// 	resolve();
			// 	console.log('leaveAnimation complete');
			// },
		}).then();
		resolve();
	});
};

// const leaveAnimation = (data) => {
// 	return new Promise((resolve) => {
// 		tl.to(data.current.container, {
// 			y: -50,
// 			duration: 1.5,
// 			autoAlpha: 0,
// 			onComplete: () => {
// 				resolve();
// 				console.log('leaveAnimation complete');
// 			},
// 		});
// 	});
// };
// const enterAnimation = (data) => {
// 	return new Promise((resolve) => {
// 		tl.from(data.next.container, {
// 			y: 50,
// 			duration: 1.5,
// 			autoAlpha: 0,
// 			onComplete: () => {
// 				resolve();
// 				console.log('enterAnimation complete');
// 			},
// 		});
// 	});
// };

const initJs = (dataNamespace) => {
	if (!dataNamespace)
		dataNamespace = document.getElementById('primary').dataset.barbaNamespace;
	if (dataNamespace === 'page-portfolio') {
		masonry();
	} else if (dataNamespace === 'page-contact') {
		initForm();
	} else if (dataNamespace === 'home') {
		initMain();
	}
	// console.log(dataNamespace);
	setTimeout(() => {
		window.dispatchEvent(new Event('resize'));
	}, 500);
};

const initCursor = () => {
	const links = document.querySelectorAll(
		'.site-logo, .menu-link, .custom-link, .menu-toggle, .swiper-pagination-bullet, .swiper-button-next, .swiper-button-prev, .grid-item, .form-control, .custom-label, .selectric-wrapper, .form-file, label, .button, .modal-backdrop, .close'
	);

	const cbk = (e) => {
		if (e.currentTarget.href === window.location.href) {
			e.preventDefault();
			e.stopPropagation();
		}
	};

	Array.from(links).forEach((el) => {
		el.addEventListener('click', cbk);
	});
};

barba.hooks.after((data) => {
	const parser = new DOMParser();
	const htmlDoc = parser.parseFromString(
		data.next.html.replace(
			/(<\/?)body( .+?)?>/gi,
			'$1notbody$2>',
			data.next.html
		),
		'text/html'
	);
	const bodyClasses = htmlDoc.querySelector('notbody').getAttribute('class');
	body.setAttribute('class', bodyClasses);

	const navigation = data.next.html.match(
		/<nav\sid="site-navigation"[^>]*>[.|\n]*((.|\n)*)[.|\n]*<\/nav>/
	)[1];
	const siteNavigation = document.getElementById('site-navigation');
	siteNavigation.innerHTML = navigation;
	// console.log('hook >>>>>>>>>>>>>>>>>>>>>> after');
	initCursor();
	initNavigation();
	swiper();
	scroll();
	header();

	const dataNamespace = data.next.namespace;
	initJs(dataNamespace);
});

const animationEnter = (container) => {
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

const animationLeave = (container) => {
	loading.loadingIn();
	if (menuToggle.getAttribute('aria-expanded')) menuToggle.click();
	// if (menuToggle.getAttribute('aria-expanded')) {
	// 	setTimeout(() => {
	// 		menuToggle.click();
	// 	}, 200);
	// }
	const tlContainer = gsap.timeline();
	return (
		// setTimeout(() => {
		// 	true
		// }, 500);
		tlContainer.to(container, {
			alpha: 1,
			duration: 0.6,
			clearProps: 'all',
			ease: 'Power2.easeOut',
			onComplete: () => {
				container.style.opacity = 0;
			},
		})
	);
};

const effHeader = () => {
	ScrollTrigger.create({
		trigger: body,
		start: 'top+=100 top',
		end: 'bottom top',
		toggleClass: { targets: body, className: 'is-active' },
		// markers: true,
	});
};

barba.init({
	sync: false,
	transitions: [
		{
			once({ next }) {
				animationEnter(next.container);
			},
			leave: ({ current }) => animationLeave(current.container),
			enter({ next }) {
				animationEnter(next.container);
			},
			// after({ next }) {
			// 	animationEnter(next.container);
			// },
		},
	],
});

window.addEventListener('DOMContentLoaded', (event) => {
	initCursor();
	initNavigation();
	effHeader();
	swiper();
	// masonry();
	// initForm();
	scroll();
	header();

	initJs();
});
