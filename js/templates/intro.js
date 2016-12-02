import getElementFromTemplate from './create-element';
import renderSlide from './render-slide';
import greeting from './greeting';

export default () => {
  const templateContent =
    `<div id="intro" class="intro">
      <h1 class="intro__asterisk">*</h1>
      <p class="intro__motto"><sup>*</sup>
        Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.
        </p>
    </div>`;

  const templateElement = getElementFromTemplate(templateContent);
  const button = templateElement.querySelector('.intro__asterisk');

  button.onclick = (e) => {
    e.preventDefault();

    renderSlide(greeting());
  };

  return templateElement;
};
