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
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
gsap.registerPlugin(ScrollTrigger);
Swiper.use([Navigation, Pagination, Autoplay]);

gsap.registerEffect({
	name: 'counter',
	extendTimeline: true,
	defaults: {
		end: 0,
		duration: 2,
		ease: 'power1',
		increment: 1,
	},
	effect: (targets, config) => {
		const tl = gsap.timeline();
		const num = targets[0].innerText.replace(/,/g, '');
		targets[0].innerText = num;
		// console.log(targets[0].dataset.num);
		tl.to(
			targets,
			{
				duration: config.duration,
				innerText: config.end,
				modifiers: {
					innerText(innerText) {
						return gsap.utils
							.snap(config.increment, innerText)
							.toString()
							.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
					},
				},
				ease: config.ease,
			},
			0
		);
		return tl;
	},
});

const initAboutUs = () => {
	const tlCount = gsap.timeline({
		scrollTrigger: {
			trigger: '.num-up',
			// markers: true,
			toggleActions: 'play none none reset',
		},
	});
	tlCount.counter('.num-up', {
		end: (index, target) => {
			return target.dataset.num;
		},
		ease: 'power2',
	});

	const cursor = document.querySelector('.cursor');
	const radius = 18;
	const duration = 0.625;
	const moveCursor = (e) => {
		const mouseX = e.clientX,
			mouseY = e.clientY;
		const tl = gsap.timeline();
		tl.to(cursor, {
			duration,
			x: mouseX - radius,
			y: mouseY - radius,
		});
	};

	const overCursor = () => {
		const tl = gsap.timeline();
		tl.to(cursor, { duration, scale: 1, opacity: 1 });
	};

	const outCursor = () => {
		const tl = gsap.timeline();
		tl.to(cursor, { duration, scale: 0.5, opacity: 0 });
	};
	const swiperZone = document.querySelector('.swiper-zone');

	swiperZone.addEventListener('mousemove', moveCursor);
	swiperZone.addEventListener('mouseover', overCursor);
	swiperZone.addEventListener('mouseout', outCursor);

	const conponents = document.querySelectorAll(
		'[data-component="swiper-history"]'
	);
	const initSwiper = (el, index) => {
		const targetSwiper = el;
		// const btnPrev = el.querySelector('.swiper-prev');
		// const btnNext = el.querySelector('.swiper-next');
		targetSwiper.classList.add('s' + index);
		// btnPrev.classList.add('l' + index);
		// btnNext.classList.add('r' + index);

		const sw = new Swiper(targetSwiper, {
			// slidesPerView: 1,
			slidesPerView: 'auto',
			centeredSlides: true,
			// navigation: {
			// 	nextEl: '.r' + index,
			// 	prevEl: '.l' + index,
			// },
		});
	};
	Array.from(conponents).forEach((el, index) => {
		new initSwiper(el, index);
	});

	const mapContainer = document.getElementById('map');
	const { kakao } = window;
	if (mapContainer) {
		const mapOption = {
			center: new kakao.maps.LatLng(33.450701, 126.570667), // ????????? ????????????
			level: 4, // ????????? ?????? ??????
		};

		// ????????? ???????????????
		const map = new kakao.maps.Map(mapContainer, mapOption);

		// ?????? ??? ??????
		map.setZoomable(false);

		// ?????? ????????? ??????????????? ?????? ????????? ????????? ??? ?????? ???????????? ???????????? ???????????????
		const mapTypeControl = new kakao.maps.MapTypeControl();

		// ????????? ???????????? ???????????? ???????????? ???????????????
		// kakao.maps.ControlPosition??? ???????????? ????????? ????????? ??????????????? TOPRIGHT??? ????????? ?????? ???????????????
		map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

		// ?????? ?????? ????????? ????????? ??? ??????  ??? ???????????? ???????????????
		const zoomControl = new kakao.maps.ZoomControl();
		map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

		// ????????? ??????????????? ??????????????? ??????????????? ???????????????
		map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);

		// ??????-?????? ?????? ????????? ???????????????
		const geocoder = new kakao.maps.services.Geocoder();

		let marker, content, customOverlay;
		// ????????? ????????? ???????????????
		geocoder.addressSearch(
			'?????? ????????? ???????????????8??? 21 ?????????????????? 3???',
			function (result, status) {
				// ??????????????? ????????? ???????????????
				if (status === kakao.maps.services.Status.OK) {
					const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
					// ??????????????? ?????? ????????? ????????? ???????????????
					// marker = new kakao.maps.Marker({
					// 	map,
					// 	position: coords,
					// });
					content =
						'<div class ="bg-white text-xs py-2 px-5 rounded-sm bg-opacity-90"><span class="left"></span><span class="center">??????????????????</span><span class="right"></span></div>';

					// ????????? ??????????????? ???????????????
					customOverlay = new kakao.maps.CustomOverlay({
						content,
						position: coords,
					});

					// ????????? ??????????????? ????????? ???????????????
					customOverlay.setMap(map);

					// ????????? ????????? ??????????????? ?????? ????????? ??????????????????
					map.setCenter(coords);
				}
			}
		);

		window.addEventListener(
			'resize',
			() => {
				const markerPosition = customOverlay.getPosition();
				map.relayout();
				map.setCenter(markerPosition);
			},
			true
		);
	}
};
export default initAboutUs;
