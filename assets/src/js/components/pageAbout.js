import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay]);

const initAboutUs = () => {
	const conponents = document.querySelectorAll(
		'[data-component="swiper-history"]'
	);
	const initSwiper = (el, index) => {
		const targetSwiper = el;
		const btnPrev = el.querySelector('.swiper-prev');
		const btnNext = el.querySelector('.swiper-next');
		targetSwiper.classList.add('s' + index);
		btnPrev.classList.add('l' + index);
		btnNext.classList.add('r' + index);

		const sw = new Swiper(targetSwiper, {
			// slidesPerView: 1,
			slidesPerView: 'auto',
			// centeredSlides: true,
			navigation: {
				nextEl: '.r' + index,
				prevEl: '.l' + index,
			},
		});
	};
	Array.from(conponents).forEach((el, index) => {
		new initSwiper(el, index);
	});
};
export default initAboutUs;
