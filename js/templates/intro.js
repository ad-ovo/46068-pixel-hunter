import getElementFromTemplate from './create-element';
import renderSlide from './render-slide';
import greeting from './greeting';

const templateContent =
  `<div id="intro" class="intro">
      <h1 class="intro__asterisk">*</h1>
      <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf
        Sparnaay.</p>
    </div>`;

const templateElement = getElementFromTemplate(templateContent);

templateElement.querySelector('.intro__asterisk').onclick = (e) => {
  e.preventDefault();

  renderSlide(greeting);
};

export default templateElement;

// Экран приветствия, блок #greeting, должен показываться по нажатию на символ звездочки, элемент .intro__asterisk на главном экране.
