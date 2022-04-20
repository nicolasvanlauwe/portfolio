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

const body = document.body;

// setInterval(rainFall, 50);

// function rainFall() {
//     const waterDrop = document.createElement('i');

//     waterDrop.classList.add('fas');
//     waterDrop.classList.add('fa-tint');
//     waterDrop.style.fontSize = Math.random() * 7 + 'px';
//     waterDrop.style.animationDuration = Math.random() * 2 + 's';
//     waterDrop.style.opacity = Math.random() + 0.3;
//     // waterDrop.style.left = Math.random() * window.innerWidth + 'px'
//     waterDrop.style.right = Math.random() * window.innerWidth + 20 + 'px'

//     body.appendChild(waterDrop);

//     setTimeout(() => {
//         waterDrop.remove();
//     }, 1000)

// }

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    window.scrollTo({
        top: 1000,
        left: 0,
        behavior: "smooth"
    })
})
