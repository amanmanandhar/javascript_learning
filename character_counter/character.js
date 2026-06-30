const message = document.querySelector('#message')
const counter = document.querySelector('#counter')

message.addEventListener('input', function(){
    counter.textContent = message.value.length;
    if (message.value.length > 10){
        counter.classList.add('text-danger');
    }
    else{
        counter.classList.remove('text-danger');
    }
})