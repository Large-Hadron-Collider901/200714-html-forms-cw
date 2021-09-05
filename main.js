const myForm = document.getElementById("form");
const bottom = document.getElementById("bottom-page");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const pwd = document.getElementById("pwd");
const confirm_pwd = document.getElementById("confirm_pwd");
const acceptTerms = document.getElementById("terms");

myForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  bottom.append(
    `First Name: ${fname.value} Last Name: ${lname.value} Email: ${email.value} Password: ${pwd.value} Confirm Password: ${confirm_pwd.value} Terms and Conditions: ${acceptTerms.value}`
  );
});
