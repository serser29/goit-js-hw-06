const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(loginForm);
  const formObject = {};

  formData.forEach((value, key) => {
    formObject[key] = value;
  });

  if (!formObject.email || !formObject.password) {
    alert("Don't cheat, let's be honest!");
    return;
  }

  console.log(formObject);

  loginForm.reset();
});
