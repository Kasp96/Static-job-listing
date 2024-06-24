import {
	roleAndLevel,
	toolsAndLang,
	buttonNew,
	buttonFeature,
	createNewFilter,
} from './buttons.min.js';

export const createComponents = (obj, listingID, tagsContainer) => {
	const container = document.querySelector('.main-container');
	const popupBox = document.querySelector('.popup__selected-filter-box');
	//
	const newListing = document.createElement('div');
	let btnNew = buttonNew;
	let btnFeature = buttonFeature;

	if (obj.featured === true) {
		newListing.setAttribute('data-new', 'true');
	} else {
		btnFeature = '';
	}
	if (obj.new !== true) {
		btnNew = '';
	}
	newListing.id = listingID;
	newListing.classList.add(
		'jobs__box',
		'flex-column',
		'flex-md-row',
		'align-items-md-center',
		'py-5',
		'position-relative'
	);

	newListing.innerHTML = `<img class="jobs__logo" src="${obj.logo}" alt="company logo">
    <div class="jobs__offer me-md-3 me-lg-0">
      <div class="jobs__header d-flex gap-3 gap-md-2">
        <p class="jobs__company-name me-4 me-md-3 mb-0">${obj.company}</p>
        ${btnNew}
        ${btnFeature}
      </div>
      <p class="jobs__offered-job m-md-0 my-md-1 ">${obj.position}</p>
      <p class="jobs__job-offer d-flex align-items-center
        pb-1 p-md-1 m-md-0">
        <span>${obj.postedAt}</span>
        <span class="dot">&bull;</span>
        <span>${obj.contract}</span>
        <span class="dot">&bull;</span>
        <span>${obj.location}</span>
      </p>
    </div>
    <div class="jobs__tags d-flex gap-4 flex-wrap ms-md-auto">
    </div>`;

	container.appendChild(newListing);
	const tagsContainer = newListing.querySelector('.jobs__tags');
	roleAndLevel(obj, tagsContainer);
	toolsAndLang(obj, tagsContainer);

	createNewFilter(tagsContainer, popupBox);
};
