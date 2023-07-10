import Swal from 'sweetalert2';

const imgSuperHero = document.querySelector('#img-super-hero');
const nameSuperHero = document.querySelector('#name');
const btnSuperHero = document.querySelector('#btn-sort');
import './superHero.css';
const apiSuperHero = 'https://akabab.github.io/superhero-api/api';

const geradorId = () => Math.floor(Math.random() * 100);

btnSuperHero.addEventListener('click', (event) => {
  event.preventDefault();
  const idHeroes = geradorId();

  fetch(`${apiSuperHero}/id/${idHeroes}.json`)
    .then((response) => response.json())
    .then((data) => {
      (imgSuperHero.src = data.images.md),
        (nameSuperHero.innerHTML = data.name);
    })
    .catch(() =>
      Swal.fire({
        title: 'Herói não encontrado',
        icon: 'error',
        confirmButtonText: 'Ok',
      })
    );
});
