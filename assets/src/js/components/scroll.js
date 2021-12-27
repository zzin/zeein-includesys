const scroll = () => {
	let lastScrollTop = 0;
	window.addEventListener('scroll', () => {
		const st = window.pageYOffset || document.documentElement.scrollTop;
		if (st > lastScrollTop) {
			// console.log('down');
		} else {
			// console.log('up');
		}
		lastScrollTop = st <= 0 ? 0 : st;
	});
};

export default scroll;
