const cards = document.querySelectorAll('.card')

cards.forEach(card => {
    card.addEventListener('click', function(){
        cards.forEach(c => c.classList.remove('active'));
        this.classList.add('active');
    })
})