const daysNumEl = document.querySelector("#days-number");
const hoursNumEl = document.querySelector("#hours-number");
const minutesNumEl = document.querySelector("#minutes-number");
const secondsNumEl = document.querySelector("#seconds-number");

//                 Programming Logic

const newYear = "01-01-2024";

function countdown() {
    const actualDate = new Date();
    const newYearDate = new Date(newYear);

    const base = Math.floor((newYearDate - actualDate) / 1000); // Transform MS to Seconds

    const days = Math.floor(base / 3600 / 24);
    const hours = Math.floor(base / 3600) % 24;
    const minutes = Math.floor(base / 60) % 60;
    const seconds = Math.floor(base % 60);

    daysNumEl.innerHTML = days < 10 ? `0${days}` : days;
    hoursNumEl.innerHTML = hours < 10 ? `0${hours}` : hours;
    minutesNumEl.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    secondsNumEl.innerHTML = seconds < 10 ? `0${seconds}` : seconds;

}

setInterval(countdown, 1000);