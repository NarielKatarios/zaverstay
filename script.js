// валидация формы красным текстом

let input = document.querySelector('#messages');
// let form = document.querySelector('.fields');

let submitButton = document.querySelector('.submit-button');

input.oninput = function () {

    if ((input.value.length > 200)||(input.value.length < 10)) {
        input.classList.add('warning');
        submitButton.disabled = true;
    } else {
        input.classList.remove('warning');
        submitButton.disabled = false;
    }
};

// выбор статей по тегу

let articles = document.querySelectorAll('.article');
let filter = document.querySelector('.filter');

filter.onchange = function () {
    for (let article of articles) {
        if ((article.dataset.category !== filter.value) && (filter.value !== 'all') && (filter.value !== 'choose')) {
            article.classList.add('hidden');
        } else {
            article.classList.remove('hidden');
        }
    }
};