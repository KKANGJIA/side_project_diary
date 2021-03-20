"use strict"

//추가할 내용 => *내용 작성*
//*큰 화면일 때 일기장에 들어오면 맨 상단에 포커스가 되지않음*

const body = document.querySelector('body');
const dateInput = document.querySelector('.nav__date__input');
const titleInput = document.querySelector('.nav__title__input');
const containerText = document.querySelector('.container__text');
const submitBtn = document.querySelector('.submitBtn');

//1. 일기장이 열리면 바로 실행되어야 할 기능들
(function onload() {
    onAddMoodTag();
    onAddWeatherTag();
    document.querySelector('.nav__title__input').focus();
    //*추가하기 => date 자동 설정하기*
    body.scrollIntoView({behavior: "smooth", block: "start"});
}());

//2. 일기장 작성 후 마무리 기능
(function onFinish() {
    onAlertFisish(); //작성 (미)완료 메세지
    //*날씨와 기분 선택한 것 모두 리셋하기*
}());

function onAlertFisish() {
    submitBtn.addEventListener('click', () => {
        if(containerText.value == '' || titleInput.value == '' || dateInput.value == '') {
            alert(`아직 작성하지 않았습니다 :(`);
            return; //미작성 시 아무 것도 리턴하지 않기
        }
        if (containerText.value !== '' && titleInput.value !== '' && dateInput.value !== '') {
            alert(`저장되었습니다 :)`);
            onAddList(); //저장 후 리스트 추가하기

            //기록 후에 전체 칸 초기화 및 제목에 포커스 잡아주기
            dateInput.focus();
            titleInput.value = '';
            containerText.value = '';
            dateInput.value = '';
            body.scrollIntoView({behavior: "smooth", block: "start"});
        }
    })
};

function onAddList() {
    const title = document.createElement('h1');
    title.textContent = `작성된 일기장 리스트`;
    title.style.fontSize = "2em";
    title.style.marginLeft = "50px";

    const list = document.createElement('div');
    list.setAttribute('class', 'titleList');
    list.textContent = `Title: ${titleInput.value}`;
    list.style.border = '3px solid black';
    list.style.padding = '10px 10px';
    list.style.margin = '10px 0px';
    list.style.width = '100%';
    list.style.height = 'auto';

    document.body.appendChild(title);
    document.body.appendChild(list);
}


//기분 부분에 태그 추가하기
function onAddMoodTag() {
    document.querySelector('.mood__imgs').innerHTML =
    `<img id="1" class="mood__img" src="../img/happy.JPG"/>
    <img  id="2" class="mood__img" src="../img/question.JPG"/>
    <img  id="3" class="mood__img" src="../img/grey.JPG"/>
    <img  id="4" class="mood__img" src="../img/mad.JPG"/>`;

    document.querySelector('.mood__des').innerHTML =
    `<span>행복</span>
    <span>우울</span>
    <span>의문</span>
    <span>분노</span>
    `;
};

//날씨 부분에 태그 추가하기
function onAddWeatherTag() {
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
};


//이미지 클릭하면 경계선 지정하기
//document.getElementById는 단일 DOM 객체를 가져오지만,
//document.querySelectorAll은 NodeCollection을 가져오기 때문
//배열이 아니라서 addEventListener를 바로 등록할 수 없다
//따라서, forEach를 이용해서 각각 이벤트를 등록해준다
let mood__img = document.querySelectorAll('.mood__img');
// console.log(mood__img); //nodeList로 출력
mood__img.forEach(function(moodImg) { //태그를 하나씩 돌면서 인자로 넘겨받은 태그에
    moodImg.addEventListener('click', changeBorderToMood); //각각 클릭이벤트를 적용하기

    function changeBorderToMood() {
       moodImg.style.border = "5px solid #000000"; //보더 적용하는 함수
    };
});

let weather__img = document.querySelectorAll('.weather__img');
// console.log(weather__img); //nodeList로 출력
weather__img.forEach(function(weatherImg) {
    weatherImg.addEventListener('click', changeBorderToWeather);

    function changeBorderToWeather() {
        weatherImg.style.border = "5px solid #000000";
    };    
});






