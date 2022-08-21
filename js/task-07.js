const refs = {
  inputControler: document.querySelector("#font-size-control"),
  text: document.querySelector("#text"),
};
console.dir(refs.text);

const ChangeFontSize = () =>
  (refs.text.style.fontSize = `${refs.inputControler.value}px`);

refs.inputControler.addEventListener("input", ChangeFontSize);
