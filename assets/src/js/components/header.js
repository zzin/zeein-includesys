import gsap, {
	Power0,
	Power1,
	Power2,
	Power3,
	Power4,
	Back,
	Elastic,
} from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Flip from 'gsap/Flip';

const { default: SplitText } = require('gsap/SplitText');
gsap.registerPlugin(ScrollTrigger, SplitText, Flip);
// gsap.registerPlugin(SplitText);

const header = () => {
	const title = document.querySelector('.entry-title');
	// const entryHeader = document.querySelector('.entry-header');

	if (title) {
		const splitTitle = new SplitText(title, { type: 'words, chars' }),
			targets = splitTitle.chars;
		const tl = gsap.timeline();
		tl.delay(0.75).from(targets, {
			autoAlpha: 0,
			y: 30,
			duration: 0.85,
			stagger: 0.0325,
			ease: Back.easeOut.config(3),
		});

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
