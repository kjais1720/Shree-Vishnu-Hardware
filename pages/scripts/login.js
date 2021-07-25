// const loginForm = document.getElementById('login');
// const signupForm = document.getElementById('signup');
// const loginButton = document.getElementsByClassName('in');
// const signupButton = document.getElementsByClassName('up');

const nav = $(".nav")
const navToggle = $('#nav-icon')

var prevScrollPos = window.pageYOffset;

navToggle.click(()=>{
    navToggle.toggleClass('open')
    nav.toggleClass("active")
})
window.onscroll = ()=>{
    console.log('nav-called')
    navToggle.removeClass('open')
    nav.removeClass("active")

    var currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos){
        nav.css("top",'2vw')
    } else {
        nav.css('top','-200px')
    }
    prevScrollPos = currentScrollPos
}


const loginForm = $('#login');
const signupForm = $('#signup');
const loginButton = $('.in');
const signupButton = $('.up');


//add event listener to login button to change toggle the class 'hidden', on click
signupButton.click(()=>{
    loginForm.addClass('hidden');
    signupButton.addClass('btn-focus')
    loginButton.removeClass('btn-focus')
    signupForm.removeClass('hidden');
    $('.login-icon').attr('src', '../images/undraw_Login_re_4vu2.svg')
})

loginButton.click(()=>{
    $('.login-icon').attr('src','../images/undraw_secure_login_pdn4.svg')
    loginForm.removeClass('hidden');
    signupButton.removeClass('btn-focus')
    loginButton.addClass('btn-focus')
    signupForm.addClass('hidden');
})

const form = document.forms["sign-up"];
const emailCheck = /^[a-zA-z0-9_]{3,}@[a-z]{3,}.[a-z.]{2,6}$/g;
const passwordCheck = /^[A-Z]{1,}[a-z]{1,}[^\w\d]{1,}[0-9]{1,}$/;


function validation(){
    console.log("called")
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    const errorEmail = document.getElementById("erroremail")
    const errorPassword = document.getElementById("errorpassword")
    
    console.log(email, password)
    
    if (emailCheck.test(email)){
        errorEmail.innerHTML=''
    } else{
        errorEmail.innerHTML="**Invalid email"
        return false
    }
    
    if (passwordCheck.test(password)){
        errorPassword.innerHTML=''
    } else {
        errorPassword.innerHTML="**Password must contain atleast a lowercase character, an uppercase character, a number and a special character"
        return false
    }
}


// form.submit(e=>{
//    var check= validation()
// })

const scriptURL = 'https://script.google.com/macros/s/AKfycbzqh6znP9RuRN_fMGgxO-xuJOKmfIJHijn3GmuB3SuC84zz8uIL1kVQrjTEf_Szyz7k/exec'

form.addEventListener('submit', e => {
    e.preventDefault()

    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => alert("Thanks for Signing up..! Keep shopping..."))
        .catch(error => console.error('Error!', error.message))
})