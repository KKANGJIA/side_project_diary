"use strict"

const nextBtn = document.querySelector('.calender__btn-next');
const prevBtn = document.querySelector('.calender__btn-prev');

let today = new Date();
let todayYear = today.getFullYear();
let todayMonth = today.getMonth();

//이번 달 달력 로드
(function onCreateThisMonth() {
    document.querySelector('.year-month').innerHTML =
    `${todayYear}년 ${todayMonth+1}월`;
    onCreateCalender();
}());

//다음 달 달력 로드
(function onGoNextMonth() {
    nextBtn.addEventListener('click', () => {
        // todayMonth > 13 ? todayMonth++ :  todayYear + 1;
        if(todayMonth < 11) {
            todayMonth++;
        } else if (todayMonth >= 11) {
            todayYear++;
            todayMonth = 0;
        }
        document.querySelector('.year-month').innerHTML =
        `${todayYear}년 ${todayMonth+1}월`;
        onCreateCalender();
    })

}());

//이전 달 달력 로드
(function onGoPrevMonth() {
    prevBtn.addEventListener('click', () => {
        if(todayMonth < 1) {
            todayYear--;
            todayMonth = 11;
        } else {
            todayMonth--;
        }
        document.querySelector('.year-month').innerHTML =
            `${todayYear}년 ${todayMonth+1}월`;
        onCreateCalender();
    })
}());

//달력의 일자를 생성하는 메서드
function onCreateCalender() {
    const prevLastDate = new Date(todayYear, todayMonth, 0); //이전 달의 마지막 날짜 구하기
    // console.log(prevLastDate); //Sun Feb 28 2021 00:00:00 GMT+0900 (대한민국 표준시)
    const thisLastDate = new Date(todayYear, todayMonth + 1, 0); // 이번 달의 마지막 날짜 구하기
    
    const PLDate = prevLastDate.getDate(); //28
    const TLDate = thisLastDate.getDate(); //31
    const PLDay = prevLastDate.getDay(); //0, 즉, 일요일
    const TLDay = thisLastDate.getDay(); //3, 즉, 수요일
    
    const prevDates = []; // 이전 달의 날짜 배열 생성
    const thisDates = []; // 이번 달의 날짜 배열 생성
    const nextDates = []; // 다음 달의 날짜 배열 생성
    
    if( PLDay !== 6 ) {
        for(let i = 0; i <= PLDay; i++) {
            prevDates.unshift(PLDate - i); // 이전 달의 날짜를 뽑기
            // console.log(prevDates);
        }
        
        for(let i = 1; i <= 6 - TLDay; i++) {
            // console.log(i); //다음 달의 날짜를 뽑기
            nextDates.push(i);
            // console.log(nextDates);
        }
    
        for(let i = 1; i <= TLDate; i++ ) {
            thisDates.push(i); //이번 달 날짜 전부를 뽑기
            // console.log(thisDates);
        }
    
        const dates = prevDates.concat(thisDates, nextDates);
    
        dates.forEach((date, i) => {
            dates[i] = `<a class="date" href="../diary/diary.html"><div>${date}</div></a>`;
          })
    
        document.querySelector('.dates').innerHTML = dates.join('');
    }
    
}







