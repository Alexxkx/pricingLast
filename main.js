const openPopUps = document.querySelectorAll('.open_pop_up'); // Все кнопки с классом open_pop_up
const closePopUp = document.querySelector('.pop_up_close');
const popUp = document.querySelector('.pop_up');

openPopUps.forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        popUp.classList.add('active');
    });
});

closePopUp.addEventListener('click', function() {
    popUp.classList.remove('active');
});

