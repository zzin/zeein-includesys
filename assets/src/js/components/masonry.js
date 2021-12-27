import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';

const masonry = () => {
	const component = document.querySelector('.masonry-wrapper');

	if (component) {
		const msnry = new Masonry(component, {
			horizontalOrder: false,
			itemSelector: '.grid-item',
			columnWidth: '.grid-sizer',
			percentPosition: true,
			// transitionDuration: '0.5s',
		});

		const changeClass = () => {
			const preLoadingPortfolios = document.querySelectorAll(
				'.pre-loading-portfolio'
			);
			Array.from(preLoadingPortfolios).forEach((el) => {
				el.classList.add('is-visible');
			});
		};

		imagesLoaded(component, { background: true }, () => {
			msnry.layout();
			// eslint-disable-next-line no-undef
			frontendAjaxObject.currentPage = 1;

			const preLoadingPortfolios = document.querySelectorAll(
				'.pre-loading-portfolio'
			);
			changeClass();
		});

		const loadmore = () => {
			let loading = false,
				hasPost = true;
			const btnLoadMore = document.getElementById('button-load-more');
			if (btnLoadMore) {
				btnLoadMore.addEventListener('click', () => {
					if (!loading) {
						const data = {
							action: 'loadmore',
							// eslint-disable-next-line no-undef
							query: frontendAjaxObject.posts,
							// eslint-disable-next-line no-undef
							page: frontendAjaxObject.currentPage,
						};
						$.ajax({
							// eslint-disable-next-line no-undef
							url: frontendAjaxObject.ajaxurl,
							data,
							type: 'POST',
							beforeSend: (xhr) => {
								loading = true;
							},
							success: (rtn) => {
								loading = false;
								// console.log(rtn);
								if (rtn.length > 0) {
									// console.log('rtn length has');
									component.insertAdjacentHTML('beforeend', rtn);
									msnry.reloadItems();

									imagesLoaded(component, { background: true }, () => {
										msnry.layout();
										setTimeout(() => {
											changeClass();
										}, 500);
									});
								}
								// eslint-disable-next-line no-undef
								frontendAjaxObject.currentPage++;
								if (
									// eslint-disable-next-line no-undef
									frontendAjaxObject.currentPage >=
									// eslint-disable-next-line no-undef
									frontendAjaxObject.maxPage * 1
								) {
									btnLoadMore.remove();
									hasPost = false;
								}
							},
							error: (request, status, error) => {
								console.log(
									status +
										' / code = ' +
										request.status +
										' message = ' +
										request.responseText +
										' error = ' +
										error
								);
							},
						});
					}
				});

				window.addEventListener('scroll', () => {
					const footer = document.getElementById('colophon');
					const windowTop = window.pageYOffset;
					const windowHeight = window.innerHeight;
					const footerHeight = footer.offsetHeight;
					const documentHeight = document.body.offsetHeight;
					// console.log(windowTop, documentHeight - windowHeight - footerHeight);
					if (
						windowTop >
						documentHeight - windowHeight - footerHeight - windowHeight / 2
					) {
						if (hasPost && !loading) btnLoadMore.click();
					}
				});
			}
		};
		loadmore();
	}
};

export default masonry;
