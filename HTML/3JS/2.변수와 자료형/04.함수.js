window.onload = function(){
    let btn1= document.getElementById('btn1');
    btn1.addEventListener('click', function(){
        // console.log('btn1 test');
        test();
    });


    // let btn2 = document.getElementById('btn2');
    // 1. 익명의 함수 : 변수에 대입하거나 함수실행시 인수로 사용될 수 있음 
    btn2.addEventListener('click', function(){
        alert('익명의 함수 실행(이벤트 핸들러를 통해 실행!');
    
  
    });
    // let btn3 = document.getElementById('btn3');
    //  매개변수 ======================================
     btn3.addEventListener('click', ()=>{
         argTest('안녕하세요옹');
     });

    //  arguments() ===================================
    btn3.addEventListener('click', ()=>{
        let res = sum_arguments(11,22,33);
        console.log('합계 : ', res);
    });

    //  함수의 리턴 (일반적인 값 리턴) =============
    btn4.addEventListener('click', () =>{
        let random = ran();
        console.log(`random : ${random}`);
    });

    btn5.addEventListener('click', ()=>{
        let result = funcTest();
        result();
        

        funcTest()();
    });


//  eval() 함수 ==============================================

// let calc = document.querySelector('#calc');
// let res = calc.value;
//  console.log(res);
    btn6.addEventListener('click', ()=>{
        console.log('입력한 값' , calc.value);
        
        let result = eval(calc.value);
        console.log('결과: ', result);
    });

// isInfinity() 와 isNaN() 함수 =============================
    btn7.addEventListener('click', ()=>{
        let num1 = -10 / 0;
        let num2 = 10 / 'a';
        let p = p3;

        p.innerHTML = `10/0 : ${num1} <br>`;
        p.innerHTML += `10/'a' : ${num2} <br>`;
        p.innerHTML += `num1 == Infinity : ${num1 == -Infinity} <br>`;
        p.innerHTML += `num2 == NaN : ${num2 == NaN} <br>`;
        p.innerHTML += `isFinite(num1) : ${isFinite(num1)} <br>`;
        p.innerHTML += `isNaN(num2) : ${isNaN(num2)} <br>`;
      
    });
};



//  익명함수를 리턴하는 함수 
function funcTest(){
    //  내부 함수 return function() 이 사용하는 외부함수 funcTest()의 지역변수 name은 
    // 내부함수가 소멸할 때까지 소멸되지 않고 살아있는 특징 > '클로저'
    let name = '박지민';
    return function(){
        alert(`${name} 님 환영합니다.`);
    };
};


//  함수의 리턴 (일반적인 값 리턴)
function ran(){
    let random = parseInt(Math.random() * 100) + 1; 
    return random;
}


//  arguments() 
function sum_arguments(){
    let res = 0;
    for (let i = 0; i< arguments.length; i ++){
        res += arguments[i];
    }
    return res;
}

//  매개변수 
function argTest(value = '초기값 지정'){
    alert(value);
}


//  선언적 함수 
//  function 함수이름(매개변수){
//        실행로직
//   }
// 호출 : 함수명();
function test(){
    console.log('test');
}


// 익명의 함수를 변수에 대입 
 
let sum =function(a,b){
    return a+b;
}
console.log('함수실행결과 : ', sum(10,20));

// 즉시 실행 함수 
(   function(a,b){
        console.log(`a : ${a}, b : ${b}`);
        console.log('자동으로 실행');
    }(10,20)
);

// 화살표 함수
const hi = function(){
    return alert('안녕하세요:)');
}

const hi2 = () =>{
    return alert('매개변수가 없을 때 화살표 함수!');
}
 const hi3 = () => alert('명령문이 1줄이라면 중괄호, return 생략가능');
