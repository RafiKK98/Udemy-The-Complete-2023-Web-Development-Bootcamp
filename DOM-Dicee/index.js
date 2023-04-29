// Query selecting variables
let h1 = document.querySelector('h1');
let img1 = document.querySelector('.img1');
let img2 = document.querySelector('.img2');

// Random numbers
let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Change src attributes of the images 
img1.setAttribute('src', `images/dice${randomNumber1}.png`);
img2.setAttribute('src', `images/dice${randomNumber2}.png`);

// console.log(randomNumber1);

// Check score
if (randomNumber1 > randomNumber2) {
    h1.innerText = "🚩 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
    h1.innerText = "Player 2 Wins! 🚩";
} else {
    h1.innerText = "Draw";
}
