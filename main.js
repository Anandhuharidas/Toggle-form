const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const toggle = document.querySelector('.toggle');
const popup = document.querySelector('.btn-popup');
const iconClose = document.querySelector('.icon-close');


registerLink.addEventListener('click', ()=>{
    toggle.classList.add('active');
});

loginLink.addEventListener('click', ()=>{
    toggle.classList.remove('active');
});


popup.addEventListener("click", ()=>{
    toggle.classList.add("active-popup");
});

iconClose.addEventListener("click", ()=>{
    toggle.classList.remove("active-popup");
});