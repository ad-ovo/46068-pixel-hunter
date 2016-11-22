export default (slide) => {
  const main = document.querySelector('#main');
  main.innerHTML = '';
  main.appendChild(slide);
};
