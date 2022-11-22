import axios from 'axios';
import MakeCards from './makeCards';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const galleryRef = document.querySelector('.gallery');
const btnLoadRef = document.querySelector('.load-more');
const URL = 'https://pixabay.com/api/';
const KEY = '31272949-a0a925fef89e853c2c9e4d673';
const PER_PAGE = 40;

export default async function fetchImages(name, PAGE) {
  try {
    const { data } = await axios.get(
      URL,
      // `${URL}?key=${KEY}&q=${name}&image_type=photo&orientation=horizontal&safesearch=true&page=${PAGE}&per_page=${PER_PAGE}`,
      {
        params: {
          key: KEY,
          q: name,
          image_type: 'photo',
          orientation: 'horizontal',
          safesearch: true,
          page: PAGE,
          per_page: PER_PAGE,
        },
      }
    );
    galleryRef.insertAdjacentHTML('beforeend', MakeCards(data.hits));
    btnLoadRef.classList.remove('visually-hidden');

    if (data.totalHits === 0) {
      btnLoadRef.classList.add('visually-hidden');
      Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );
    } else if (data.totalHits < PAGE * PER_PAGE) {
      btnLoadRef.classList.add('visually-hidden');
      Notify.info("We're sorry, but you've reached the end of search results.");
    }
  } catch (error) {
    return console.log(error);
  }
}

galleryRef.addEventListener('click', onImageClick);

const lightbox = new SimpleLightbox('.gallery a', {
  overlayOpacity: 0.8,
  navText: ['←', '→'],
  captionDelay: 250,
  captionsData: 'alt',
  animationSpeed: 400,
});

function onImageClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  lightbox.open();
}
