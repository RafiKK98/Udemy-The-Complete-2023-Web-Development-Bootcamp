const drumButtons = document.querySelectorAll('.drum');
const numberOfDrumButtons = drumButtons.length;

const tom1 = new Audio('sounds/tom-1.mp3');
const tom2 = new Audio('sounds/tom-2.mp3');
const tom3 = new Audio('sounds/tom-3.mp3');
const tom4 = new Audio('sounds/tom-4.mp3');
const snare = new Audio('sounds/snare.mp3');
const crash = new Audio('sounds/crash.mp3');
const kickBass = new Audio('sounds/kick-bass.mp3');

for (let i = 0; i < numberOfDrumButtons; i++) {
    drumButtons[i].addEventListener('click', function () {
        let buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
    });
}

document.addEventListener('keypress', (event) => {
    makeSound(event.key);
});


function makeSound(key) {
    switch (key) {
        case 'w':
            tom1.currentTime = 0;
            tom1.play();
            break;
        case 'a':
            tom2.currentTime = 0;
            tom2.play();
            break;
        case 's':
            tom3.currentTime = 0;
            tom3.play();
            break;     
        case 'd':
            tom4.currentTime = 0;
            tom4.play();
            break;
        case 'j':
            snare.currentTime = 0;
            snare.play();
            break;
        case 'k':
            crash.currentTime = 0;
            crash.play();
            break;
        case 'l':
            kickBass.currentTime = 0;
            kickBass.play();
            break;
        default:
            console.log(key);
            break;
    }
}