const input = document.querySelector('.login-input');
const button = document.querySelector('.login-button'); 
const form = document.querySelector('.login-form')

const validateInput = ({ target }) => {
    if (target.value.length > 1) {
        button.removeAttribute('disabled');
        return;
    } 
    button.setAttribute('disabled', '');
};

const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('player', input.value);
    window.location ='./Src/pages/game.html';
};

window.addEventListener('DOMContentLoaded', () => {
    const storedValue = localStorage.getItem('player');
    if (storedValue) {
        input.value = storedValue;
        validateInput({ target: input });
}});


input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);