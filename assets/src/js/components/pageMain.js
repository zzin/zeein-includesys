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
gsap.registerPlugin(ScrollTrigger);
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay]);

const initMain = () => {
	const body = document.body;
	const root = document.getElementsByTagName('html')[0];
	const whatCards = document.querySelectorAll('.card-wrap');
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
};

export default initMain;
