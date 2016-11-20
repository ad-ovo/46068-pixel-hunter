import intro from './intro';
import greeting from './greeting';
import rules from './rules';
import game1 from './game-1';
import game2 from './game-2';
import game3 from './game-3';
import stats from './stats';

(() => {

// Rules
  const rulesSubmit = rules.querySelector('.rules__button');

  rules.querySelector('.rules__input').oninput = (e) => {
    if (e.target.value) {
      rulesSubmit.removeAttribute('disabled');
    } else {
      rulesSubmit.setAttribute('disabled', '');
    }
  };

// Slides changer

  const mainElement = document.getElementById('main');
  const switcher = document.createElement('div');
  switcher.innerHTML = '' +
    '<span class="prev"><img src="img/arrow_left.svg" alt="Left" width="50" height="50"></span>   ' +
    '<span class="next"><img src="img/arrow_right.svg" alt="Right" width="50" height="50"></span>';
  switcher.style.cssText = 'text-align: center';
  mainElement.after(switcher);

  const slides = [
    intro,
    greeting,
    rules,
    game1,
    game2,
    game3,
    stats
  ];
  let current = -1;

  const select = (index) => {
    current = index;
    mainElement.innerHTML = '';
    mainElement.appendChild(slides[index]);
  };

  document.querySelector('.next').onclick = (e) => {
    e.preventDefault();

    select(current + 1);
  };

  document.querySelector('.prev').onclick = (e) => {
    e.preventDefault();

    select(current - 1);
  };

  select(0);
})();

