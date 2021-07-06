let value1 = document.getElementById('value1');
let value2 = document.getElementById('value2');
let value3 = document.getElementById('value3');

let btnStop = document.getElementById('btnStop');
let inpSpeed = document.getElementById('inpSpeed');

let values = [
    '😃', '😎', '😇', '🤣', '🤩', '😮', '🤑', '💀', '😴'
];

function getRandomValue() {
    return values[Math.floor(Math.random() * 9)];
}

let animationId;

function updateAnimation(newSpeed) {
    if (animationId) clearInterval(animationId);

    document.documentElement.style.setProperty('--speed', newSpeed);
    animationId = setInterval(() => {

        value1.innerText = getRandomValue();
        value2.innerText = getRandomValue();
        value3.innerText = getRandomValue();
    
    }, 1000/newSpeed);
}

btnStop.onclick = function () {
    if(this.innerHTML === 'STOP') {
        this.innerHTML = 'SPIN';
        clearInterval(animationId);
        value1.classList.remove('animate');
        value2.classList.remove('animate');
        value3.classList.remove('animate');
    } else {
        this.innerHTML = 'STOP';
        updateAnimation(5);
        value1.classList.add('animate');
        value2.classList.add('animate');
        value3.classList.add('animate');
    }
}