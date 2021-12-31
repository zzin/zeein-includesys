import gsap, {
	Power0,
	Power1,
	Power2,
	Power3,
	Power4,
	Elastic,
	Back,
	Expo,
} from 'gsap';
import header from '../header';
const { default: SplitText } = require('gsap/SplitText');
gsap.registerPlugin(SplitText);
// import GSDevTools from 'gsap/GSDevTools';
// gsap.registerPlugin(GSDevTools);

const loadingWrap = document.getElementById('loading-wrap');
const loadingTitle = loadingWrap.querySelector('.loading-title');
const tl = gsap.timeline();
const loadingIn = () => {
	loadingTitle.innerHTML = '';
	tl.set(loadingWrap, { y: '120%' }).to(loadingWrap, {
		duration: 0.5,
		y: 0,
		ease: Power2.easeIn,
	});
};
const loadingBeforeOut = (title) => {
	loadingTitle.innerHTML = 'LOADING';
	const splitTitle = new SplitText(loadingTitle, { type: 'words, chars' }),
		targets = splitTitle.chars;
	tl.from(targets, {
		autoAlpha: 0,
		y: 10,
		duration: 0.425,
		stagger: 0.025,
		// ease: Expo.easeInOut,
		ease: Back.easeOut.config(2),
	});
	// tl.from(loadingTitle, {
	// 	duration: 1,
	// 	autoAlpha: 0,
	// });
};

const loadingOut = () => {
	tl.to(
		loadingWrap,
		{
			duration: 1,
			y: '-120%',
			ease: Power2.easeOut,
			onStart: header,
		},
		'+=.5'
	);
};
// const loadingIn = () => {
// 	tl.set(loadingWrap, {
// 		borderTopLeftRadius: '80% 100px',
// 		borderTopRightRadius: '80% 100px',
// 	})
// 		.to(loadingWrap, {
// 			duration: 0.3,
// 			y: '0',
// 		})
// 		.to(
// 			loadingWrap,
// 			{
// 				borderTopLeftRadius: '50% 180px',
// 				borderTopRightRadius: '50% 180px',
// 				duration: 0.2,
// 				ease: Power4.easeOut,
// 			},
// 			'<'
// 		)
// 		.to(
// 			loadingWrap,
// 			{
// 				borderTopLeftRadius: '80% 120px',
// 				borderTopRightRadius: '80% 120px',
// 				duration: 0.2,
// 				ease: Power4.easeOut,
// 			},
// 			'<'
// 		)
// 		.to(loadingWrap, {
// 			borderTopLeftRadius: '80% 0px',
// 			borderTopRightRadius: '80% 0px',
// 			duration: 0.4,
// 			ease: Power1.easeOut,
// 		});
// 	// GSDevTools.create({ paused: true });
// };
// const loadingOut = () => {
// 	tl.to(loadingWrap, {
// 		duration: 0.3,
// 		borderTopLeftRadius: '80% 50px',
// 		borderTopRightRadius: '80% 50px',
// 		ease: Power4.easeIn,
// 	}).to(loadingWrap, {
// 		y: '100%',
// 		duration: 0.5,
// 	});
// };

export default { loadingIn, loadingOut, loadingBeforeOut };
