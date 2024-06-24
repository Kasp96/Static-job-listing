import { createComponents } from './components.min.js';

document.addEventListener('DOMContentLoaded', () => {
	const fetchAPI = () => {
		const skip = page - 1 * jobsPerPage;
		const paginatedURL = '../src/data.json?';
		const URL = '../src/data.json';

		fetch(URL)
			.then((res) => res.json())
			.then((data) => {
				data.forEach((obj) => {
					const listingID = obj.id;
					createComponents(obj, listingID);
				});
			})
			.catch((err) => console.log('error'));
	};

	fetchAPI();
});
