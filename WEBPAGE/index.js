const wrapper= document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const RegistrationLink = document.querySelector('.register-link');
const Login = document.querySelector('.btnLogin-popoup');
const Close = document.querySelector('.icon-close')

RegistrationLink.addEventListener('click',()=>{
    wrapper.classList.add('active');
})
loginLink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
})
Login.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');

})
Close.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup');

})
var typingEffect = new Typed(".form-title h1",{
    strings : ["Artist ", "Influencer","Enterprenuer"],
    loop : true,
    typeSpeed : 80,
    backSpeed : 50,
    backDelay : 800,
})
window.onscroll = function() {
    scroll();
 };
 
 function scroll() {
    if (
       document.body.scrollTop > 10 ||
       document.documentElement.scrollTop > 10
    ) {
       document.getElementById("navbar").style.top = "-100px";
    } else {
       document.getElementById("navbar").style.top = "0";
    }
 }