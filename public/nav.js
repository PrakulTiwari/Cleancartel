const burger = document.querySelector('nav .logo-burger .burger');
const filling1 = document.querySelector('nav .logo-burger .burger .filling1');
const filling2 = document.querySelector('nav .logo-burger .burger .filling2');
const filling3 = document.querySelector('nav .logo-burger .burger .filling3');
const menu = document.querySelector('nav .menu');

var clicks = 0;
burger.onclick = function() {
    clicks += 1;
};

var mouses = 0;
burger.onmouseenter = function() {
    mouses += 1;
};

burger.addEventListener('click', () => {
    if (clicks % 2 != 0) {
        burger.style.border = '3px solid rgb(255, 129, 150)';
        filling1.style.background = 'rgb(255, 129, 150)';
        filling2.style.background = 'rgb(255, 129, 150)';
        filling3.style.background = 'rgb(255, 129, 150)';
        filling1.style.transform = 'translate(0%,400%) rotateZ(45deg)';
        filling1.style.animation = 'filling1Rotate 0.4s linear';
        filling3.style.transform = 'translate(0%,-400%) rotateZ(-45deg)';
        filling3.style.animation = 'filling3Rotate 0.4s linear';
        filling2.style.opacity = '0';
        menu.style.opacity = '1';
        menu.style.animation = 'menu 0.5s linear';
    }
    else {
        burger.style.border = '3px solid rgb(223, 223, 223)';
        filling1.style.background = 'rgb(223, 223, 223)';
        filling2.style.background = 'rgb(223, 223, 223)';
        filling3.style.background = 'rgb(223, 223, 223)';
        filling1.style.transform = 'rotateZ(0deg)';
        filling1.style.animation = 'filling1RotateBack 0.4s linear';
        filling3.style.transform = 'rotateZ(0deg)';
        filling3.style.animation = 'filling3RotateBack 0.4s linear';
        filling2.style.opacity = '1';
        menu.style.animation = 'menuBack 0.5s linear';
        menu.style.opacity = '0';
    }
});

burger.addEventListener('mouseenter', () => {
    if (mouses % 2 != 0) {
        burger.style.border = '3px solid rgb(255, 129, 150)';
        filling1.style.background = 'rgb(255, 129, 150)';
        filling2.style.background = 'rgb(255, 129, 150)';
        filling3.style.background = 'rgb(255, 129, 150)';
        filling1.style.transform = 'translate(0%,400%) rotateZ(45deg)';
        filling1.style.animation = 'filling1Rotate 0.4s linear';
        filling3.style.transform = 'translate(0%,-400%) rotateZ(-45deg)';
        filling3.style.animation = 'filling3Rotate 0.4s linear';
        filling2.style.opacity = '0';
        menu.style.opacity = '1';
        menu.style.animation = 'menu 0.5s linear';
    }
    else {
        burger.style.border = '3px solid rgb(223, 223, 223)';
        filling1.style.background = 'rgb(223, 223, 223)';
        filling2.style.background = 'rgb(223, 223, 223)';
        filling3.style.background = 'rgb(223, 223, 223)';
        filling1.style.transform = 'rotateZ(0deg)';
        filling1.style.animation = 'filling1RotateBack 0.4s linear';
        filling3.style.transform = 'rotateZ(0deg)';
        filling3.style.animation = 'filling3RotateBack 0.4s linear';
        filling2.style.opacity = '1';
        menu.style.animation = 'menuBack 0.5s linear';
        menu.style.opacity = '0';
    }
});