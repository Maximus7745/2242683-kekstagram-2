import {getRandomNum} from './util.js';
let comentMessages =['Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
let names = ['Абакум', 'Абрам', 'Абросим', 'Аввакум', 'Август', 'Авдей', 'Авдий', 'Авель', 'Авенир', 'Аверий', 'Аверкий', 'Аверьян'];
export function createPhotoes(){
    let lastCommentId = 30;
    let photoes = new Array(25);
    for(let i = 1; i < 26; i++){
        let photo =    { id : i,
        url: 'photos/' + i + '.jpg',
        description: 'description',
        likes: getRandomNum(15, 200),
        comments: new Array(getRandomNum(1,3))
        }
        for(let j = 0; j < photo.comments.length; j++){
            photo.comments[j] = {
                id: lastCommentId,
                avatar: 'img/avatar-' + getRandomNum(1, 6) + '.svg',
                message: comentMessages[getRandomNum(0,5)],
                name: names[getRandomNum(0,11)]
              };

        }
        photoes.push(photo);
        lastCommentId++;
    }
    return photoes;

}