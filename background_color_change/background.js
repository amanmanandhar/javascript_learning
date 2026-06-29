const red = document.getElementById('red')
const blue = document.getElementById('blue')
const green = document.getElementById('green')
const reset = document.getElementById('reset')

red.addEventListener('click',function(){
    document.body.style.backgroundColor = 'red';
});

blue.addEventListener('click', function(){
    document.body.style.backgroundColor = 'blue';
});

green.addEventListener('click', function(){
    document.body.style.backgroundColor = 'green';
});

reset.addEventListener('click', function(){
    document.body.style.backgroundColor = 'white';
})