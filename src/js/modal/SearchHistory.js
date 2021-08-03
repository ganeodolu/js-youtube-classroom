import { SearchHistoryTemplate } from '../utils/templates.js';

export default class SearchHistory {
	constructor({ keywordHistory, $searchHistory }) {
    this.keywordHistory = keywordHistory;
    this.$searchHistory = $searchHistory;

	}

  setState(nextKeyword) {
    this.keywordHistory = [nextKeyword, ...this.keywordHistory].slice(0,3);
    this.render();
  }

  render() {
    this.$searchHistory.innerHTML = SearchHistoryTemplate(this.keywordHistory)
  }
}
