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

		imagesLoaded(component, { background: true }, () => {
			msnry.layout();
		});

		// imagesLoaded(component).on('progress', (instance, image) => {
		// 	const targetParnetNode = image.img.parentNode;
		// 	msnry.layout();
		// 	setInterval(() => {
		// 		targetParnetNode.classList.add('is-visible');
		// 		window.dispatchEvent(new Event('resize'));
		// 	}, 500);
		// });

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
									});

									// eslint-disable-next-line no-undef
									// imagesLoaded(component).on('progress', (instance, image) => {
									// 	const targetParnetNode = image.img.parentNode;
									// 	msnry.layout();
									// 	setTimeout(() => {
									// 		targetParnetNode.classList.add('is-visible');
									// 	}, 500);
									// });

									// eslint-disable-next-line no-undef
									frontendAjaxObject.currentPage++;
								}
								if (
									// eslint-disable-next-line no-undef
									frontendAjaxObject.currentPage >= frontendAjaxObject.maxPage
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
