import gsap, {
	Power0,
	Power1,
	Power2,
	Power3,
	Power4,
	Back,
	Expo,
	Elastic,
} from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const initGlobally = () => {
	const logo = document.querySelector('.site-branding');
	const toggleDark = document.querySelector('.toggle-dark');
	const menuToggle = document.querySelector('.menu-toggle');
	const tl = gsap.timeline();
	tl.from(logo, {
		duration: 1,
		autoAlpha: 0,
		ease: Power1.easeOut,
	}).from(
		menuToggle,
		{
			duration: 0.5,
			autoAlpha: 0,
		},
		'<'
	);
};

export default initGlobally;
