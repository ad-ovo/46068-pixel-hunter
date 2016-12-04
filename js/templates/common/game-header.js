import data from '../../data';
import goBack from './go-back';

export default () => {
  return `<header class="header">
      ${goBack()}
      <h1 class="game__timer">${data.timer}</h1>
      <div class="game__lives">
        ${data.lives.map((i) => (i) ? '<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">' : 
                                      '<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">').join('')}
      </div>
    </header>`;
};
