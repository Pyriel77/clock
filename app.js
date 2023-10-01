const hourNeedle = document.querySelector('[hour-needle]');
const minNeedle = document.querySelector('[minute-needle]');
const secNeedle = document.querySelector('[second-needle]');
const minusButton = document.querySelector('.minus');
const plusButton = document.querySelector('.plus');

let modifier = 0;

const setClock = () => {
  const now = new Date();
  let alterTime = new Date();
  modifier = Number(localStorage.getItem('mod'));
  alterTime.setTime(now.getTime() + modifier);
  console.log(alterTime);
  const sec = alterTime.getSeconds() / 60;
  const min = (sec + alterTime.getMinutes()) / 60;
  const hour = (min + alterTime.getHours()) / 12;
  setRotation(secNeedle, sec);
  setRotation(minNeedle, min);
  setRotation(hourNeedle, hour);
};

const setRotation = (elem, rotatio) => {
  elem.style.setProperty('--rot', rotatio * 360);
};

const modify = (mod) => {
  modifier += mod * 60000;
  localStorage.setItem('mod', modifier);
};

minusButton.addEventListener('click', () => {
  modify(-10);
});
plusButton.addEventListener('click', () => {
  modify(5);
});

setInterval(setClock, 1000);
setClock();
