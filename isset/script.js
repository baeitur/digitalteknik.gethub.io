const menuToggel = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggel.addEventListener('click', function () {
    nav.classList.toggle("slide");
});



const boxService = document.querySelectorAll('.box-service');
var boxServiceHover = document.querySelectorAll('.box-service');


for (let i = 0; i < boxService.length; i++) {

    boxService[i].addEventListener('mouseover', function () {
        boxService[i].style.cursor = "pointer";
        boxService[i].style.backgroundColor = "#eed9d9";
    });

    boxService[i].addEventListener('mouseout', function () {
        boxService[i].style.backgroundColor = "#f7f7f7";
    });

}