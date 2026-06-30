const form = document.getElementById('loginForm');
const username = document.getElementById('username');
const password = document.getElementById('password');
const error = document.getElementById('error');

form.addEventListener('submit', function(e){
    e.preventDefault()
    try{
        error.innerText="";
        if(username.value.trim()==='' && password.value.trim()===''){
            throw new Error('Please fill all the required fields');
        }
        if(username.value.trim()===''){
            throw new Error('Please fill username');
        }
        if(password.value.trim()===''){
            throw new Error('Please fill the pasword');
        }
        if(password.value.length < 8){
            throw new Error('Password must be at least of 8 characters');
        }
        error.classList.remove('text-danger');
        error.classList.add('text-success');
        error.innerText='Login successful';
    }
    catch(err){
        error.classList.remove('text-success');
        error.classList.add('text-danger');
        error.innerText = err.message
    }
})