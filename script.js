"use strict";

const hamburger = document.querySelector(".hamburger");
const sideMenu = document.querySelector(".side-bar");
const closeBtn = document.querySelector(".close-btn");
const links = document.querySelectorAll(".side-menu-link");

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
