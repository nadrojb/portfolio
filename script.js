"use strict";

const hamburger = document.querySelector(".hamburger");
const sideMenu = document.querySelector(".side-bar");
const closeBtn = document.querySelector(".close-btn");
const links = document.querySelectorAll(".side-menu-link");
const mobileEmail = document.querySelector("#mobile-email");
const desktopEmail = document.querySelector("#desktop-email");

hamburger.addEventListener("click", () => {
  sideMenu.classList.remove("hidden");
  sideMenu.classList.add("visible");
  document.documentElement.style.overflow = "hidden";
  document.body.scroll = "no";
});

closeBtn.addEventListener("click", () => {
  sideMenu.classList.remove("visible");
  sideMenu.classList.add("hidden");
  document.documentElement.style.overflow = "visible";
  document.body.scroll = "yes";
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    sideMenu.classList.remove("visible");
    sideMenu.classList.add("hidden");
    document.documentElement.style.overflow = "visible";
    document.body.scroll = "yes";
  });
});

desktopEmail.addEventListener("click", () => {
  navigator.clipboard.writeText("jordanmilesbrewer@outlook.com");
  desktopEmail.textContent = "Email copied to clipboard";
  desktopEmail.style.color = "yellow";
  setTimeout(() => {
    desktopEmail.textContent = "jordanmilesbrewer@outlook.com";
    desktopEmail.style.color = "#e23d85";
  }, 700);
});

function ChangeEmailTextToOriginal(desktopEmail) {
  desktopEmail.textContent = "jordanmilesbrewer@outlook.com";
}
mobileEmail.addEventListener("click", () => {
  navigator.clipboard.writeText("jordanmilesbrewer@outlook.com");
  mobileEmail.style.color = "yellow";
  mobileEmail.textContent = "Email copied to clipboard";
  setTimeout(() => {
    mobileEmail.textContent = "jordanmilesbrewer@outlook.com";
    mobileEmail.style.color = "#e23d85";
  }, 700);
});

function ChangeEmailTextToOriginal(mobileEmail) {
  mobileEmail.textContent = "jordanmilesbrewer@outlook.com";
}
