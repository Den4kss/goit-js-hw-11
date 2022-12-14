export default function MakeCards(arrCards) {
  return arrCards
    .map(card => {
      return `<div class="photo-card">
          <a class="gallery__item" href="${card.largeImageURL}"><img src="${card.webformatURL}" alt=""${card.tags}" class="img-card gallery__image" /></a>
          <div class="info-card">
            <p class="info-item">
              <b>Likes: ${card.likes}</b>
            </p>
            <p class="info-item">
              <b>Views: ${card.views}</b>
            </p>
            <p class="info-item">
              <b>Comments: ${card.comments}</b>
            </p>
            <p class="info-item">
              <b>Downloads: ${card.downloads}</b>
            </p>
          </div>
        </div>`;
    })
    .join('');
}
