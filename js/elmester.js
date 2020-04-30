let landPage = document.querySelector(".land-page");

let arrayImgs = ['../imgs/1.png', '../imgs/2.png', '../imgs/3.png'];

setInterval(() => {
    let randomNum = Math.floor(Math.random() * arrayImgs.length);

    landPage.style.backgroundImage = 'url("../imgs/' + arrayImgs[randomNum] + '")';
}, 5000)