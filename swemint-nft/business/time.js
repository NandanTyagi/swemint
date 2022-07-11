// const days = document.getElementById('days');
// const hours = document.getElementById('hours');
// const minutes = document.getElementById('minutes');
// const seconds = document.getElementById('seconds');
// const countdown = document.getElementById('countdown');
// const year = document.getElementById('year');
// const loading = document.getElementById('loading');


const currentYear = new Date().getFullYear();


const mintDeadLine = new Date(`August 20 ${currentYear} 18:00:00`);


// Update time countdown
export function Countdown() {
    const currentTime = new Date();
    const diff = mintDeadLine - currentTime;
    
    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60 ) % 60;
    const s = Math.floor(diff / 1000 ) % 60;

    return {d, h, m, s}
// Add values to DOM
    days.innerHTML = d;
    hours.innerHTML = h < 10 ? '0' + h : h;
    minutes.innerHTML = m < 10 ? '0' + m : m;
    seconds.innerHTML = s < 10 ? '0' + s : s;
    year.innerHTML = currentYear + 1;

}
export default Countdown;

//Show spinner before countdown
// setTimeout(() => {
//     loading.remove();
//     countdown.style.display = 'flex';
// }, 1000);

// Run every second
// setInterval(updateCountdown, 1000);