/*jshint esversion: 6 */

"use strict";

document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('hamburger').classList.toggle('open');
    document.getElementById('nav').classList.toggle('open');
});

let currentIndex = 0;
let currentGrapes = 'red';

const wines = {
    red: [
        {
            title: 'Вино Sauska, "Cuvee 7"',
            ratio: '4,1 балла',
            price: {
                glass: '0,25 л. / 650 ₽',
                bottle: '0,75 л. / 6500 ₽',
            },
            grapes: [
                {title: 'Мерло', percent: 47},
                {title: 'Каберне Совиньон', percent: 25},
                {title: 'Каберне Фран', percent: 18},
                {title: 'Сира', percent: 10},
            ],
            image: 'sauska.png',
            properties: [
                {prop: 'Вино', value: 'Красное, сухое'},
                {prop: 'Регион', value: 'Венгрия, Виллань'},
                {prop: 'Производитель', value: 'Sauska'},
                {prop: 'Год', value: '2009'},
                {prop: 'Крепость', value: '15%'},
            ],
            text: 'Насыщенный тёмно-вишнёвый цвет. Аромат прелой листвы, дыма и вишнёвого корня. Вкус очень мягкий и бархатистый с вареньем из ежевики и горьковатым привкусом. Длинное послевкусие с лавровым листом',
        },
        {
            title: 'Chateau La Patache Pomerol',
            ratio: '3,9 балла',
            price: {
                glass: '0,25 л. / 450 ₽',
                bottle: '0,75 л. / 4500 ₽',
            },
            grapes: [
                {title: 'Мерло', percent: 80},
                {title: 'Каберне Фран', percent: 20},
            ],
            image: 'la_patache.png',
            properties: [
                {prop: 'Вино', value: 'Красное, сухое'},
                {prop: 'Регион', value: 'Франция, Помероль'},
                {prop: 'Производитель', value: 'Chateau La Patache'},
                {prop: 'Год', value: '2013'},
                {prop: 'Крепость', value: '13%'},
            ],
            text: 'Прекрасный бленд Мерло и Каберне Фран. В аромате очень точные ноты ежевики и малины, переплетенные с ароматным трюфелем. Вино средней плотности со спелыми и сочными танинами, замечательно сбалансировано',
        },
        {
            title: 'Conde Pinel',
            ratio: '3,2 балла',
            price: {
                glass: '0,25 л. / 300 ₽',
                bottle: '0,75 л. / 2500 ₽',
            },
            grapes: [
                {title: 'Темпранильо', percent: 100},
            ],
            image: 'conde_pinel.png',
            properties: [
                {prop: 'Вино', value: 'Красное, сухое'},
                {prop: 'Регион', value: 'Испания, Кастилия'},
                {prop: 'Производитель', value: 'Hammeken Cellars'},
                {prop: 'Год', value: '2016'},
                {prop: 'Крепость', value: '14.5%'},
            ],
            text: 'Глубокий рубиново-красный цвет с фиолетовыми оттенками. Аромат чистый, средней интенсивности, с тонами черной вишни, зрелой клубники с нотками экзотических специй и эвкалипта. Вкус сухой, средней плотности с мягкими танинами и долгим послевкусием',
        },
    ],

    white: [
        {
            title: 'Stonier Shardonnay',
            ratio: '4,1 балла',
            price: {
                glass: '0,25 л. / 600 ₽',
                bottle: '0,75 л. / 4500 ₽',
            },
            grapes: [
                {title: 'Шардоне', percent: 100},
            ],
            image: 'stonier.png',
            properties: [
                {prop: 'Вино', value: 'Белое, сухое'},
                {prop: 'Регион', value: 'Австралия, Виктория'},
                {prop: 'Производитель', value: 'Stonier'},
                {prop: 'Год', value: '2016'},
                {prop: 'Крепость', value: '14.5%'},
            ],
            text: 'Удивительно тонкий австралийский шардоне. Нежные намёки на спелые фрукты, такие как персик и&nbsp;цитрусовые в паре со сливочной текстурой, хорошей кислотностью и&nbsp;приятным затяжным послевкусием',
        },
        {
            title: 'Giesen Sauvignon Blanc',
            ratio: '3,6 балла',
            price: {
                glass: '0,25 л. / 700 ₽',
                bottle: '0,75 л. / 4000 ₽',
            },
            grapes: [
                {title: 'Совиньон блан', percent: 100},
            ],
            image: 'marlboro.png',
            properties: [
                {prop: 'Вино', value: 'Белое, сухое'},
                {prop: 'Регион', value: 'Новая Зеландия, Мальборо'},
                {prop: 'Производитель', value: 'Giesen'},
                {prop: 'Год', value: '2014'},
                {prop: 'Крепость', value: '12.5%'},
            ],
            text: 'Цвет светло-соломенный. Интенсивный аромат лайма с нотками зелёного банана. Типичный вкус с оттенками маракуйи. Умеренная кислотность, низкая минеральность',
        },
        {
            title: 'Tussock Jumper Riesling',
            ratio: '4,2 балла',
            price: {
                glass: '0,25 л. / 800 ₽',
                bottle: '0,75 л. / 5000 ₽',
            },
            grapes: [
                {title: 'Рислинг', percent: 100},
            ],
            image: 'tussock.png',
            properties: [
                {prop: 'Вино', value: 'Белое, полусладкое'},
                {prop: 'Регион', value: 'Германия, Рейнхессен'},
                {prop: 'Производитель', value: 'Wineforces'},
                {prop: 'Год', value: '2017'},
                {prop: 'Крепость', value: '10.5%'},
            ],
            text: 'Цвет светло-янтарный с изумрудными отблесками. Аромат привлекает свежестью с оттенками лимона и дыни. Вкус освежающий, чистый, прекрасно сбалансированный с&nbsp;характерной кислинкой и нюансами спелых фруктов в продолжительном послевкусии. ',
        },
    ],
}

const templateWine = Handlebars.compile(document.getElementById('hb-template-wine').innerHTML);
const wineBlock = document.getElementById('wineBlock');

function ready(callback) {
    if (document.readyState != 'loading') callback();
    else if (document.addEventListener) document.addEventListener('DOMContentLoaded', callback);
    else document.attachEvent('onreadystatechange', function () {
            if (document.readyState == 'complete') callback();
        });
}

function changeSlide() {
    wineBlock.innerHTML = templateWine(wines[currentGrapes][currentIndex]);

    document.querySelector('.arrow.left').addEventListener('click', e => {

        if (currentIndex == 0) {
            currentIndex = wines[currentGrapes].length - 1;
        } else {
            currentIndex--;
        }
        changeSlide();
    });

    document.querySelector('.arrow.right').addEventListener('click', e => {
        if (currentIndex == wines[currentGrapes].length - 1) {
            currentIndex = 0;
        } else {
            currentIndex++;
        }
        changeSlide();
    });
}

ready(() => {
    document.querySelectorAll('[data-action="choose-grape"]').forEach(button => {
        button.addEventListener('click', e=>{
            currentGrapes = e.target.dataset.grape;
            currentIndex=0;
            changeSlide();
        })
    });

    changeSlide();
})