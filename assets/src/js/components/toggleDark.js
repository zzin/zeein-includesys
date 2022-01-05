(function () {
	// document.documentElement.classList.remove('dark');
	const checkbox = document.getElementById('toggleTheme');
	if (localStorage.getItem('theme') === 'dark') {
		// 	document.documentElement.classList.add('dark');
		checkbox.checked = true;
	}
	const toggleDark = document.querySelector('.toggle-dark');
	const dot = document.querySelector('.dot');
	toggleDark.classList.remove('opacity-0');
	setInterval(() => {
		dot.classList.add('transition');
	}, 10);

	// console.log(toggleDark);

	const html = document.querySelector('html');
	const toggleDarkMode = (event) => {
		event.stopPropagation();
		// 	? html.classList.add('dark')
		// 	: html.classList.remove('dark');
		if (checkbox.checked) {
			html.classList.add('dark');
			localStorage.setItem('theme', 'dark');
		} else {
			html.classList.remove('dark');
			localStorage.setItem('theme', '');
		}
		// console.log(localStorage.getItem('theme'));
		// console.log(localStorage);
	};
	// toggleDarkMode();
	checkbox.addEventListener('click', toggleDarkMode);
})();
