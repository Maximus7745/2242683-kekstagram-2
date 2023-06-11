import {openBigPhoto} from './big_pictures.js';
import {createPhotoes} from './data.js';
let picture_template = document.querySelector('#picture').content;
let picture = picture_template.querySelector('a');
var pictures = createPhotoes();
let pics = document.querySelector('.pictures');
pictures.forEach(pic => {
    let new_picture = picture.cloneNode(true);
    new_picture.querySelector('img').src = pic.url;
    new_picture.querySelector('p .picture__likes').textContent = pic.likes;
    new_picture.querySelector('p .picture__comments').textContent = pic.comments.length;
    new_picture.addEventListener('click', function() { openBigPhoto(pic);});
    pics.append(new_picture);
});
