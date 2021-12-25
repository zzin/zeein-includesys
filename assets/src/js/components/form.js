const initForm = () => {
	const formRequest = document.getElementById('formRequest');
	if (formRequest) {
		const submitButton = document.querySelector('.btn-submit');
		submitButton.addEventListener('click', (e) => {
			e.preventDefault();
			const msg = [];
			let hasRequired = false;
			let hasCheckbox = false;

			// checkbox(문의 분야)
			const checkboxes = document.getElementsByName('type[]');
			for (let i = 0; i < checkboxes.length; i++) {
				console.log(checkboxes[i].checked);
				if (checkboxes[i].checked === true) {
					hasCheckbox = true;
					break;
				}
			}
			if (!hasCheckbox) {
				msg.push('문의 분야');
			}

			for (let i = 0; i < formRequest.elements.length; i++) {
				const target = formRequest.elements[i];
				if (target.value === '' && target.hasAttribute('required')) {
					hasRequired = true;
					msg.push(target.ariaLabel);
				}
			}

			if (hasRequired) {
				const msgWrap = document.getElementById('msg-wrap');
				const ul = document.createElement('ul');
				ul.setAttribute('id', 'errorMsg');
				ul.setAttribute('class', 'p-5 bg-gray-50 mb-5 rounded-md text-red-400');
				msgWrap.innerHTML = '';
				msgWrap.appendChild(ul);

				const renderList = (element, index, arr) => {
					const li = document.createElement('li');
					li.setAttribute('class', 'item');
					ul.appendChild(li);
					li.innerHTML = li.innerHTML + element + '은(는) 반드시 입력하세요.';
				};

				msg.forEach(renderList);
				setTimeout(() => {
					msgWrap.innerHTML = '';
				}, 3000);
			}
		});
	}
};

export default initForm;
