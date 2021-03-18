"use strict"

const dateInput = document.querySelector('.nav__date__input');
const titleInput = document.querySelector('.nav__title__input');
const containerText = document.querySelector('.container__text');

//기분 부분에 태그 추가하기
(function onAddMoodTag() {
    document.querySelector('.mood__imgs').innerHTML =
    `<img class="mood__img" src="../img/happy.JPG"/>
    <img class="mood__img" src="../img/grey.JPG"/>
    <img class="mood__img" src="../img/question.JPG"/>
    <img class="mood__img" src="../img/mad.JPG"/>`;

    document.querySelector('.mood__des').innerHTML =
    `<span>행복</span>
    <span>우울</span>
    <span>의문</span>
    <span>분노</span>
    `;
}());

//날씨 부분에 태그 추가하기
(function onAddWeatherTag() {
    document.querySelector('.weather__imgs').innerHTML =
    `<img class="weather__img" src="../img/sun1.JPG"/>
    <img class="weather__img" src="../img/rain.JPG"/>
    <img class="weather__img" src="../img/rainbow.JPG"/>
    <img class="weather__img" src="../img/snow.JPG"/>
    <img class="weather__img" src="../img/bungae.JPG"/>
    <img class="weather__img" src="../img/night.JPG"/>`;

    document.querySelector('.weather__des').innerHTML =
    `<span>해</span>
    <span>비</span>
    <span>무지개</span>
    <span>눈</span>
    <span>번개</span>
    <span>밤</span>
    `;
}());

//순차적으로 focus 적용하기
(function onFocus() {
    document.querySelector('.nav__date__input').focus();
        if(titleInput === '') {
            document.querySelector('.nav__title__input').focus();
            if(titleInput === '') {
                document.querySelector('.container__text').focus();
            }
        }
}());

