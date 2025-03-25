const ageInput = document.querySelector("#ageInput");
const displayAgeBtn = document.querySelector("#displayAgeBtn");
const eligibilityageBtn = document.querySelector("#eligibilityageBtn");
const ageResult = document.querySelector("#ageResult");

displayAgeBtn.addEventListener("click", function () {
  const age = ageInput.value;
  ageResult.textContent = `Your age: ${age}`;
  ageResult.style.color = "black";
});

eligibilityageBtn.addEventListener("click", function () {
  const age = ageInput.value;
  if (Number(age) >= 18) ageResult.style.color = "green";
  else ageResult.style.color = "red";
});

const studentInput = document.querySelector("#studentInput");
const displayStudentBtn = document.querySelector("#displayStudentBtn");
const eligibilityStudentBtn = document.querySelector("#eligibilityStudentBtn");
const studentResult = document.querySelector("#studentResult");

displayStudentBtn.addEventListener("click", function () {
  const student = studentInput.value;
  studentResult.textContent = `Your answer: ${student}`;
  studentResult.style.color = "black";
});
eligibilityStudentBtn.addEventListener("click", function () {
  const student = studentInput.value;
  let ans = "";
  if (student === "Yes" || student === "YES" || student === "yes") {
    ans = "You are eligible.";
    studentResult.textContent = ans;
    studentResult.style.color = "green";
  } else if (student === "No" || student === "NO" || student === "no") {
    ans = "You are not eligible.";
    studentResult.textContent = ans;
    studentResult.style.color = "red";
  } else {
    studentResult.textContent = `Please enter valid input in \'yes\' or \'No\'.`;
    studentResult.style.color = "red";
  }
});

const passwordInput = document.querySelector("#passwordInput");
const displayPasswordBtn = document.querySelector("#displayPasswordBtn");
const eligibilityPasswordBtn = document.querySelector(
  "#eligibilityPasswordBtn"
);
const passwordResult = document.querySelector("#passwordResult");

displayPasswordBtn.addEventListener("click", function () {
  const pass = passwordInput.value;
  passwordResult.textContent = `Your Password: ${pass}`;
  passwordResult.style.color = "black";
});

eligibilityPasswordBtn.addEventListener("click", function () {
  const pass = passwordInput.value;
  let isValid = pass.indexOf("@");
  if (isValid == -1) {
    passwordResult.textContent = `Invalid Password, please enter one with @ symbol.`;
    passwordResult.style.color = "red";
  } else {
    passwordResult.textContent = `Password Accepted.`;
    passwordResult.style.color = "green";
  }
});
