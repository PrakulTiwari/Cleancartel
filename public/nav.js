const burger = document.querySelector('nav .logo-burger .burger');
const filling1 = document.querySelector('nav .logo-burger .burger .filling1');
const filling2 = document.querySelector('nav .logo-burger .burger .filling2');
const filling3 = document.querySelector('nav .logo-burger .burger .filling3');
const menu = document.querySelector('nav .menu');
const a = document.querySelector('nav .menu li .a')
const b = document.querySelector('nav .menu li .b')
const c = document.querySelector('nav .menu li .c')
const logo = document.querySelector('nav .logo-burger li a')

const open = () => {
    menu.style.display = 'flex';
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
const close = () => {
    filling1.style.background = '#ffd700';
    filling2.style.background = '#ffd700';
    filling3.style.background = '#ffd700';
    filling1.style.transform = 'rotateZ(0deg)';
    filling1.style.animation = 'filling1RotateBack 0.4s linear';
    filling3.style.transform = 'rotateZ(0deg)';
    filling3.style.animation = 'filling3RotateBack 0.4s linear';
    filling2.style.opacity = '1';
    menu.style.animation = 'menuBack 0.5s linear';
    menu.style.opacity = '0';
    setTimeout(() => menu.style.display = 'none', 500)
}
const menoi = () => {
    a.addEventListener('click', () => {
        close();
    })
    b.addEventListener('click', () => {
        close();
    })
    c.addEventListener('click', () => {
        close();
    })
}

var clicks = 0;
burger.onclick = function () {
    clicks += 1;
};

var mouses = 0;
burger.onmouseenter = function () {
    mouses += 1;
};

burger.addEventListener('click', () => {
    if (clicks % 2 != 0) {
        open();
        menoi()
        logo.addEventListener('click', () => {
            close();
        })

    }
    else {
        close();
    }
});

burger.addEventListener('mouseenter', () => {
    if (mouses % 2 != 0) {
        open();
        menoi()
        logo.addEventListener('click', () => {
            close();
        })
    }
    else {
        close();
    }
});