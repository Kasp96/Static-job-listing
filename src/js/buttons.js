const popupContainer = document.querySelector('.popup');
const removeAllBtn = document.querySelector('.popup__clear-btn');
let filtersArray = [];

const checkPopup = () => {
	filtersArray.length === 0
		? (popupContainer.style.display = 'none')
		: (popupContainer.style.display = 'flex');
};

export const checkFilters = () => {
	const jobsBoxes = document.querySelectorAll('.jobs__box');

	jobsBoxes.forEach((job) => {
		const buttons = job.querySelectorAll('.jobs__button');
		const buttonNames = Array.from(buttons).map((btn) => btn.innerText.trim());
		const showJob = filtersArray.every((tag) => buttonNames.includes(tag));
		job.style.display = showJob ? 'flex' : 'none';
	});
};

export const roleAndLevel = (obj, tagsContainer) => {
	const tagsArray = [obj.role, obj.level];
	tagsArray.forEach((tag) => {
		const newTag = document.createElement('button');
		newTag.classList.add('jobs__button');
		newTag.innerText = tag;
		tagsContainer.appendChild(newTag);
	});
};

export const toolsAndLang = (obj, tagsContainer) => {
	obj.languages.forEach((lang) => {
		const newLang = document.createElement('button');
		newLang.classList.add('jobs__button');
		newLang.innerText = lang;
		tagsContainer.appendChild(newLang);
	});
	obj.tools.forEach((tool) => {
		const newTool = document.createElement('button');
		newTool.classList.add('jobs__button');
		newTool.innerText = tool;
		tagsContainer.appendChild(newTool);
	});
};

export const createNewFilter = (tagsContainer, popupBox) => {
	const allTags = tagsContainer.querySelectorAll('.jobs__button');
	const tagsArray = Array.from(allTags);
	checkFilters();
	tagsArray.forEach((tag) => {
		tag.addEventListener('click', () => {
			const tagName = tag.innerText;

			if (filtersArray.includes(tagName)) {
				return;
			} else {
				const newTagBox = document.createElement('div');
				newTagBox.classList.add('tag-box', 'd-flex', 'align-items-center');
				newTagBox.innerHTML = `<button class="popup__button">${tagName}
                        </button>
                        <div class="popup__img-box d-flex align-items-center">
                            <img class="popup__close-mark" src="../dist/img/icon-remove.svg" alt="close mark">
                        </div>`;

				popupBox.appendChild(newTagBox);
				filtersArray.push(tagName);
				checkFilters();
				checkPopup(popupContainer);

				const closeBtn = newTagBox.querySelector('.popup__img-box');
				closeBtn.addEventListener('click', () => {
					const removeBtn = closeBtn.parentElement;
					removeBtn.remove();
					const index = filtersArray.indexOf(tagName);

					if (index > -1) {
						filtersArray.splice(index, 1);
					}
					checkFilters();
					checkPopup(popupContainer);
				});
			}
		});
	});
};

const removeAllFilters = (e) => {
	filtersArray.length = 0;
	const allFilters = e.target.previousElementSibling;
	allFilters.innerHTML = '';
	checkPopup(popupContainer);
	checkFilters(popupContainer);
};

export const buttonNew =
	'<button class="jobs__header__badge jobs__header__badge--new">new!</button>';
export const buttonFeature =
	'<button class="jobs__header__badge jobs__header__badge--featured">featured</button>';

removeAllBtn.addEventListener('click', removeAllFilters);
