const name = document.getElementById('name');
const name_error = document.getElementById('name_error');

const email=document.getElementById('email');
const email_error=document.getElementById('email_error');

const pass=document.getElementById('pass');
const pass_error=document.getElementById('pass_error');

const form = document.getElementById('form');

form.addEventListener('submit', (e)=>{

    var email_check = /^([A-Za-z0-9_.-]+)@([A-Za-z0-9_.-]+).([A-Za-z]{2,4})$/

    if(name.value==='' || name.value===null){
        e.preventDefault(),
        name_error.innerHTML='put a valid name';
    }

    if(!email.value.match(email_check)){
         e.preventDefault(),
        email_error.innerHTML = 'put a valid email';
    }

    if(pass.value==='' || pass.value===null){
        e.preventDefault(),
        pass_error.innerHTML='put a valid password';
    }

    if(pass.value.length < 8){
        e.preventDefault(),
        pass_error.innerHTML='Password cannot be less than 5 character'
    }

    if(pass.value.length > 15){
        e.preventDefault(),
        pass_error.innerHTML='Password cannot be greater than 15 character'
    }
    
    if(pass.value==='password'){
        e.preventDefault(),
        pass_error.innerHTML='Change your password'
    }
    
})