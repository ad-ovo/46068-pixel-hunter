import getElementFromTemplate from './create-element';
import renderSlide from './render-slide';
import stats from './stats';
import gameHeader from './common/game-header';
import gameStats from './common/game-stats';

export default () => {

  const gameContent = {
    content: `<div class="game">
    <p class="game__task">Найдите рисунок среди изображений</p>
    <form class="game__content  game__content--triple">
      <div class="game__option">
        <img src="http://placehold.it/304x455" width="304" height="455">
      </div>
      <div class="game__option  game__option--selected">
        <img src="http://placehold.it/304x455" width="304" height="455">
      </div>
      <div class="game__option">
        <img src="http://placehold.it/304x455" width="304" height="455">
      </div>
    </form>
    <div class="stats">
      ${gameStats()}
    </div>
  </div>`
  };

  const template =
    `${gameHeader()}
     ${gameContent.content}`;

  const templateElement = getElementFromTemplate(template);

  const gameAnswers = templateElement.querySelectorAll('.game__option');

  for (const i of gameAnswers) {
    i.onclick = (e) => {
      e.preventDefault();

      renderSlide(stats());
    };
  }

  return templateElement;
};

