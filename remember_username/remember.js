const username = document.getElementById('username')
const btn = document.getElementById('saveBtn')
const displayName = document.getElementById('displayName')

const savedUsername = localStorage.getItem('username');

if (savedUsername){
    displayName.textContent = savedUsername;
    username.value = savedUsername;
}

btn.addEventListener('click', function(){
    const name = username.value.trim();

    if(name === ''){
        alert('Please enter username');
        return;
    }
    localStorage.setItem('username', name)
    displayName.textContent = name;
})