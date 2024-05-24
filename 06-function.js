//  함수 선언문
//  선언
function sum(a,b)   {   //  함수이름(매개변수 목록)
    return a + b;
}

//  호출
console.log(sum(10,20));

//  함수 표현식 -> 익명 함수
//  함수도 객체다 -> 다른 객체들과 동등한 권리와 지위를 가진다
//      - 변수에 할당될 수 있다
//      - 다른 함수의 매개변수로 전달될 수 있다
const asum = function(a, b)   {
    return a + b;
}
console.log(typeof asum);
console.log(asum(10, 20));

//  함수의 매개변수의 이해
//  ES의 함수는 선언부에 선언된 매개변수의 갯수와 맞지 않게 호출해도 괜찮다
console.log(asum());

//  매개변수가 없는 함수
function getNumberTotal()   {
    //  ES 특성상 전달되는 모든 매개변수는 arguments 함수 객체에 모두 전달
    console.log("arguments", arguments);

}
console.log(getNumberTotal(1, 2, 3, 4, 5));
console.log(getNumberTotal(1, 2, "3", 4, 5));

//  함수는 객체 -> 변수에 할당되거나 다른 함수의 매개변수로 전달될 수 있다.
function calculator(a, b, func) {   //  func ->계산식 함수
    if ( typeof func === "function")    {
        console.log(func(a,b));
    }   else{
        console.log("어쩌라구");
    }
}

calculator(10, 20);
calculator(10, 20, function(v1, v2)    {
    return v1 + v2;
});

// 함수 보충
console.log("===================== 화살표 표기법"); //  매개변수 목록 => 구현 내용

const f1 = function()   {
    return "hello";
}   //  매개변수 X, 리턴 O
console.log(f1());
const f1_arrow = () => "hello";