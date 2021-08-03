export default class SearchInput {
	constructor({ $searchInput, $searchInputButton, onInput }) {
		this.$searchInput = $searchInput;
		this.$searchInputButton = $searchInputButton;

		this.$searchInput.addEventListener("keypress", (e) => {
			if (e.key === "Enter") {
				e.preventDefault();
				if (e.target.value === "") return;
				// console.log(e);
				onInput(e.target.value);
				e.target.value = "";
			}
		});
		this.$searchInputButton.addEventListener("click", () => {
			// console.log(this.$searchInput.value)
			if (this.$searchInput.value === "") return;
			onInput(this.$searchInput.value);
			this.$searchInput.value = "";
		});
	}
}
