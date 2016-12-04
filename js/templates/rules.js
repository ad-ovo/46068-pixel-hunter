import getElementFromTemplate from './create-element';
import renderSlide from './render-slide';
import goBack from './common/go-back';
import gamePage from './game_page';

export default () => {

  const templateContent = {
    content: `<div class="rules  central--none">
    <h1 class="rules__title">Правила</h1>
    <p class="rules__description">Угадай 10 раз для каждого изображения фото 
    <img src="img/photo_icon.png" width="16" height="16"> или рисунок 
    <img src="img/paint_icon.png" width="16" height="16" alt="">.<br> 
    Фотографиями или рисунками могут быть оба изображения.<br> 
    На каждую попытку отводится 30 секунд.<br> 
    Ошибиться можно не более 3 раз.<br> <br>
    Готовы?</p>
    <form class="rules__form">
      <input class="rules__input" type="text" placeholder="Ваше Имя">
      <button class="rules__button  continue" type="submit" disabled>Go!</button>
    </form>
  </div>`
  };

  const template =
    `<header class="header">
       ${goBack()}
     </header>
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

    renderSlide(gamePage());
  };

  return templateElement;
};
