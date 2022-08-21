const form = document.querySelector(".login-form");

form.addEventListener("submit", formControler);

function formControler(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }

  console.log({ email: email.value, Password: password.value });
  event.currentTarget.reset();
}
