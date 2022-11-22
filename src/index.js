import fetchImages from './fetchImages';
const formRef = document.querySelector('#search-form');
const galleryRef = document.querySelector('.gallery');
const btnLoadMoreRef = document.querySelector('.load-more');

formRef.addEventListener('submit', onClickSubmit);
btnLoadMoreRef.addEventListener('click', onLoadMore);
let PAGE;
let QUERY;

function onClickSubmit(event) {
  event.preventDefault();
  galleryRef.innerHTML = '';
  PAGE = 1;
  btnLoadMoreRef.classList.add('visually-hidden');
  QUERY = event.currentTarget.elements.searchQuery.value;

  fetchImages(QUERY, PAGE);
}

function onLoadMore() {
  PAGE += 1;
  fetchImages(QUERY, PAGE);
}
