const refs = {
  nameInput: document.querySelector("#name-input"),
  nameOutput: document.querySelector("#name-output"),
};

const owerwitesName = (event) =>
  event.currentTarget.value === ""
    ? (refs.nameOutput.textContent = "Anonymous")
    : (refs.nameOutput.textContent = event.currentTarget.value);

refs.nameInput.addEventListener("input", owerwitesName);
