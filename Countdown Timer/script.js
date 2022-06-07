const date = '1 jan 2023'
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours'); 
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
function countdown(){
    const newYrdate = new Date(date);
    const currentDate = new Date();
    const seconds = (newYrdate - currentDate) / 1000;

    const days = Math.floor(seconds / 3600 / 24);
    const hours = Math.floor(seconds / 3600) % 24;
    const minutes = (Math.floor(seconds / 60) % 60);
    const sec = Math.floor(seconds % 60);
    daysEl.innerHTML  = days;
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = sec;
        
}
//initial call
countdown();

// interval 
setInterval(countdown, 1000);