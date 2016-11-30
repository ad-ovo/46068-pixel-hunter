import getElementFromTemplate from './create-element';
import renderSlide from './render-slide';
import game3 from './game-3';

export default () => {
  const game2 = {
    header: {
      back: {
        arrow: {
          src: 'img/arrow_left.svg',
          alt: 'Back'
        },
        logo: {
          src: 'img/logo_small.png'
        }
      }
    },
    lives: {
      full: {
        src: 'img/heart__full.svg',
        alt: 'Life'
      },
      empty: {
        src: 'img/heart__empty.svg',
        alt: 'Life'
      }
    },
    timer: 'NN',
    task: 'Угадай, фото или рисунок?',
    option: {
      image: {
        src: 'http://placehold.it/705x455',
        alt: 'Option 1'
      }
    },
    question1: {
      photo: {
        value: 'photo',
        text: 'Фото'
      },
      paint: {
        value: 'paint',
        text: 'Рисунок'
      }
    },
    question2: {
      photo: {
        value: 'photo',
        text: 'Фото'
      },
      paint: {
        value: 'paint',
        text: 'Рисунок'
      }
    }
  };

  const templateHeader = {
    header: `<header class="header">
    <div class="header__back">
        <span class="back">
          <img src="${game2.header.back.arrow.src}" width="45" height="45" alt="${game2.header.back.arrow.alt}">
          <img src="${game2.header.back.logo.src}" width="101" height="44">
        </span>
      </div>
    <h1 class="game__timer">${game2.timer}</h1>
    <div class="game__lives">
        <img src="${game2.lives.empty.src}" class="game__heart" alt="${game2.lives.empty.alt}" width="32" height="32">
        <img src="${game2.lives.full.src}" class="game__heart" alt="${game2.lives.full.alt}" width="32" height="32">
        <img src="${game2.lives.full.src}" class="game__heart" alt="${game2.lives.full.alt}" width="32" height="32">
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
        <li class="stats__result stats__result--wrong"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--slow"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--fast"></li>
        <li class="stats__result stats__result--unknown"></li>
      </ul>
    </div>`
  };

  const templateContent = {
    content: `<div class="game">
    <p class="game__task">${game2.task}</p>
    <form class="game__content  game__content--wide">
      <div class="game__option">
        <img src="${game2.option.image.src}" alt="${game2.option.image.alt}" width="705" height="455">
        <label class="game__answer  game__answer--photo">
          <input name="question1" type="radio" value="${game2.question1.photo.alt}">
          <span>${game2.question1.photo.text}</span>
        </label>
        <label class="game__answer  game__answer--wide  game__answer--paint">
          <input name="question1" type="radio" value="${game2.question2.paint.alt}">
          <span>${game2.question2.paint.text}</span>
        </label>
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

      renderSlide(game3());
    };
  }

  return templateElement;
};
