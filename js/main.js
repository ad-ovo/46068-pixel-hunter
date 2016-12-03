import intro from './templates/intro';
import renderSlide from './templates/render-slide';
/*import data from './data';*/
import game2 from './templates/game-2';
import game3 from './templates/game-3';

const main = document.querySelector('#main');

main.onclick = (e) => {
  e.preventDefault();

  let target = e.target;

  while (target !== main) {
    if (target.querySelector('.js-answer') !== null) {
      /*for (let i = 0; i < )*/
      renderSlide(game3({})) // Чтобы проверить, работает ли...
    }

    target = target.parentNode;
  }
};

renderSlide(intro());
