import answerPaint from '../common/answer-paint';
import answerPhoto from '../common/answer-photo';

export default (data) => {
  return `<p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
    <form class="game__content">
      <div class="game__option">
        <img src="${data[0]}" width="468" height="458">
        ${answerPhoto()}
        ${answerPaint()}
      </div>
      <div class="game__option">
        <img src="${data[1]}" width="468" height="458">
        ${answerPhoto()}
        ${answerPaint()}
      </div>
    </form>`;
};
