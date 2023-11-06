/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';

// start the Stimulus application
import './bootstrap';

/************************************ */

// const body = document.querySelector('#rain');
// const stop = document.querySelector('#stop');
// const icone = document.getElementById('iconefunction')
// const sentence = document.getElementById('sentencefunction')
// let bool = true;

// stop.addEventListener('click', () => {
//     if (bool == true) {
//         bool = false;
//         sentence.textContent = "Play"
//         icone.className = "fa-solid fa-play"
//     } else {
//         bool = true;
//         sentence.textContent = "Stop"
//         icone.className = "fa-solid fa-stop"
//     }
// })

function intAlea(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



const txtAnim = document.getElementById('h1presentation');
if (txtAnim) {
    let typewriter = new Typewriter(txtAnim, {
        deleteSpeed: 30,
        loop: true
    });
    typewriter
        .changeDelay(80)
        .pauseFor(1250)
        .typeString('Bienvenue !')
        .pauseFor(1000)
        .deleteChars(11)
        .pauseFor(300)
        .typeString('Moi c\'est <strong> Nicolas Vanlauwe !</strong>')
        .pauseFor(1000)
        .deleteChars(2)
        .pauseFor(300)
        .typeString(', Dev Full-Stack')
        .pauseFor(1000)
        .deleteChars(14)
        .pauseFor(300)
        .typeString(' <em>Apprenti</em> Dev Full-Stack')
        .pauseFor(2000)
        .deleteChars(10)
        .pauseFor(300)
        .typeString('<span style="color: #FF7D03"> Web</span>')
        .pauseFor(1000)
        .deleteChars(4)
        .pauseFor(300)
        .typeString('<span style="color: #FFE000"> JavaScript</span>')
        .pauseFor(1000)
        .deleteChars(11)
        .pauseFor(300)
        .typeString('<span style="color: #8700FF"> PHP</span>')
        .pauseFor(10000)
        .start();
}







const down = document.querySelector('#down');
if (down) {
    down.addEventListener('click', () => {
        window.scrollTo({
            top: window.innerHeight,
            left: 0,
            behavior: "smooth"
        })
    })
}




/**************************************************** */

const card = document.querySelectorAll('.card-comp')
const btnDrop = document.querySelectorAll('.btn-top')
if (btnDrop) {
    // let toggleDown = false;

    for (let i = 0; i < btnDrop.length; i++) {
        let element = card[i];
        element.addEventListener("click", () => {
            const blocLinks = document.querySelector('#bloc-links' + i)
            if (btnDrop[i].classList.contains("false")) {
                blocLinks.style.height = `${blocLinks.scrollHeight}px`
                // toggleDown = true
                btnDrop[i].className = "fa-solid fa-angle-down btn-bottom fa-rotate-180 true"
                // return;
            } else {
                blocLinks.style.height = 0
                btnDrop[i].className = "fa-solid fa-angle-down btn-top false"
            }

            // toggleDown = false
        });
    }
}


/**************************************************** */

const ratio = .2

const options = {
    root: null,
    rootMargin: '0px',
    threshold: .2
}

const handleIntersect = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('reveal-top-visible')
            observer.unobserve(entry.target)
        } else {
        }
    })
}

const observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll('.reveal-top').forEach(function (r) {
    observer.observe(r)
})

/******************************* */
const handleIntersect1 = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('extend-true')
            observer.unobserve(entry.target)
        } else {
        }
    })
}

const observer1 = new IntersectionObserver(handleIntersect1, options);
document.querySelectorAll('.extend').forEach(function (r) {
    observer1.observe(r)
})


/***************** */


const handleIntersect2 = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('bg-reveal-visible')
            observer.unobserve(entry.target)
        } else {
        }
    })
}

const observer2 = new IntersectionObserver(handleIntersect2, options);
document.querySelectorAll('.bg-reveal').forEach(function (r) {
    observer2.observe(r)
})


/**************************************** */

const handleIntersect3 = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('appear-visible')
            observer.unobserve(entry.target)
        } else {
        }
    })
}

const observer3 = new IntersectionObserver(handleIntersect3, options);
document.querySelectorAll('.appear').forEach(function (r) {
    observer3.observe(r)
})

/******************* */

const handleIntersect4 = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('reveal-left-visible')
            observer.unobserve(entry.target)
        } else {
        }
    })
}

const observer4 = new IntersectionObserver(handleIntersect4, options);
document.querySelectorAll('.reveal-left').forEach(function (r) {
    observer4.observe(r)
})

// const toggleButton = document.getElementsByClassName('toggle-button')[0]
// const navbarLinks = document.getElementsByClassName('navbar-links')[0]

// toggleButton.addEventListener('click', () => {
//     navbarLinks.classList.toggle('active')
// })

// const toggleButton = document.getElementsByClassName('navbar-toggler')[0]
// const navbarlinks = document.getElementsByClassName('navbar-collapse')[0]

// toggleButton.addEventListener("click", () => {
//     navbarlinks.classList.toggle('active')
// })


// setInterval(rainFall, 50);

// function rainFall() {
//     if (bool == true) {
//         const iconeDrop = document.createElement('i');
//         let luck = Math.random();
//         if (luck <= 0.25) {
//             iconeDrop.classList.add('drop');
//             iconeDrop.classList.add('fas');
//             iconeDrop.classList.add('fa-computer');
//         } else if (luck <= 0.5) {
//             iconeDrop.classList.add('drop');
//             iconeDrop.classList.add('fas');
//             iconeDrop.classList.add('fa-computer-mouse');
//         } else if (luck <= 0.75) {
//             iconeDrop.classList.add('drop');
//             iconeDrop.classList.add('fas');
//             iconeDrop.classList.add('fa-database');
//         } else if (luck <= 1) {
//             iconeDrop.classList.add('drop');
//             iconeDrop.classList.add('fas');
//             iconeDrop.classList.add('fa-floppy-disk');
//         }

//         iconeDrop.style.fontSize = intAlea(15, 25) + 'px';
//         iconeDrop.style.animationDuration = 5 + 's';
//         iconeDrop.style.left = Math.random() * window.innerWidth + 'px'
//         iconeDrop.style.right = Math.random() * window.innerWidth + 'px'
//         iconeDrop.style.top = Math.random() * window.innerWidth + 'px'
//         iconeDrop.style.bottom = Math.random() * window.innerWidth + 'px'

//         body.appendChild(iconeDrop);

//         setTimeout(() => {
//             iconeDrop.remove();
//         }, 6000)
//     }
// }





