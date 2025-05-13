let addOne = document.querySelector("#btn-one");
let addTwo = document.querySelector("#btn-two");
let addThree = document.querySelector("#btn-three");

let homeScore = document.querySelector("#home-score");
let guestScore = document.querySelector("#guest-score");

function addHomeOne() {
    let score = parseInt(homeScore.innerText);
    score += 1;
    homeScore.innerText = score;
}

function addHomeTwo() {
    let score = parseInt(homeScore.innerText);
    score += 2;
    homeScore.innerText = score;
}

function addHomeThree() {
    let score = parseInt(homeScore.innerText);
    score += 3;
    homeScore.innerText = score;
}

addOne.addEventListener("click", () => {
    let score = parseInt(guestScore.innerText);
    score += 1;
    guestScore.innerText = score;
});

addTwo.addEventListener("click", () => {
    let score = parseInt(guestScore.innerText);
    score += 2;
    guestScore.innerText = score;
});

addThree.addEventListener("click", () => {
    let score = parseInt(guestScore.innerText);
    score += 3;
    guestScore.innerText = score;
});

function reset() {
    homeScore.innerText = 0;
    guestScore.innerText = 0;
}