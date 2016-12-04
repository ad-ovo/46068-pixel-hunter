export default (data) => {
  return `<p class="game__task">Найдите рисунок среди изображений</p>
    <form class="game__content  game__content--triple">
      <div class="game__option  js-answer">
        <img src="${data[0]}" width="304" height="455">
      </div>
      <div class="game__option  game__option--selected  js-answer">
        <img src="${data[1]}" width="304" height="455">
      </div>
      <div class="game__option  js-answer">
        <img src="${data[2]}" width="304" height="455">
      </div>
    </form>`;
};

