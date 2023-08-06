const monthEl = document.getElementById("months");
const dayEl = document.getElementById("days");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function countDown() {
  let mo = new Date().getMonth();
  let d = new Date().getDate();
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";

  if (h > 12) {
    h = h - 12;
    ampm = "PM";
  }
  mo = mo < 10 ? "0" + mo : mo;
  0;
  d = d < 10 ? "0" + d : d;
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  dayEl.innerText = d;
  monthEl.innerText = mo;
  hourEl.innerText = h;
  minuteEl.innerText = m;
  secondsEl.innerText = s;
  ampmEl.innerText = ampm;
  setTimeout(() => {
    countDown();
  }, 1000);
}

countDown();
