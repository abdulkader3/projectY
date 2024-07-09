let button = document.querySelector('.button');
let input = document.querySelector('.input');
let result = document.querySelector('.result');

button.addEventListener('click', () => {
    if (input.value == '') {
        alert('kiso likka lon');
    } else {
        result.innerHTML = '';
        for (let i = 1; i < 11; i++) {
            result.innerHTML += input.value + ' X ' + i + ' = ' + (input.value * i) + '<br>';
        }
    }
});


// 404