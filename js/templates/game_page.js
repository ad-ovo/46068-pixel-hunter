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
  let currentGameIndex = 0;
  let currentGame = data.questions[currentGameIndex];

  const gameContent = `<div class="game">
    <div id="game__element">
      ${getGameTemplate(currentGame.gameScreen, currentGame.imageSrc)}
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

        if (currentGameIndex < data.questions.length - 1) {
          currentGameIndex++;

          currentGame = data.questions[currentGameIndex];
          const gameElement = templateElement.querySelector('#game__element');
          gameElement.innerHTML = getGameTemplate(currentGame.gameScreen, currentGame.imageSrc);

          return;
        } else {
          renderSlide(stats());
        }
      }

      target = target.parentNode;
    }
  };

  return templateElement;
};

function getGameTemplate(gameScreen, ...args) {
  let currentGameScreen;

  switch (gameScreen) {
    case 'game-1':
      currentGameScreen = game1(...args);
      break;
    case 'game-2':
      currentGameScreen = game2(...args);
      break;
    case 'game-3':
      currentGameScreen = game3(...args);
      break;
  }

  return currentGameScreen;
}
