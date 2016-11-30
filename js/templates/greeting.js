import getElementFromTemplate from './create-element';
import renderSlide from './render-slide';
import rules from './rules';

export default () => {
  const greeting = {
    title: 'Лучшие художники-фотореалисты бросают&nbsp;тебе&nbsp;вызов!',
    description: 'Правила игры просты.<br> Нужно отличить рисунок&nbsp;от фотографии и сделать выбор.<br> Задача кажется тривиальной, но не думай, что все так просто.<br> Фотореализм обманчив и коварен.<br> Помни, главное — смотреть очень внимательно.',
    logo: {
      image: {
        src: 'img/logo_big.png',
        alt: 'Pixel Hunter'
      }
    },
    continue: {
      image: {
        src: 'img/arrow_right.svg',
        alt: 'Next'
      }
    }
  };

  const templateContent =
    `<div class="greeting  central--blur">
    <div class="greeting__logo"><img src="${greeting.logo.image.src}" width="201" height="89" alt="${greeting.logo.image.alt}"></div>
    <h1 class="greeting__asterisk">*</h1>
    <div class="greeting__challenge">
      <h3>${greeting.title}</h3>
      <p>${greeting.description}</p>
    </div>
    <div class="greeting__continue"><span><img src="${greeting.continue.image.src}" width="64" height="64" alt="${greeting.continue.image.alt}"></span></div>
  </div>`;

  const templateElement = getElementFromTemplate(templateContent);
  const button = templateElement.querySelector('.greeting__continue');

  button.onclick = (e) => {
    e.preventDefault();

    renderSlide(rules());
  };

  return templateElement;
};
