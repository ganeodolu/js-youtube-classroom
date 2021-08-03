import App from './App.js';

new App({
	keyword: '',
	keywordHistory: [],
	$searchButton: document.querySelector("#search-button"),
	$modal: document.querySelector(".modal"),
	$modalClose: document.querySelector(".modal-close"),
  $searchInput: document.querySelector(".searchInput"),
	$searchInputButton: document.querySelector('.searchInputButton'),
	$searchResults: document.querySelector('#modal-results'),
	$searchHistory: document.querySelector('.mt-2'),
});
