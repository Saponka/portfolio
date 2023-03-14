"use strict";

var Ligth = document.querySelector("#capa .ligth");
var Dark = document.querySelector("#capa .dark");
var body = document.querySelector("body");

Ligth.onclick = function () {
  Ligth.style.display = "none";
  Dark.style.display = "block";
  body.style.backgroundColor = "black";
  body.style.color = "white";
};

Dark.onclick = function () {
  Dark.style.display = "none";
  Ligth.style.display = "block";
  Ligth.style.background = "white";
  body.style.backgroundColor = "white";
  body.style.color = "black";
};