import gsap from 'gsap';
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay]);

const swiper = () => {
	const conponents = document.querySelectorAll('[data-component="swiper"]');
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
			centeredSlides: true,
			navigation: {
				nextEl: '.r' + index,
				prevEl: '.l' + index,
			},
			pagination: {
				el: pagination,
				type: 'progressbar',
			},
		});
	};
	Array.from(conponents).forEach((el, index) => {
		new initSwiper(el, index);
	});

	// const cursor = document.querySelector('.cursor');
	// const cursorFollow = document.querySelector('.cursor-follow');
	// const bgWrap = document.querySelector('.bg-wrap');
	// const numBaseCenter = window.innerWidth / 2;
	// let flagBg = false;
	// const moveCircle = (e) => {
	// 	gsap.to(cursor, {
	// 		duration: 0.3,
	// 		x: e.clientX,
	// 		y: e.clientY,
	// 	});
	// 	gsap.to(cursorFollow, {
	// 		duration: 0.7,
	// 		x: e.clientX,
	// 		y: e.clientY,
	// 	});
	// 	if (flagBg) {
	// 		if (numBaseCenter > e.clientX) {
	// 			console.log('left');
	// 			cursor.classList.add('is-arrow-left');
	// 			cursor.classList.remove('is-arrow-right');
	// 		} else {
	// 			console.log('right');
	// 			cursor.classList.add('is-arrow-right');
	// 			cursor.classList.remove('is-arrow-left');
	// 		}
	// 	} else {
	// 		cursor.classList.remove('is-arrow-right', 'is-arrow-left');
	// 	}
	// };
	// window.addEventListener('mousemove', moveCircle);

	// const mouseEnter = (e) => {
	// 	flagBg = true;
	// 	console.log(window.innerWidth / 2);
	// };
	// const mouseLeave = (e) => {
	// 	flagBg = false;
	// };
	// bgWrap.addEventListener('mouseenter', mouseEnter);
	// bgWrap.addEventListener('mouseleave', mouseLeave);
};

export default swiper;
