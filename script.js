const pwdInput = document.getElementById("password");
const pwdConfirm = document.querySelector("#password-confirm");
pwdInput.addEventListener("blur", () => {
  if (pwdInput.validity.valid === false) {
    pwdInput.classList.add("invalid");
  }
  if (pwdInput.value === "") {
    pwdInput.classList.remove("invalid");
  }
});
pwdConfirm.addEventListener("blur", () => {
  if (checkPwd(pwdInput, pwdConfirm) === false) {
    pwdConfirm.classList.add("invalid");
    pwdConfirm.value = "";
  }
});
function checkPwd(pwdInput, pwdConfirm) {
  let passwordText = pwdInput.value;
  let confirmText = pwdConfirm.value;
  if (passwordText === confirmText) {
    return true;
  } else return false;
}
