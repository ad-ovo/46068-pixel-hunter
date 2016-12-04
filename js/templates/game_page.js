import getElementFromTemplate from './create-element';
import gameHeader from './common/game-header';
import gameStats from './common/game-stats';
import data from '../data';
import game1 from './games/game-1';
import game2 from './games/game-2';
import game3 from './games/game-3';
import renderSlide from './render-slide';
import stats from './stats';

export default () => {
  let current_game_index = 0;
  let current_game = data.questions[current_game_index];

  const gameContent = `<div class="game">
    <div id="game__content__element">
      ${getGameTemplate(current_game.gameScreen, current_game.imageSrc)}
    </div>
    <div class="stats">
      ${gameStats()}
    </div>
  </div>`;

  const template =
    `${gameHeader()}
     ${gameContent}`;

  const templateElement = getElementFromTemplate(template);

  templateElement.onclick = (e) => {
    e.preventDefault();
    let target = e.target;

    while (target !== templateElement) {
      if (target.matches('.js-answer')) {

        if(current_game_index < data.questions.length) {
          current_game_index++;

          current_game = data.questions[current_game_index];

          const gameContentElement = templateElement.querySelector('#game__content__element');

          gameContentElement.innerHTML = getGameTemplate(current_game.gameScreen, current_game.imageSrc);

          break;
        } else {
          renderSlide(stats());
        }
      }

      target = target.parentNode;
    }
  };

  return templateElement;
};

function getGameTemplate(gameScreen, data) {
  switch (gameScreen) {
    case 'game-1':
      return game1(data);
    case 'game-2':
      return game2(data);
    case 'game-3':
      return game3(data);
  }
}
