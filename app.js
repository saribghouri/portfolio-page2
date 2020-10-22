 const hamburger = document.querySelector('.header .nac-bar .nav-list .hamburger');
 const mobile_menu = document.querySelector('.header .nac-bar .nav-list .ul');
const header =document.querySelector('header.container');

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
})
