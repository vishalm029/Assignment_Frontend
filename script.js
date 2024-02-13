// Countdown Timer
const timerElement = document.getElementById('timer');
let timeLeft = 600; // 10 minutes in seconds

function countdown() {
    const minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    timerElement.textContent = `${minutes}:${seconds}`;
    timeLeft--;

    if (timeLeft < 0) {
        clearInterval(timer);
        timerElement.textContent = 'Time Expired!';
    }
}

const timer = setInterval(countdown, 1000);

// Slide-up Form
function showForm() {
    const form = document.getElementById('slide-up-form');
    form.style.height = 'auto';
}

function closeForm() {
    const form = document.getElementById('slide-up-form');
    form.style.height = '0';
}
