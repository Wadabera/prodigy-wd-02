let time = 0;
let running = false;
let interval;
const display = document.getElementById('display');
const startPauseBtn = document.getElementById('startPause');
const resetBtn = document.getElementById('reset');
const lapBtn = document.getElementById('lap');
const lapsList = document.getElementById('laps');

function updateTime() {
    time++;
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    display.textContent = 
        `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

startPauseBtn.addEventListener('click', () => {
    if (!running) {
        interval = setInterval(updateTime, 1000);
        startPauseBtn.textContent = 'Pause';
        running = true;
    } else {
        clearInterval(interval);
        startPauseBtn.textContent = 'Start';
        running = false;
    }
});

resetBtn.addEventListener('click', () => {
    clearInterval(interval);
    time = 0;
    running = false;
    startPauseBtn.textContent = 'Start';
    display.textContent = '00:00:00';
    lapsList.innerHTML = '';
});

lapBtn.addEventListener('click', () => {
    if (running) {
        const lapTime = display.textContent;
        const lapItem = document.createElement('li');
        lapItem.textContent = `Lap: ${lapTime}`;
        lapsList.prepend(lapItem);
    }
});