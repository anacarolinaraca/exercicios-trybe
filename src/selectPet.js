import './animalStyle.css';
const btnDog = document.querySelector('#dog-animal');
const btnCat = document.querySelector('#cat-animal');
const btnSurprise = document.querySelector('#surprise-animal');
const imgAnimals = document.querySelector('#img-animal');
const apiDog = 'https://dog.ceo/api/breeds/image/random';
const apiCat = 'https://api.thecatapi.com/v1/images/search';

btnDog.addEventListener('click', () => {
  fetch(apiDog)
    .then((response) => response.json())
    .then((data) => {
      const animalURL = data.message;

      imgAnimals.src = animalURL;
    });
});

btnCat.addEventListener('click', () => {
  fetch(apiCat)
    .then((response) => response.json())
    .then(([data]) => {
      const animalsURL = data.url;

      imgAnimals.src = animalsURL;
    });
});

btnSurprise.addEventListener('click', () => {
  Promise.race([fetch(apiDog), fetch(apiCat)])
    .then((response) => response.json())
    .then((data) => {
      const animalRandomURL = data.message || data[0].url;
      imgAnimals.src = animalRandomURL;
    });
});
