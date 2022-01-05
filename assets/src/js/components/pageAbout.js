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
			center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
			level: 4, // 지도의 확대 레벨
		};

		// 지도를 생성합니다
		const map = new kakao.maps.Map(mapContainer, mapOption);

		// 지도 줌 막기
		map.setZoomable(false);

		// 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
		const mapTypeControl = new kakao.maps.MapTypeControl();

		// 지도에 컨트롤을 추가해야 지도위에 표시됩니다
		// kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
		map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

		// 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
		const zoomControl = new kakao.maps.ZoomControl();
		map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

		// 지도에 교통정보를 표시하도록 지도타입을 추가합니다
		map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);

		// 주소-좌표 변환 객체를 생성합니다
		const geocoder = new kakao.maps.services.Geocoder();

		let marker, content, customOverlay;
		// 주소로 좌표를 검색합니다
		geocoder.addressSearch(
			'서울 마포구 월드컵북로8길 21 인클루드빌딩 3층',
			function (result, status) {
				// 정상적으로 검색이 완료됐으면
				if (status === kakao.maps.services.Status.OK) {
					const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
					// 결과값으로 받은 위치를 마커로 표시합니다
					// marker = new kakao.maps.Marker({
					// 	map,
					// 	position: coords,
					// });
					content =
						'<div class ="bg-white text-xs py-2 px-5 rounded-sm bg-opacity-90"><span class="left"></span><span class="center">인클루드시스</span><span class="right"></span></div>';

					// 커스텀 오버레이를 생성합니다
					customOverlay = new kakao.maps.CustomOverlay({
						content,
						position: coords,
					});

					// 커스텀 오버레이를 지도에 표시합니다
					customOverlay.setMap(map);

					// 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
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
