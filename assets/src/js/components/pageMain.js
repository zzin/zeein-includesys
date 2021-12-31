import gsap, {
	Power0,
	Power1,
	Power2,
	Power3,
	Power4,
	Back,
	Linear,
	Elastic,
} from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import TextPlugin from 'gsap/TextPlugin';
import ScrambleTextPlugin from 'gsap/ScrambleTextPlugin';
const { default: SplitText } = require('gsap/SplitText');

gsap.registerPlugin(ScrollTrigger, TextPlugin, ScrambleTextPlugin, SplitText);
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay]);

const initMain = () => {
	const body = document.body;
	const root = document.getElementsByTagName('html')[0];
	const whatCards = document.querySelectorAll('.card-wrap');

	const titleWraps = document.querySelectorAll('.title-wrap');
	Array.from(titleWraps).forEach((el) => {
		const titleH2 = el.getElementsByTagName('h2')[0];
		const titleP = el.getElementsByTagName('p')[0];
		const spliteText = new SplitText(titleH2, { type: 'words, chars' }),
			targets = spliteText.chars;
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: titleH2,
				start: 'top bottom-=50px',
				toggleActions: 'play pause resume reset',
				// markers: true,
			},
		});
		tl.from(targets, {
			opacity: 0,
			y: 40,
			duration: 0.75,
			stagger: 0.0525,
			ease: Back.easeOut.config(2),
		}).from(
			titleP,
			{
				opacity: 0,
				x: 10,
				duration: 0.85,
				ease: Power2.easeOut,
			},
			'-=.5'
		);
	});

	const initHero = () => {
		const changeString = () => {
			const word1 = document.getElementById('word-1');
			const word2 = document.getElementById('word-2');
			const delayTime = 4;
			const termTime = '+=4';
			const backTime = '-=1';
			const durationTime = 1.4;
			// your trusted development partner
			// your system integration partner
			// your web service partner
			// choose the right development partner for your web project.
			// looking for web development services?
			// how to choose a web development partner
			//
			const tl = gsap.timeline({
				repeat: -1,
				repeatDelay: delayTime,
				defaults: { duration: durationTime, ease: 'none' },
			});
			tl.to(word1, { scrambleText: { text: 'trusted' } })
				.to(word2, { scrambleText: { text: 'development' } }, backTime)
				.to(word1, { scrambleText: { text: 'system' } }, termTime)
				.to(word2, { scrambleText: { text: 'integration' } }, backTime)
				.to(word1, { scrambleText: { text: 'web' } }, termTime)
				.to(word2, { scrambleText: { text: 'service' } }, backTime)
				.to(word1, { scrambleText: { text: 'technology' } }, termTime)
				.to(word2, { scrambleText: { text: 'bisiness' } }, backTime);
		};

		const sloganTitle = document.querySelector('.slogan-title');
		const sloganDesc = document.querySelector('.slogan-desc');
		const sloganTl = gsap.timeline({ onComplete: changeString });
		sloganTl
			.from(
				sloganTitle,
				{
					y: 40,
					duration: 1,
					autoAlpha: 0,
					ease: Power2.easeOut,
				},
				'+=1'
			)
			.from(
				sloganDesc,
				{ y: 20, duration: 0.85, autoAlpha: 0, ease: Power2.easeOut },
				'<50%'
			);
	};
	initHero();

	Array.from(whatCards).forEach((el) => {
		const gridTitle = el.querySelector('.grid-title');
		const gridContent = el.querySelector('.grid-content');
		const gridContentTitle = el.querySelector('.grid-content-title');
		const gridImg = el.querySelector('.grid-img');
		const tl = gsap.timeline({ paused: true });
		tl.set(gridContent, { y: 50, scale: 1.2 })
			.set(gridContentTitle, { x: -10, autoAlpha: 0 })
			.to(gridTitle, {
				x: 20,
				autoAlpha: 0,
				duration: 0.5,
				ease: Power2.easeOut,
			})
			.to(
				gridImg,
				{
					scale: 1.05,
					duration: 0.5,
					ease: Power3.easeOut,
				},
				'<'
			)
			.to(
				gridContent,
				{
					y: 30,
					scale: 1,
					autoAlpha: 1,
					duration: 0.325,
					ease: Power2.easeOut,
				},
				'<'
			)
			.to(
				gridContentTitle,
				{
					x: 0,
					autoAlpha: 1,
					duration: 0.5,
					ease: Power1.easeInOut,
				},
				'-=0.5'
			);
		el.animation = tl;
		el.addEventListener('mouseenter', () => {
			if (root.classList.contains('size-pc')) {
				el.animation.play();
			}
			// console.log('over');
		});
		el.addEventListener('mouseleave', () => {
			if (root.classList.contains('size-pc')) {
				el.animation.reverse();
			}
			// console.log('out');
		});
	});

	const conponents = document.querySelectorAll(
		'[data-component="swiper-portfolio"]'
	);
	const initSwiper = (el, index) => {
		const targetSwiper = el;
		const btnPrev = el.querySelector('.swiper-prev');
		const btnNext = el.querySelector('.swiper-next');
		const pagination = el.querySelector('.swiper-pagination');
		targetSwiper.classList.add('s' + index);
		btnPrev.classList.add('l' + index);
		btnNext.classList.add('r' + index);
		pagination.classList.add('p' + index);

		const sw = new Swiper(targetSwiper, {
			// slidesPerView: 1,
			slidesPerView: 'auto',
			// centeredSlides: true,
			navigation: {
				nextEl: '.r' + index,
				prevEl: '.l' + index,
			},
			pagination: {
				el: pagination,
				clickable: true,
			},
		});
	};
	Array.from(conponents).forEach((el, index) => {
		new initSwiper(el, index);
	});

	const cardWrap = gsap.utils.toArray('.card-wrap');
	Array.from(cardWrap).forEach((el, index) => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				start: 'top+=' + index * 20 + 'px bottom',
				toggleActions: 'play none none reverse',
				// markers: true,
			},
		});
		tl.from(el.querySelector('.relative'), {
			yPercent: 20,
			autoAlpha: 0,
		});
	});

	// const tlCard = gsap.timeline({
	// 	scrollTrigger: {
	// 		trigger: '.card-wrap',
	// 		markers: true,
	// 		toggleActions: 'play none none reverse',
	// 	},
	// });
	// tlCard.from('.card-wrap .relative', {
	// 	autoAlpha: 0,
	// 	yPercent: 20,
	// 	stagger: 0.1,
	// });

	// const cardWrapEnter = gsap.timeline(.)

	// ScrollTrigger.create({
	// 	trigger: '.card-wrap',
	// 	onEnter: () =>
	// 		gsap.from('.card-wrap .relative', {
	// 			duration: 0.65,
	// 			autoAlpha: 0,
	// 			yPercent: 20,
	// 			stagger: 0.05,
	// 			ease: Power2.easeOut,
	// 		}),
	// 	// animation: gsap.from('.card-wrap .relative', {
	// 	// 	duration: 0.65,
	// 	// 	autoAlpha: 0,
	// 	// 	yPercent: 20,
	// 	// 	stagger: 0.05,
	// 	// 	ease: Power2.easeOut,
	// 	// }),
	// 	toggleActions: 'play none none reverse',
	// 	// markers: true,
	// 	// onEnter: cardWrapEnter
	// });
	// gsap.set('.card-wrap', { yPercent: 20, autoAlpha: 0 });
	// ScrollTrigger.batch('.card-wrap', {
	// 	onEnter: (batch, triggers) =>
	// 		gsap.to(batch, {
	// 			autoAlpha: 1,
	// 			yPercent: 0,
	// 			duration: 0.25,
	// 			stagger: 0.1,
	// 			overwrite: true,
	// 			ease: Power1.easeOut,
	// 		}),
	// 	onLeaveBack: (batch, triggers) =>
	// 		gsap.set(batch, {
	// 			autoAlpha: 0,
	// 			yPercent: 20,
	// 			stagger: 0.1,
	// 			overwrite: true,
	// 		}),
	// 	markers: true,
	// });

	// const cardWraps = document.querySelectorAll('.card-wrap');
	// const CardWrapsRelative = document.querySelectorAll('.card-wrap .relative');

	// ScrollTrigger.batch('.card-wrap', {
	// 	onEnter: (elements) => {
	// 		gsap.from(elements, {
	// 			duration: 0.25,
	// 			autoAlpha: 0,
	// 			yPercent: 20,
	// 			stagger: 0.1,
	// 			ease: Power2.easeOut,
	// 			overwrite: true,
	// 		});
	// 	},
	// 	markers: true,
	// });

	// Array.from(cardWraps).forEach((el, index) => {
	// 	ScrollTrigger.create({
	// 		trigger: el,
	// 		start: 'top+=20% bottom',
	// 		// targets: el.querySelector('.relative'),
	// 		markers: true,
	// 		toggleActions: 'play none none reverse',
	// 		animation: gsap
	// 			.from(el.querySelector('.relative'), {
	// 				duration: 0.5,
	// 				autoAlpha: 0,
	// 				yPercent: 20,
	// 			})
	// 			.delay(0.125 * index),
	// 	});
	// });
};

export default initMain;
