window.addEventListener('load',function (){
    const loadingScreen = document.querySelector('#dashboard');
    loadingScreen.style.display = 'none';

    const loadingScreen1 = document.querySelector('.main');
    loadingScreen1.style.display = 'block';

});

$(document).ready(function (){
    $('#signInBtn').eq(0).on('click',function (){

        const loadingScreen1 = document.querySelector('.main');
        loadingScreen1.style.display = 'none';

        const loadingScreen2 = document.querySelector('#dashboard');
        loadingScreen2.style.display = 'flex';
    });
});

const navItems = document.querySelectorAll(".nav-item");

navItems.forEach((navItem, i) => {
    navItem.addEventListener("click", () => {
        navItems.forEach((item, j) => {
            item.className = "nav-item";
        });
        navItem.className = "nav-item active";
    });
});