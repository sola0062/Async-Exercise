document.addEventListener("DOMContentLoaded", init);

function init() {
  document.body.addEventListener("click", clicked);
}

function clicked() {
  const r = Math.random();
  if (r < 0.5) {
    colorChange().then(changeBg);
    showText().then(addText);
  } else {
    showText().then(addText);
    colorChange().then(changeBg);
  }
}

function colorChange() {
  return new Promise((resolve) => {
    const t = Math.floor(Math.random() * 1000) + 1000;
    setTimeout(() => {
      const hex = randomColor();
      resolve(hex);
    }, t);
  });
}

function showText() {
  return new Promise((resolve) => {
    const t = Math.floor(Math.random() * 1000) + 1000;
    setTimeout(() => {
      const now = new Date();
      let time = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
      resolve("Clicked at " + time);
    }, t);
  });
}

function randomColor() {
  let chars = "0123456789abcdef";
  let h = "#";
  for (let i = 0; i < 6; i++) {
    h += chars[Math.floor(Math.random() * 16)];
  }
  return h;
}

function changeBg(hex) {
  document.body.style.background = hex;
}

function addText(msg) {
  const m = document.querySelector("main");
  const p = document.createElement("p");
  p.textContent = msg;
  m.appendChild(p);
}