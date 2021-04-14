"use strict"

//자동차 객체 생성
car = {
    flue: Math.ceil(Math.random()*10+10), //연료
    power: Math.ceil(Math.random()*3+2), //연비
    moved: 0, //총 이동거리
    run: function () {
        let km = Math.ceil(Math.random() * 6);
        let wasteFuel = km / thiis.power;
        if(this.fuel < wasteFuel) {
            console.log('이동 불가');
            return;
        }
        this.fuel -= wasteFuel;
        this.moved += km;
        console.log(`${km} km 이동 (총 ${this.moved} km`);
    }
};


//클로저로 변수를 보호한 자동차 객체
let createCar = function () {
    flue: Math.ceil(Math.random()*10+10),
    power: Math.ceil(Math.random()*3+2),
    moved: 0;
    return {
        get moved () {
            return moved;
        },
    
    run: function () {
        let km = Math.ceil(Math.random() * 6);
        let wasteFuel = km / thiis.power;
        if(this.fuel < wasteFuel) {
            console.log('이동 불가');
            return;
        }
        this.fuel -= wasteFuel;
        this.moved += km;
        console.log(`${km} km 이동 (총 ${this.moved} km`);
        }
    };
};

let car = createCar();

//어느 부분이 문제...?
//객체 리턴 전에 어뷰징(run 메서드를 다른 내용으로 덮어 씌우기)을 막기 위한 클로저 구문
let createCar = function () {
    flue: Math.ceil(Math.random() * 10 + 10),
    power: Math.ceil(Math.random() * 3 + 2),
    moved: 0;
    let publicMembers = {
    // return {
    //     get moved () {
    //         return moved;
    //     },
        
        run: function () {
            let km = Math.ceil(Math.random() * 6);
            let wasteFuel = km / thiis.power;
            if(this.fuel < wasteFuel) {
                console.log('이동 불가');
                return;
            }
            this.fuel -= wasteFuel;
            this.moved += km;
            console.log(`${km} km 이동 (총 ${this.moved} km`);
        }
    };
    Object.freeze(publicMembers);
    return publicMembers;
};
    

let car = createCar();