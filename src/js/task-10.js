function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  inputNumber: document.querySelector("input"),
  btnCreate: document.querySelector("[data-create]"),
  btnDestroy: document.querySelector("[data-destroy]"),
  boxes: document.querySelector("#boxes"),
};
// refs.btnCreate.

function createBoxes(amount) {
  const boxesArr = [];
  let boxSize = 30;
  for (let i = 0; i < amount; i += 1) {
    let box = document.createElement("div");
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;

    boxSize += 10;
    boxesArr.push(box);
  }
  refs.boxes.append(...boxesArr);
}

let inputValue = 0;
refs.btnCreate.addEventListener("click", () => createBoxes(inputValue));

refs.inputNumber.addEventListener("input", (event) => {
  inputValue = event.currentTarget.value;
});

refs.btnDestroy.addEventListener("click", () => {
  refs.boxes.innerHTML = "";
  refs.inputNumber.value = "";
});
