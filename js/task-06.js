const refs = {
  validationInput: document.querySelector("#validation-input"),
};

const testValidation = (event) => {
  if (event.currentTarget.value === "") return;

  event.currentTarget.value.length > refs.validationInput.dataset.length
    ? refs.validationInput.classList.add("invalid")
    : refs.validationInput.classList.add("valid");
};

const resetValidation = (event) =>
  refs.validationInput.classList.remove("valid", "invalid");

refs.validationInput.addEventListener("blur", testValidation);
refs.validationInput.addEventListener("focus", resetValidation);
