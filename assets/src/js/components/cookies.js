const initCookie = () => {
	const cookieWrap = document.getElementById('cookie-wrap');
	const btnCookies = document.getElementById('weUseCookies');
	const setCookie = (cookieName, value, days) => {
		const exdate = new Date();
		exdate.setDate(exdate.getDate() + days);
		const cookieValue =
			escape(value) +
			(days === null ? '' : '; expires=' + exdate.toUTCString());
		document.cookie = cookieName + '=' + cookieValue;
	};

	const getCokie = (cookieName) => {
		let x, y;
		const val = document.cookie.split(';');
		for (let i = 0; i < val.length; i++) {
			x = val[i].substr(0, val[i].indexOf('='));
			y = val[i].substr(val[i].indexOf('=') + 1);
			x = x.replace(/^\s+|\s+$/g, ''); // 앞과 뒤의 공백 제거하기
			if (x === cookieName) {
				return unescape(y);
			}
		}
	};
	if (!getCokie('weUseCookies')) {
		btnCookies.addEventListener('click', () => {
			console.log('setCookie');
			setCookie('weUseCookies', '1', '1');
			cookieWrap.classList.add('use-cookie');
		});
	} else {
		cookieWrap.classList.add('use-cookie');
	}
};
export default initCookie;
