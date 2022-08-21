function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  colorOutput: document.querySelector(".color"),
  btnChangeColor: document.querySelector(".change-color"),
};

refs.btnChangeColor.addEventListener("click", ChangeBgColor);

function ChangeBgColor() {
  refs.colorOutput.textContent = getRandomHexColor();
  document.body.style.backgroundColor = getRandomHexColor();
}
