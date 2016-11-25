import getElementFromTemplate from './create-element';
import renderSlide from './render-slide';
import game1 from './game-1';

const rules = {
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
  title: 'Правила',
  description: `Угадай 10 раз для каждого изображения фото <img src="img/photo_icon.png" width="16" height="16"> или рисунок <img src="img/paint_icon.png" width="16" height="16" alt="">.<br> Фотографиями или рисунками могут быть оба изображения.<br> На каждую попытку отводится 30 секунд.<br> Ошибиться можно не более 3 раз.<br> <br>Готовы?`,
  form: {
    input: {
      placeholder: 'Ваше Имя'
    },
    button: {
      text: 'Go!'
    }
  }
};

const templateHeader = {
  header:
  `<header class="header">
    <div class="header__back">
      <span class="back">
        <img src="${rules.header.back.arrow.src}" width="45" height="45" alt="${rules.header.back.arrow.alt}">
        <img src="${rules.header.back.logo.src}" width="101" height="44">
      </span>
    </div>
  </header>`
};

const templateContent = {
  content:
  `<div class="rules  central--none">
    <h1 class="rules__title">${rules.title}</h1>
    <p class="rules__description">${rules.description}</p>
    <form class="rules__form">
      <input class="rules__input" type="text" placeholder="${rules.form.input.placeholder}">
      <button class="rules__button  continue" type="submit" disabled>${rules.form.button.text}</button>
    </form>
  </div>`
};

const template =
  `${templateHeader.header}
  ${templateContent.content}`;


const templateElement = getElementFromTemplate(template);

const rulesSubmit = templateElement.querySelector('.rules__button');
const rulesInput = templateElement.querySelector('.rules__input');

rulesInput.oninput = (e) => {
  if (e.target.value) {
    rulesSubmit.removeAttribute('disabled');
  } else {
    rulesSubmit.setAttribute('disabled', '');
  }
};

rulesSubmit.onclick = (e) => {
  e.preventDefault();

  renderSlide(game1);
};

export default templateElement;

