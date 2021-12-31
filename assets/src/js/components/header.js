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

const header = () => {
	const title = document.querySelector('.entry-title');
	// const entryHeader = document.querySelector('.entry-header');

	if (title) {
		gsap.set('.entry-title div', { yPercent: -104, autoAlpha: 1 });
		const tl = gsap.timeline();
		tl.to('.entry-title div', {
			duration: 1,
			yPercent: 0,
			stagger: 0.05,
			ease: Expo.easeInOut,
			delay: 0.25,
		}).to('.entry-title div:not([data-char="."])', {
			duration: 1,
			yPercent: 104,
			stagger: 0.1,
			ease: Expo.easeInOut,
		});

		// const splitTitle = new SplitText(title, { type: 'words, chars' }),
		// 	targets = splitTitle.chars;
		// const tl = gsap.timeline();
		// tl.delay(0.75).from(targets, {
		// 	autoAlpha: 0,
		// 	y: 30,
		// 	duration: 0.85,
		// 	stagger: 0.0325,
		// 	ease: Back.easeOut.config(3),
		// });
		// const flip = () => {
		// 	const state = Flip.getState('.top-title, .entry-title');
		// 	topTitle.classList.toggle('active');
		// 	title.classList.toggle('active');
		// 	Flip.from(state, {
		// 		duration: 0.6,
		// 		fade: true,
		// 		absolute: true,
		// 		toggleClass: 'flipping',
		// 		ease: 'power1.inOut',
		// 	});
		// };
		// ScrollTrigger.create({
		// 	trigger: entryHeader,
		// 	start: 'top top',
		// 	onEnter: flip,
		// 	onLeaveBack: flip,
		// 	markers: true,
		// });
	}
};
export default header;
