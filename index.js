const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

const startBtm = document.querySelector('[data-action="start"]');
const stopBtm = document.querySelector('[data-action="stop"]');
const body = document.querySelector('body');

const randomIntegerFromInterval = (colors) => {
    return colors[Math.floor(Math.random() * colors.length)]
}


const start =  () => {
 bodyColor = setInterval(() =>
 body.style.backgroundColor = randomIntegerFromInterval(colors), 1000);

    startBtm.disabled = true;

}


const stop = () => {
    clearInterval(bodyColor);
    startBtm.disabled = false;
}

startBtm.addEventListener('click', start);
stopBtm.addEventListener('click', stop);

