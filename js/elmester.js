
// Save Colors to local storage
let localColors = localStorage.getItem('opt-color');
if (localColors !== null){
    document.documentElement.style.setProperty('--main-color', localColors);
    document.querySelectorAll('.uls li').forEach(element => {
        element.classList.remove('active');
        if(element.dataset.color === localColors){
            element.classList.add('active');
        }
    });
}

let bgOpt = true;
let backInterval;

// Save Background to local storage
let localBackground = localStorage.getItem('opt-back');
if (localBackground !== null){
    
    if(localBackground === 'true'){
        bgOpt = true;
    } else{
        bgOpt = false;
    }

    document.querySelectorAll('.opt-bg span').forEach(element => {
        element.classList.remove('active');
    });
    
    if(localBackground === 'true'){
        document.querySelector('.yes').classList.add('active');
    } else {
        document.querySelector('.no').classList.add('active');
    }
}




// Enable Setting box button
let icon = document.querySelector('.setting i').onclick = function(){
    this.classList.toggle('fa-spin');
    document.querySelector('.setting').classList.toggle('open');
}

// Switch Colors
const colors = document.querySelectorAll('.uls li');

colors.forEach(li => {
    li.addEventListener('click', function(e){
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color);
        localColors = localStorage.setItem('opt-color', e.target.dataset.color)
        e.target.parentElement.querySelectorAll('.active').forEach(element => {
            element.classList.remove('active');
        })
        e.target.classList.add('active');
    });
});

// Activate the random background options
let backs = document.querySelectorAll('.opt-bg span');

backs.forEach(span => {
    span.addEventListener('click', function(e){
        e.target.parentElement.querySelectorAll('.active').forEach(element => {
            element.classList.remove('active');
        })
        e.target.classList.add('active');

        if(e.target.dataset.bg == 'yes'){
            bgOpt = true;
            randomBg();
            localBackground = localStorage.setItem('opt-back', true)
        } else{
            bgOpt = false;
            clearInterval(backInterval);
            localBackground = localStorage.setItem('opt-back', false)
        }
    });
});

let landPage = document.querySelector(".land-page");
let arrayImgs = ['1.png', '2.png', '3.png'];

function randomBg(){
        backInterval = setInterval(() => {
            let randomNum = Math.floor(Math.random() * arrayImgs.length);
            landPage.style.backgroundImage = 'url("imgs/' + arrayImgs[randomNum] + '")';
        }, 1000)
}
