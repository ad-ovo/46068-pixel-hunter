import getElementFromTemplate from './create-element';
import renderSlide from './render-slide';
import game2 from './game-2';
import answer_paint from './common/answer-paint';
import answer_photo from './common/answer-photo';

export default (data) => {
  const timer = data.timer;
  const option1_src = data.option1;
  const option2_src = data.option2;

  const templateHeader = {
    header: `<header class="header">
      <div class="header__back">
        <span class="back">
          <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
          <img src="img/logo_small.png" width="101" height="44">
        </span>
      </div>
      <h1 class="game__timer">${timer}</h1>
      <div class="game__lives">
        <img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">
        <img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">
        <img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">
      </div>
    </header>`
  };

  const templateStats = {
    stats: `<div class="stats">
      <ul class="stats">
        <li class="stats__result stats__result--wrong"></li>
        <li class="stats__result stats__result--slow"></li>
        <li class="stats__result stats__result--fast"></li>
        <li class="stats__result stats__result--correct"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
      </ul>
    </div>`
  };

  const templateContent = {
    content: `<div class="game">
    <p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
    <form class="game__content">
      <div class="game__option">
        <img src="${option1_src}" width="468" height="458">
        ${answer_photo()}
        ${answer_paint()}
      </div>
      <div class="game__option">
        <img src="${option2_src}" width="468" height="458">
        ${answer_photo()}
        ${answer_paint()}
      </div>
    </form>
    ${templateStats.stats}
  </div>`
  };

  const template =
    `${templateHeader.header}
   ${templateContent.content}`;

  const templateElement = getElementFromTemplate(template);

  const gameAnswers = templateElement.querySelectorAll('.game__answer');

  for (const i of gameAnswers) {
    i.onclick = (e) => {
      e.preventDefault();

      renderSlide(game2());
    };
  }

  return templateElement;
};
