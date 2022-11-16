import MakeCards from './makeCards';
const galleryRef = document.querySelector('.gallery');
const btnLoadMoreRef = document.querySelector('.load-more');

const PAGE = 1;
const PER_PAGE = 5;

export default function fetchImages(name) {
  return fetch(
    `https://pixabay.com/api/?key=31272949-a0a925fef89e853c2c9e4d673&q=${name}&image_type=photo&orientation=horizontal&safesearch=true&page=${PAGE}&per_page=${PER_PAGE}`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(({ hits }) => {
      // const cards = hits
      //   .map(card => {
      //     return `<div class="photo-card">
      //     <img src="${card.webformatURL}" alt=""${card.tags}" class="img-card" />
      //     <div class="info-card">
      //       <p class="info-item">
      //         <b>Likes: ${card.likes}</b>
      //       </p>
      //       <p class="info-item">
      //         <b>Views: ${card.views}</b>
      //       </p>
      //       <p class="info-item">
      //         <b>Comments: ${card.comments}</b>
      //       </p>
      //       <p class="info-item">
      //         <b>Downloads: ${card.downloads}</b>
      //       </p>
      //     </div>
      //   </div>`;s
      //   })
      //   .join('');
      galleryRef.insertAdjacentHTML('beforeend', MakeCards(hits));
      btnLoadMoreRef.classList.remove('visually-hidden');
    })
    .catch(error => console.log(error));
}
