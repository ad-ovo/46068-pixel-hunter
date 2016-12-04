import answerPaint from '../common/answer-paint';
import answerPhoto from '../common/answer-photo';

export default (data) => {
  return `<p class="game__task">Угадай, фото или рисунок?</p>
    <form class="game__content  game__content--wide">
      <div class="game__option">
        <img src="${data[0]}" width="705" height="455">
        ${answerPhoto()}
        ${answerPaint()}
      </div>
    </form>`;
};
