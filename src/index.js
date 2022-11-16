import fetchImages from './fetchImages';
const formRef = document.querySelector('#search-form');
const inputRef = document.querySelector('input');
const btnRef = document.querySelector('button');
const galleryRef = document.querySelector('.gallery');

formRef.addEventListener('submit', onClickSubmit);

function onClickSubmit(event) {
  event.preventDefault();
  galleryRef.innerHTML = '';
  const name = event.currentTarget.elements.searchQuery.value;
  const PAGE = 1;

  fetchImages(name);
}
