import SearchInput from "./modal/SearchInput.js";
import SearchResults from "./modal/SearchResults.js";
import SearchHistory from "./modal/SearchHistory.js";

export default class App {
	constructor({
		keyword,
		keywordHistory,
		$searchButton,
		$modal,
		$modalClose,
		$searchInput,
		$searchInputButton,
		$searchResults,
		$searchHistory,
	}) {
		this.keyword = keyword;
		this.keywordHistory = keywordHistory;
		this.$searchButton = $searchButton;
		this.$modal = $modal;
		this.$modalClose = $modalClose;
		this.$searchInput = $searchInput;
		this.$searchInputButton = $searchInputButton;
		this.$searchResults = $searchResults;
		this.$searchHistory = $searchHistory;

		const onModalShow = () => {
			$modal.classList.add("open");
		};

		const onModalClose = () => {
			$modal.classList.remove("open");
		};

		this.searchInput = new SearchInput({
			$searchInput,
			$searchInputButton,
			onInput: async (text) => {
        this.setState(text);
			},
		});
		this.searchResults = new SearchResults({ keyword, $searchResults });

		this.searchHistory = new SearchHistory({
			keywordHistory,
			$searchHistory,
		});
		this.$searchButton.addEventListener("click", onModalShow);
		this.$modalClose.addEventListener("click", onModalClose);
  }
  
  setState(nextKeyword) {
		this.keyword = nextKeyword;
		this.searchHistory.setState(this.keyword);
    this.searchResults.setState(this.keyword);
  }

}
