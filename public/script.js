const restoration = document.querySelector('.intro .restoration')
const restorationAfter = document.querySelector('.intro .restoration-after')
const heading = document.querySelector('.intro .change')
const introbar = document.querySelector('.intro .bar')
var verified = false

const headtext = [
    'NORMAL',
    'LUXURY'
]
const images = [
    "./images/GucciEdit.png",
    "./images/LacEdit.png",
    "./images/LouLedit.png",
    "./images/YSLedit.png",
    "./images/LouMEdit.png",
    "./images/LVedit.png",
    "./images/BalEdit.png"

]
var j = 0;

// setInterval(() => {
//     fetch('/')
//         .then(result => result.json())
//         .then(data => {
//             verified = true;
//             window.location.href = data.verified;
//         })
//         .catch(err => console.log(''))
// }, 1)

// window.onload(() => {
//     if (verified) {
//         document.querySelector('.razorpay script').click();
//     }
// })

const updatetext = () => {
    heading.innerHTML = headtext[j];
    setInterval(() => {
        if (j < 1) {
            j += 1;
        }
        else {
            j = 0;
        }
        heading.innerHTML = headtext[j];
        // heading.style.animation = 'text 0.5s ease-out'
        // setTimeout(() => heading.style.animation = 'none', 500)
    }, 2000)
}

var i = 0;
const len = images.length;
console.log(len);

const update = () => {
    restoration.src = images[i];
    setInterval(() => {
        if (i < len) {
            if (i == 6) {
                i = 0;
            }
            else {
                i += 1;
            }
        }
        else {
            i = 0;
        }
        restoration.src = images[i];
        var barwidth = 50 * i;
        introbar.style.width = barwidth + 'px';
    }, 5000)
}

// window.addEventListener('scroll', () => {
//     const scrolly = window.scrollY; 
//     const winHeught = window.innerWidth;
//     // console.log(winHeught)
//     if (scrolly > 100) {
//         nav.style.position = 'fixed';
//         nav.style.height = '12.5vh';
//         nav.style.boxShadow = '3px 3px 5px rgb(172, 172, 172)';
//         // triplet.style.display = 'none';
//         navImg.style.height = '7.5vh';
//     }
//     else if (scrolly == 0 && winHeught > 800) {
//         nav.style.position = 'unset'
//         nav.style.boxShadow = 'none';
//         nav.style.height = '20vh';
//         // triplet.style.display = 'flex';
//         navImg.style.height = '12.5vh';
//     }
//     else if (scrolly == 0 && winHeught < 800) {
//         nav.style.position = 'unset'
//         nav.style.boxShadow = 'none';
//         nav.style.height = '12.5vh';
//         navImg.style.height = '7.5vh';
//     }
// })



//calling all funtions
update()
updatetext()
