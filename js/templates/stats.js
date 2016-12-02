import getElementFromTemplate from './create-element';
import goBack from './common/go-back';
import gameStats from './common/game-stats';

export default () => {
  const result = {
    output1: {
      number: '1.',
      points: '100',
      total: '900',
      final: {
        value: '950'
      }
    },
    output2: {
      number: '2.',
      final: {
        value: 'fail'
      }
    },
    output3: {
      number: '3.',
      points: '100',
      total: '900',
      final: {
        value: '950'
      }
    }
  };

  const templateContent = {
    content: `<div class="result">
    <h1>Победа!</h1>
    <table class="result__table">
      <tr>
        <td class="result__number">${result.output1.number}</td>
        <td colspan="2">
          ${gameStats()}
        </td>
        <td class="result__points">${result.output1.points}</td>
        <td class="result__total">${result.output1.total}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">Бонус за скорость:</td>
        <td class="result__extra">1&nbsp;<span class="stats__result stats__result--fast"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">50</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">Бонус за жизни:</td>
        <td class="result__extra">2&nbsp;<span class="stats__result stats__result--heart"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">100</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">Штраф за медлительность:</td>
        <td class="result__extra">2&nbsp;<span class="stats__result stats__result--slow"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">-100</td>
      </tr>
      <tr>
        <td colspan="5" class="result__total  result__total--final">${result.output1.final.value}</td>
      </tr>
    </table>
    <table class="result__table">
      <tr>
        <td class="result__number">${result.output2.number}</td>
        <td>
          ${gameStats()}
        </td>
        <td class="result__total"></td>
        <td class="result__total  result__total--final">${result.output2.final.value}</td>
      </tr>
    </table>
    <table class="result__table">
      <tr>
        <td class="result__number">${result.output3.number}</td>
        <td colspan="2">
          ${gameStats()}
        </td>
        <td class="result__points">×&nbsp;${result.output3.points}</td>
        <td class="result__total">${result.output3.total}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">Бонус за жизни:</td>
        <td class="result__extra">2&nbsp;<span class="stats__result stats__result--heart"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">100</td>
      </tr>
      <tr>
        <td colspan="5" class="result__total  result__total--final">${result.output3.final.value}</td>
      </tr>
    </table>
  </div>`
  };

  const template =
    `${goBack()}
     ${templateContent.content}`;

  const templateElement = getElementFromTemplate(template);

  return templateElement;
};
