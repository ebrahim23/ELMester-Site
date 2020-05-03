let icon = document.querySelector('.setting i').onclick = function(){
    this.classList.toggle('fa-spin');
    document.querySelector('.setting').classList.toggle('open');
}
/////////////////////////////////////////////////////////////////////////////////
const colors = document.querySelectorAll('.uls li');

colors.forEach(li => {
    li.addEventListener('click', function(e){
        this.classList.add('active');
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color);
    });
});
/////////////////////////////////////////////////////////////////////////////////
let landPage = document.querySelector(".land-page");
let arrayImgs = ['1.png', '2.png', '3.png'];

setInterval(() => {
    let randomNum = Math.floor(Math.random() * arrayImgs.length);
    landPage.style.backgroundImage = 'url("imgs/' + arrayImgs[randomNum] + '")';
}, 5000)