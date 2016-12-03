import getElementFromTemplate from './create-element';
import renderSlide from './render-slide';
import game2 from './game-2';
import answerPaint from './common/answer-paint';
import answerPhoto from './common/answer-photo';
import gameHeader from './common/game-header';
import gameStats from './common/game-stats';

export default (data) => {
  const option1Src = data.option1;
  const option2Src = data.option2;

  const gameContent = {
    content: `<div class="game">
    <p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
    <form class="game__content">
      <div class="game__option">
        <img src="${option1Src}" width="468" height="458">
        ${answerPhoto()}
        ${answerPaint()}
      </div>
      <div class="game__option">
        <img src="${option2Src}" width="468" height="458">
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

/*  const gameAnswers = templateElement.querySelectorAll('.game__answer');

  for (const i of gameAnswers) {
    i.onclick = (e) => {
      e.preventDefault();

      renderSlide(game2({}));
    };
  }*/

  return templateElement;
};
