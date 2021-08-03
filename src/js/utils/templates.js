export const SearchResultsTemplate = (results) => {
  const { pageInfo, items } = results;
  const { totalResults } = pageInfo;

  if (totalResults === 0) {
    return `
      <article>
        <div class="no-result"></div> 
        <div>검색 결과가 없습니다.</div>
      </article>
    `;
  }

	return items
		.map((item) => {
			const { id, snippet } = item;
			const { videoId } = id;
			const { title, channelId, channelTitle, publishTime } = snippet;
			const convertDate = new Date(publishTime);
			const year = convertDate.getFullYear();
			const month = convertDate.getMonth() + 1;
			const date = convertDate.getDate();

			return `
        <article class="clip">
          <div class="preview-container">
            <iframe
              width="100%"
              height="118"
              src="https://www.youtube.com/embed/${videoId}"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div class="content-container pt-2 px-1">
            <h3>${title}</h3>
            <div>
              <a
                href="https://www.youtube.com/channel/${channelId}"
                target="_blank"
                class="channel-name mt-1"
              >
                ${channelTitle}
              </a>
              <div class="meta">
                <p>${year}년 ${month}월 ${date}일</p>
              </div>
              <div class="d-flex justify-end">
                <button class="btn">⬇️ 저장</button>
              </div>
            </div>
          </div>
        </article>
    `;
		})
		.join("");
};


export const SearchHistoryTemplate = (list) => {
  return `<span class="text-gray-700">최근 검색어: </span>` + list.map((keyword) => {
    return `
      <a class="chip">${keyword}</a>
    `;
  }).join('');
}
