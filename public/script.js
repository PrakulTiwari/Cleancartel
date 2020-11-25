const nav = document.querySelector('nav')
const navImg = document.querySelector('nav .logo')
const triplet = document.querySelector('nav ul li ul')
const restoration = document.querySelector('.intro .restoration')
const restorationAfter = document.querySelector('.intro .restoration-after')
const heading = document.querySelector('.intro .change')
const introbar = document.querySelector('.intro .bar')

const headtext = [
    'NORMAL',
    'LUXURY',
    'PREMIUM'
]
const images = [
    "https://shoespa.co.uk/wp-content/uploads/2020/08/Gucci-A-Before.jpg",
    "https://shoespa.co.uk/wp-content/uploads/2020/08/Balenciaga-B-Before.jpg",
    "https://shoespa.co.uk/wp-content/uploads/2020/08/Churchs1.jpg",
    "https://shoespa.co.uk/wp-content/uploads/2020/08/Chanel-bagbefore-b.jpg",
    "https://shoespa.co.uk/wp-content/uploads/2020/08/07Saint_Laurent-before-1-2-2-copy.jpg",
    "https://shoespa.co.uk/wp-content/uploads/2020/08/06Lacoste-before-1-2-copy.jpg",
    "https://shoespa.co.uk/wp-content/uploads/2020/08/Louboutin-4-Before.jpg"
]
var j = 0;
const updatetext = () => {
    heading.innerHTML = headtext[j];
    setInterval(() => {
        if (j < 2) {
            j += 1;
        }
        else {
            j = 0;
        }
        heading.innerHTML = headtext[j];
        // heading.style.animation = 'text 0.5s ease-out'
        // setTimeout(() => heading.style.animation = 'none', 500)
    }, 1000)
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



window.addEventListener('scroll', () => {
    const scrolly = window.scrollY;
    const winHeught = window.innerWidth;
    // console.log(winHeught)
    if (scrolly > 100) {
        nav.style.position = 'fixed';
        nav.style.height = '12.5vh';
        nav.style.boxShadow = '3px 3px 5px rgb(172, 172, 172)';
        triplet.style.display = 'none';
        navImg.style.height = '7.5vh';
    }
    else if (scrolly == 0 && winHeught > 800) {
        nav.style.position = 'unset'
        nav.style.boxShadow = 'none';
        nav.style.height = '20vh';
        triplet.style.display = 'flex';
        navImg.style.height = '12.5vh';
    }
    else if (scrolly == 0 && winHeught < 800) {
        nav.style.position = 'unset'
        nav.style.boxShadow = 'none';
        nav.style.height = '12.5vh';
        navImg.style.height = '7.5vh';
    }
})



//calling all funtions
update()
updatetext()