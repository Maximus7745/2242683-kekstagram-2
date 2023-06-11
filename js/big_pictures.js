//import {createPhotoes} from './data.js';
//var pictures = createPhotoes();
let big_picture = document.querySelector('.big-picture');
export function openBigPhoto(picture){
    big_picture.classList.remove('hidden');
    big_picture.querySelector('.big-picture__img').children[0].src = picture.url;
    big_picture.querySelector('.likes-count').textContent = picture.likes;
    big_picture.querySelector('.comments-count').textContent = picture.comments.length;
    let social__comments = big_picture.querySelector('.social__comments');
    let remove_list = social__comments.querySelectorAll('li.social__comment');
    let social__comment_old = big_picture.querySelector('li.social__comment').cloneNode(true);
    remove_list.forEach(element => {
        social__comments.removeChild(element);
    });
    picture.comments.forEach(comment => {
        let social__comment = social__comment_old.cloneNode(true);
        let image = social__comment.querySelector('img');
        image.src = comment.avatar;
        image.alt = comment.name;
        social__comment.querySelector('p').textContent = comment.message;
        social__comments.append(social__comment);
    });
    big_picture.querySelector('.social__caption').textContent = picture.description;
    big_picture.querySelector('.social__comment-count').setAttribute('hidden', true);
    big_picture.querySelector('.comments-loader').setAttribute('hidden', true);
    document.querySelector('body').classList.add('modal-open');
    document.addEventListener('keydown', function(evt) {
        if (evt.keyCode === 27) {
            closeBigPhoto()
        }
      });
}
function closeBigPhoto(){
    document.querySelector('body').classList.remove('modal-open');
    big_picture.classList.add('hidden');
    document.removeEventListener('keydown', function(evt) {
        if (evt.keyCode === 27) {
            closeBigPhoto()
        }
      });
}
let button_cancel = document.querySelector('#picture-cancel');
button_cancel.addEventListener('click', closeBigPhoto);
