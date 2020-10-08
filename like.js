let likes = document.querySelector('.likes');
let likesNumber = document.querySelector('.likes-number');

likes.onclick = function () {
    if (likes.classList.contains('added')) {
        likesNumber.textContent--;
    } else {
        likesNumber.textContent++;
    }

    likes.classList.toggle('added');
};
// новый комментарий

let comments = document.querySelector('.comments');
let input = document.querySelector('#messages');
let inputName = document.querySelector('#username');
let form = document.querySelector('.fields');


form.onsubmit = function (evt) {
    evt.preventDefault();
    let newComment = document.createElement('div');
    newComment.classList.add('comment');
    let newCommentDiv = document.createElement('div');
    newCommentDiv.classList.add('name');
    newCommentDiv.classList.add('comment-three');
    let newCommentP = document.createElement('p');

    newCommentDiv.textContent = inputName.value;
    newCommentP.textContent = input.value;
    input.value = '';

    newComment.append(newCommentDiv);
    newComment.append(newCommentP);
    comments.append(newComment);
};

// валидация формы красным текстом

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
