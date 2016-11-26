import getElementFromTemplate from './create-element';
import renderSlide from './render-slide';
import stats from './stats';

const game3 = {
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
  task: 'Найдите рисунок среди изображений',
  option1: {
    image: {
      src: 'http://placehold.it/304x455',
      alt: 'Option 1'
    }
  },
  option2: {
    image: {
      src: 'http://placehold.it/304x455',
      alt: 'Option 2'
    }
  },
  option3: {
    image: {
      src: 'http://placehold.it/304x455',
      alt: 'Option 3'
    }
  },
  answer: {
    photo: 'Фото',
    paint: 'Рисунок'
  }
};

const templateHeader = {
  header:
  `<header class="header">
    <div class="header__back">
        <span class="back">
          <img src="${game3.header.back.arrow.src}" width="45" height="45" alt="${game3.header.back.arrow.alt}">
          <img src="${game3.header.back.logo.src}" width="101" height="44">
        </span>
      </div>
    <h1 class="game__timer">${game3.timer}</h1>
    <div class="game__lives">
        <img src="${game3.lives.empty.src}" class="game__heart" alt="${game3.lives.empty.alt}" width="32" height="32">
        <img src="${game3.lives.full.src}" class="game__heart" alt="${game3.lives.full.alt}" width="32" height="32">
        <img src="${game3.lives.full.src}" class="game__heart" alt="${game3.lives.full.alt}" width="32" height="32">
      </div>
  </header>`
};

const templateStats = {
  stats:
    `<div class="stats">
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
  content:
  `<div class="game">
    <p class="game__task">${game3.task}</p>
    <form class="game__content  game__content--triple">
      <div class="game__option">
        <img src="${game3.option1.image.src}" alt="${game3.option1.image.alt}" width="304" height="455">
      </div>
      <div class="game__option  game__option--selected">
        <img src="${game3.option2.image.src}" alt="${game3.option2.image.alt}" width="304" height="455">
      </div>
      <div class="game__option">
        <img src="${game3.option3.image.src}" alt="${game3.option3.image.alt}" width="304" height="455">
      </div>
    </form>
    ${templateStats.stats}
  </div>`
};

const template =
  `${templateHeader.header}
   ${templateContent.content}`;

const templateElement = getElementFromTemplate(template);

const gameAnswers = templateElement.querySelectorAll('.game__option');

for (const i of gameAnswers) {
  i.onclick = (e) => {
    e.preventDefault();

    renderSlide(stats);
  };
}

export default templateElement;

