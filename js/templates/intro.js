import getElementFromTemplate from './create-element';
import renderSlide from './render-slide';
import greeting from './greeting';

const intro = {
  motto: 'Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.'
};

const templateContent =
  `<div id="intro" class="intro">
      <h1 class="intro__asterisk">*</h1>
      <p class="intro__motto"><sup>*</sup> ${intro.motto}</p>
    </div>`;

const templateElement = getElementFromTemplate(templateContent);
const button = templateElement.querySelector('.intro__asterisk');

button.onclick = (e) => {
  e.preventDefault();

  renderSlide(greeting);
};

export default templateElement;

