const userNameTarget = document.getElementById("userName");
const formid = document.getElementById("mainForm");
const inputvalue = document.getElementById("nameField");
const logoutBtn = document.getElementById("logout");
const userinfo = document.getElementById("userInfo");

formid.addEventListener(`submit`, formHandler);
logoutBtn.addEventListener("click", logoutHandler);

function formHandler(event) {
  event.preventDefault();
  const name = inputvalue.value;
  localStorage.setItem("userName", name);

  toggleSections();
  window.location.reload();
}

function logoutHandler(event) {
  localStorage.removeItem(`userName`);
  toggleSections();
  window.location.reload();
}

function toggleSections(hasUser = false) {
  if (hasUser) {
    formid.setAttribute(`style`, `display:none`);
    userNameTarget.innerHTML = `${localStorage.getItem("userName")}`;
  } else {
    userinfo.setAttribute(`style`, `display:none`);
  }
}

function getFromStorage(name) {}
const hasUser = !!localStorage.getItem("userName");
console.log(hasUser);
toggleSections(hasUser);

console.log(localStorage);
