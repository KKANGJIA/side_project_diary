"use strict"

//게임 시작을 누르면 나무들과 아래에 토끼가 등장 ok
//타이머가 시작(제한시간) ok
//달걀를 누르면 스코어가 증가하고 달걀은 사라진다
//타이머가 끝나면 스코어와 성공 멘트 출력
//게임 종료하기

const egg_size = 100;
const startBtn = document.querySelector('.startBtn');
const gameField = document.querySelector('.gameField');
const timer = document.querySelector('.timer');
// 게임필드의 x,y 등의 정보를 확인하기 위한 변수
const fieldRect = gameField.getBoundingClientRect();


//게임 시작하면 달걀 생성
function init() {
    addItem(10, '../img/easter_eggs.png');
};

//달걀 생성
function addItem(cnt, imgPath) {
    const x1 = 0;
    const y1 = 0;
    const x2 = fieldRect.width - egg_size;
    const y2 = fieldRect.height - egg_size;
    let id = 1; 

    //달걀 반복 생성(i가 정의되지 않았다는 오류가 뜨면 let i라고 설정할 것)
    for(let i = 0; i < cnt; i++) {
        const egg = document.createElement('img');
        egg.setAttribute('class', 'eggImg');
        egg.setAttribute('src', imgPath);
        egg.style.position = 'absolute';
        // egg.style.width = '100px';
        // egg.style.height = '100px';
        const x = makeRandomNum(x1, x2);
        const y = makeRandomNum(y1, y2);
        egg.style.left = `${x}px`;
        egg.style.top = `${y}px`;
        
        gameField.appendChild(egg);

        id++;
    }
}

//'js random number between two numbers' 검색을 통해서 찾기
function makeRandomNum(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

init();

//게임시작(타이머 시작)
function startGame() {
    startBtn.addEventListener('click', setTimer);
    
    let time = 6;
    function setTimer() {
        //시간이 1초씩 감소하는 타이머
        const timeSecond = setInterval(function(){
            time--;
            timer.innerHTML = `${time}:00`;
            if(time==0) {
                clearInterval(timeSecond);
            }
        }, 1000);
        
        //시간이 끝난 후에 종료메세지를 띄우는 타이머
        setTimeout(function() {
            for(let i = 10; i > -1; i--){
                timer.innerHTML = `${time}:00`;
            }
            alert('게임이 종료되었습니다.')
            // if(time==0){
            //     time=0;
            // }
        },7000);
        
    }
};

startGame();


//게임 진행
gameField.addEventListener('click', getEgg);

function getEgg(event){
    const target = event.target;
    //이번트 타켓이 css 샐랙터가 해당하는 지 확인하는 함수: matches()
    if(target.matches('.eggImg')) { 
        target.remove(); //클래스 이름이 해당한다면 타켓 제거
    }
}

getEgg();





