const refs = {
  day: document.querySelector('[data-value="days"]'),
  hours: document.querySelector('[data-value="hours"]'),
  mins: document.querySelector('[data-value="mins"]'),
  secs: document.querySelector('[data-value="secs"]'),
};

let day = `Jan 01 2021`;

class CountdownTimer {
  constructor(date, object) {
    this.date = new Date(date);
    this.refs = object;
  }
  count() {
    let i = setTime(this.date - Date.now());
    this.refs.day.textContent = i.days;
    this.refs.hours.textContent = i.hours;
    this.refs.mins.textContent = i.mins;
    this.refs.secs.textContent = i.secs;
  }
  start() {
    this.count();
    setInterval(() => {
      this.count();
    }, 1000);
  }
}
function setTime(time) {
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((time % (1000 * 60)) / 1000);
  return { days, hours, mins, secs };
}
const timerHappyNewYear = new CountdownTimer(day, refs);

timerHappyNewYear.start();
