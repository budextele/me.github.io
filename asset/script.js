let pp1 = document.getElementById("pp1");
let pp2 = document.getElementById("pp2");
let pp3 = document.getElementById("pp3");
let ruller = document.getElementById("ruller");
let pen1 = document.getElementById("pen1");
let pen2 = document.getElementById("pen2");

window.addEventListener("scroll", function () {
  let value = window.scrollY;

  pp1.style.left = value * -1.5 + "px";
  pp1.style.top = value * -1.5 + "px";
  pp2.style.left = value * -0.5 + "px";
  pp3.style.left = value * 1 + "px";
  pen1.style.top = value * -2.5 + "px";
  pen1.style.left = value * 0.5 + "px";
  pen2.style.left = value * -0.5 + "px";
  ruller.style.top = value * -1.5 + "px";
  ruller.style.opacity = 100 + value * -0.5 + "%";
});
