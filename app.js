const hourNeedle = document.querySelector('[hour-needle]');
const minNeedle = document.querySelector('[minute-needle]');
const secNeedle = document.querySelector('[second-needle]');

const setClock = () => {
  const now = new Date();
  const sec = now.getSeconds() / 60;
  const min = (sec + now.getMinutes()) / 60;
  const hour = (min + now.getHours()) / 12;
  setRotation(secNeedle, sec);
  setRotation(minNeedle, min);
  setRotation(hourNeedle, hour);
};

const setRotation = (elem, rotatio) => {
  elem.style.setProperty('--rot', rotatio * 360);
};

setInterval(setClock, 1000);
setClock();
