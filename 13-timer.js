//  timer 관련 함수
//  특정 시간이 흐룬 후에 특정 기능 수행
//  setTimeout(() => { }, milliseconds)
function timerTest()    {
    console.log("3초후 인사합니다.");
    setTimeout(() =>{
        console.log("안녕하세요!")
    },3000) //  3초
}
timerTest()

//  특정 시간 간격마다 특정 함수 실행
//  setInterval(() => {}, 실행간격)
function intervalTest() {
    let count = 10
    console.log("10초 후 타이머가 종료됩니다.")
    setInterval(() => {
        console.log(count --)
        if (count < 0) clearInterval(timer); //  타이머 제거
    },1000)
}
intervalTest()