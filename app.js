"use strict";

const firstName = document.querySelector(".first-name");
const lastName = document.querySelector(".last-name");
const email = document.querySelector(".email-text");
const message = document.querySelector(".message");
const consent = document.querySelector(".consent");
const queryGeneral = document.querySelector(".General");
const querySupport = document.querySelector(".Support");

const firstError = document.querySelector(".first-error");
const lastError = document.querySelector(".last-error");
const emailError = document.querySelector(".email-error");
const messageError = document.querySelector(".message-error");
const consentError = document.querySelector(".consent-error");
const queryError = document.querySelector(".query-error");

const btn = document.querySelector(".btn");

// console.log(btn);
let isValid = true;

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if ((firstName.value = " ")) {
    firstError.innerHTML = "This field is required";
    firstName.style.border = "2px solid red";
  }
  if ((lastName.value = " ")) {
    lastError.innerHTML = "This field is required";
    lastName.style.border = "2px solid red";
  }
  if ((email.value = " ")) {
    emailError.innerHTML = "Please enter a valid email address";
    email.style.border = "2px solid red";
  }
  if ((message.value = " ")) {
    messageError.innerHTML = "This field is required";
    message.style.border = "2px solid red";
  }
  if (!consent.checked) {
    consentError.innerHTML =
      "To Submit this form, please  consent to being contected";
    isValid = false;
  }
  if (!queryGeneral.checked && !querySupport.checked) {
    queryError.innerHTML = "This field is required";
    isValid = false;
  }

  if (isValid) {
    alert("Form submitted successfully!");
    // Optionally, you can reset the form fields
    firstName.value = "";
    lastName.value = "";
    email.value = "";
    message.value = "";
    consent.checked = false;
    queryGeneral.checked = false;
    querySupport.checked = false;
  }
});
