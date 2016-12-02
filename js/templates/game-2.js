import getElementFromTemplate from './create-element';
import renderSlide from './render-slide';
import game3 from './game-3';
import answerPaint from './common/answer-paint';
import answerPhoto from './common/answer-photo';
import gameHeader from './common/game-header';
import gameStats from './common/game-stats';

export default (data) => {
  const option1Src = data.option1;

  const gameContent = {
    content: `<div class="game">
    <p class="game__task">Угадай, фото или рисунок?</p>
    <form class="game__content  game__content--wide">
      <div class="game__option">
        <img src="${option1Src}" width="705" height="455">
        ${answerPhoto()}
        ${answerPaint()}
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

  const gameAnswers = templateElement.querySelectorAll('.game__answer');

  for (const i of gameAnswers) {
    i.onclick = (e) => {
      e.preventDefault();

      renderSlide(game3());
    };
  }

  return templateElement;
};
