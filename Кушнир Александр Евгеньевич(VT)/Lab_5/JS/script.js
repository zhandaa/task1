const cursor = document.querySelector('.cursor');
let timeout;

//follow mouse on mousemove
document.addEventListener('mousemove', (e) => {
    let x = e.pageX;
    let y = e.pageY;

    cursor.style.top = e.clientY + 'px';
    cursor.style.left = e.clientX + 'px';
    cursor.style.display = 'block';

    function mouseStopped () {
        cursor.style.display = 'none';
    }
    clearTimeout(timeout)
    timeout = setTimeout(mouseStopped, 1000);
})

//cursor effects on mouseout
document.addEventListener('mouseout', (e) => {
    cursor.style.display = 'none';
})


//Change color with the help button
const button = document.querySelector('.button_color');
const body = document.querySelector('body');

button.onclick = function () {
    body.classList.toggle('light-theme');
}

//Mousemove parallax
const parallax = document.querySelector('.parallax');
const front = document.querySelector('.front_layer');
const back = document.querySelector('.back_layer');

const sFront = 150;
const sBack = 400;

parallax.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;

    front.style.transform = `
        translate(
            ${x / sFront}%,
            ${y / sFront}%
        )`;

    back.style.transform = `
        translate(
            ${x / sBack}%,
            ${y / sBack}%
        )`;
})
