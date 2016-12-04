import getElementFromTemplate from './create-element';
import gameHeader from './common/game-header';
import gameStats from './common/game-stats';
import data from '../data';
import game1 from './game-1';
import game2 from './game-2';
import game3 from './game-3';

export default () => {
  let current_game_index = 0;
  const current_game = data.questions[current_game_index];
  const gameContent = `<div class="game">
    ${getGameTemplate(current_game.gameScreen, current_game.imageSrc)}
    <div class="stats">
      ${gameStats()}
    </div>
  </div>`;

  const template = `${gameHeader()}${gameContent}`;

  const templateElement = getElementFromTemplate(template);

  templateElement.onclick = (e) => {
    e.preventDefault();
    let target = e.target;

    while (target !== templateElement) {
      if (target.matches('.js-answer') !== null) {
        current_game_index++;
        break;
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
