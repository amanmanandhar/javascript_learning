let count=0;

const counting = document.getElementById("count");
const btn = document.getElementById("btn");

btn.addEventListener('click', function(){
    count++;
    counting.innerText = count;
})
