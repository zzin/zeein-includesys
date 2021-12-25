import enquire from 'enquire.js';

const body = document.body;
const root = document.getElementsByTagName('html')[0];

const setClass = () => {
	const winH =
		window.innerHeight ||
		document.documentElement.clientHeight ||
		document.body.clientHeight;
	const winW =
		window.innerWidth ||
		document.documentElement.clientWidth ||
		document.body.clientWidth;
	// console.log(winW);
	if (winW >= 768) {
		body.classList.remove('size-mobile');
		root.classList.remove('size-mobile');
		body.classList.add('size-pc');
		root.classList.add('size-pc');
		// console.log('pc');
	} else {
		body.classList.remove('size-pc');
		root.classList.remove('size-pc');
		body.classList.add('size-mobile');
		root.classList.add('size-mobile');
		// console.log('mobile');
	}
};

// enquire.register('screen and (min-width:768px)', function () {
// 	setClass();
// });
enquire.register('screen and (min-width:768px)', {
	match: () => {
		// console.log('pc');
		setClass();
	},
	unmatch: () => {
		// console.log('mobile');
		setClass();
	},
});

setClass();
