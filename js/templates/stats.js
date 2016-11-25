import getElementFromTemplate from './create-element';

const result = {
  header: {
    back: {
      arrow: {
        src: 'img/arrow_left.svg',
        alt: 'Back'
      },
      logo: {
        src: 'img/logo_small.png'
      }
    }
  },
  title: 'Победа!',
  output1: {
    number: '1.',
    points: '100',
    total: '900',
    extra1: {
      title: 'Бонус за скорость:',
      quantity: '1',
      points: '50',
      total: '50'
    },
    extra2: {
      title: 'Бонус за жизни:',
      quantity: '2',
      points: '50',
      total: '100'
    },
    extra3: {
      title: 'Штраф за медлительность:',
      quantity: '2',
      points: '50',
      total: '-100'
    },
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
    extra2: {
      title: 'Бонус за жизни:',
      quantity: '2',
      points: '50',
      total: '100'
    },
    final: {
      value: '950'
    }
  }
};

const templateHeader = {
  header:
    `<header class="header">
    <div class="header__back">
      <span class="back">
        <img src="${result.header.back.arrow.src}" width="45" height="45" alt="${result.header.back.arrow.alt}">
        <img src="${result.header.back.logo.src}" width="101" height="44">
      </span>
    </div>
  </header>`
};

const templateContent = {
  content :
  `<div class="result">
    <h1>${result.title}</h1>
    <table class="result__table">
      <tr>
        <td class="result__number">${result.output1.number}</td>
        <td colspan="2">
          <ul class="stats">
            <li class="stats__result stats__result--wrong"></li>
            <li class="stats__result stats__result--slow"></li>
            <li class="stats__result stats__result--fast"></li>
            <li class="stats__result stats__result--correct"></li>
            <li class="stats__result stats__result--wrong"></li>
            <li class="stats__result stats__result--unknown"></li>
            <li class="stats__result stats__result--slow"></li>
            <li class="stats__result stats__result--unknown"></li>
            <li class="stats__result stats__result--fast"></li>
            <li class="stats__result stats__result--unknown"></li>
          </ul>
        </td>
        <td class="result__points">${result.output1.points}</td>
        <td class="result__total">${result.output1.total}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">${result.output1.extra1.title}</td>
        <td class="result__extra">${result.output1.extra1.quantity}&nbsp;<span class="stats__result stats__result--fast"></span></td>
        <td class="result__points">×&nbsp;${result.output1.extra1.points}</td>
        <td class="result__total">${result.output1.extra1.total}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">${result.output1.extra2.title}</td>
        <td class="result__extra">${result.output1.extra2.quantity}&nbsp;<span class="stats__result stats__result--heart"></span></td>
        <td class="result__points">×&nbsp;${result.output1.extra2.points}</td>
        <td class="result__total">${result.output1.extra2.total}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">${result.output1.extra3.title}</td>
        <td class="result__extra">${result.output1.extra2.quantity}&nbsp;<span class="stats__result stats__result--slow"></span></td>
        <td class="result__points">×&nbsp;${result.output1.extra3.points}</td>
        <td class="result__total">${result.output1.extra3.total}</td>
      </tr>
      <tr>
        <td colspan="5" class="result__total  result__total--final">${result.output1.final.value}</td>
      </tr>
    </table>
    <table class="result__table">
      <tr>
        <td class="result__number">${result.output2.number}</td>
        <td>
          <ul class="stats">
            <li class="stats__result stats__result--wrong"></li>
            <li class="stats__result stats__result--slow"></li>
            <li class="stats__result stats__result--fast"></li>
            <li class="stats__result stats__result--correct"></li>
            <li class="stats__result stats__result--wrong"></li>
            <li class="stats__result stats__result--unknown"></li>
            <li class="stats__result stats__result--slow"></li>
            <li class="stats__result stats__result--wrong"></li>
            <li class="stats__result stats__result--fast"></li>
            <li class="stats__result stats__result--wrong"></li>
          </ul>
        </td>
        <td class="result__total"></td>
        <td class="result__total  result__total--final">${result.output2.final.value}</td>
      </tr>
    </table>
    <table class="result__table">
      <tr>
        <td class="result__number">${result.output3.number}</td>
        <td colspan="2">
          <ul class="stats">
            <li class="stats__result stats__result--wrong"></li>
            <li class="stats__result stats__result--slow"></li>
            <li class="stats__result stats__result--fast"></li>
            <li class="stats__result stats__result--correct"></li>
            <li class="stats__result stats__result--wrong"></li>
            <li class="stats__result stats__result--unknown"></li>
            <li class="stats__result stats__result--slow"></li>
            <li class="stats__result stats__result--unknown"></li>
            <li class="stats__result stats__result--fast"></li>
            <li class="stats__result stats__result--unknown"></li>
          </ul>
        </td>
        <td class="result__points">×&nbsp;${result.output3.points}</td>
        <td class="result__total">${result.output3.total}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">${result.output3.extra2.title}</td>
        <td class="result__extra">${result.output3.extra2.quantity}&nbsp;<span class="stats__result stats__result--heart"></span></td>
        <td class="result__points">×&nbsp;${result.output3.extra2.points}</td>
        <td class="result__total">${result.output3.extra2.total}</td>
      </tr>
      <tr>
        <td colspan="5" class="result__total  result__total--final">${result.output3.final.value}</td>
      </tr>
    </table>
  </div>`
};

const template =
  `${templateHeader.header}
   ${templateContent.content}`;

const templateElement = getElementFromTemplate(template);
export default templateElement;
