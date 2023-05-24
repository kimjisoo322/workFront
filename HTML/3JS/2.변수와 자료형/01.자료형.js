// 버튼에 onclick() 이벤트를 입력 후
// 함수를 실행시키기 위해서는 버튼을 클릭 
// 왜? 만들어놓은 버튼에 함수와 코드(클릭이벤트)를 작성했기 때문에
function typeTest(){ 
    // console.log(btn);
 
    // 변수를 선언시 사용되는 키워드 
    //  var, let, const(상수)
    // 숫자형 : 정수와 실수를 포함 
    let age = 20;
    let height = 184.5;
    
    // 문자열 : 작은따옴표, 큰따옴표로 묶은 데이터
    //  let 으로 선언시 값이 중복될 수 없음. 
    let name = '박지민';
    let name1 = "전정국";
    let name2 = '';  // 빈문자열로 선언
    
    // 논리값 : true, false
    let check = false;
    
    var btn = document.querySelector('.area');

    btn.innerHTML += `<h2>안녕하세요.</h2> `;
    // Template litterals 템플릿 리터럴 
    // "", '' 대신 `` (백팃)을 사용해 변수를 함께 출력
    btn.innerHTML += `name : ${name},  type: ${typeof(name)} <br> `;
    btn.innerHTML += `age : ${age}, type : ${typeof(age)} <br>`;
    btn.innerHTML += `height : ${height} , type : ${typeof(height)} <br>`
    btn.innerHTML += `check : ${check} , type : ${typeof(check)} <br>`
}

function tpyeTest2(){
    
    console.log(btn2);
    // 배열 선언
    let hobbies = ['축구','야구','농구','테니스'];
    
    
    var btn2 = document.querySelector('#area2');
    btn2.innerHTML = `hobbies는 : ${hobbies} <br>`;
    btn2.innerHTML += `나의 hobbies는 : ${hobbies[2]}이다.type: ${typeof(hobbies)}<br>`;



    // 함수 선언
    // let testFunc = function(num1, num2)
       // 초깃값을 지정하지 않을 경우 : 값이 없어서 undefined가 입력되어 오류가 발생
       // -> 오류가 발생하지 않도록 초깃값을 지정해줘야 함!

    //  변수에 함수를 저장할 수 있고, 매개변수로 함수를 넘겨줄 수 있다.
    let testFunc = function(num1 = 0, num2 =0){
        console.log('num1', num1);
        console.log('num2',num2);
        return num1 + num2;
        
    }
    // 함수를 실행 (변수이름(매개변수))
    console.log('testFunc', testFunc(10));
    btn2.innerHTML = `testFunc:  ${testFunc} 은 ${typeof(testFunc)}<br>`;
    btn2.innerHTML += `tesFunc 의 결과:  ${testFunc(10,20)}`;
  


    // 객체 타입 
    let user = {
        /* 속성:값,
           속성:값, ....  
        */
        name: '링티',
        age: 25,
        height: 177.7,
        id: 'test',
        hobbies: ['축구', '농구', '야구']
    };
// 객체가 가진 속성에 접근시 . 찍어서 접근
   console.log('user', user);
   console.log(user.name);
   console.log(user.age);
   console.log(user[hobbies]);

   btn2.innerHTML = `user의 값은 ${user}, type : ${typeof(user)}<br>`;
   btn2.innerHTML += `null type : ${typeof(null)} <br>`
   btn2.innerHTML += `user의 이름은 ${user.name} 입니다.`;
}

function plusTest(){
    var btn3 = document.querySelector('#area3');
        
}

function castingTest(){
    let btn4 = document.querySelector('#area4');
    // console.log(btn4);
    btn4.innerHTML = `강제형변환 <br><br>`;
    btn4.innerHTML += `${2 +parseInt('3')}<br>`; // 5
    btn4.innerHTML += `${2 +parseFloat('3')}<br>`; // 5
    btn4.innerHTML += `${String(2) + Number('3')}<br>`; // 23

    // 16진수 -> 10진수로 변환 
    // ff : 255
    btn4.innerHTML += `${parseInt('ff', 16)}`;
    // 
    btn4.innerHTML += `parseInt(color.substr(1,2),16);`
    btn4.innerHTML += `${parseInt}`
}

function opTest(){
    let btn5 = document.querySelector('#area5');
    
    btn5.innerHTML = `'=='연산자 테스트<br><br>`;
    btn5.innerHTML += `7 == 7 : ${7==7}<br><br>`;
    btn5.innerHTML += `7 == 7 : ${7=='7'}<br><br>`;
    btn5.innerHTML += `7 == 7 : ${7 !='7'}<br><br>`;
    btn5.innerHTML += `7 != 7 : ${'7' !='7'}<br><br>`;

    btn5.innerHTML += `'==='연산자 테스트<br><br>`;
    btn5.innerHTML += `7 === 7 : ${7===7}<br><br>`;
    btn5.innerHTML += `7 === 7 : ${7==='7'}<br><br>`;
    btn5.innerHTML += `7 !== 7 : ${7 !=='7'}<br><br>`;
    btn5.innerHTML += `7 === 7 : ${'7' ==='7'}<br><br>`;
    
}

function forTest(){
    let arr = [1,2,3,4,5,6,7,8,9,10];
    let arr2 = [10,9,8,7,6,5]
    for(let i=0; i<arr.length; i++){
        console.log(arr[i]);
    }
    console.log('for문 ===============================');

    // for(변수 in 객체) {}
    // 반복 변수에 array의 index를 순서대로 담아서 반복
    for(let i in arr2){
        console.log(arr2[i]);
    }

// let 객체 선언
    let student = {
        name : '박지민',
        age : 29,
        class : 'bts'
    };

    for(key in student){
        console.log(key, student[key]);
    }
    console.log('for in 문===============================');
    
    // 배열.forEach(function(변수){})
    // 배열의 요소를 함수의 매개변수로 전달
    arr2.forEach(function(num){
        console.log(num)
    });
    console.log('forEach 문===============================');


    let i = 0;
    while(true){
        i++;
        // 짝수이면 continue 문장을 실행하지 않고 위로
        // 홀수이면 i값 찍어주기 
        if(i % 2 ==0){
            continue;
        }
        console.log(i);

        // i가 5보다 크면 빠져나오기
    if( i > 5){
        break;
    }
}

    console.log('while 문===============================');

    // ES6부터 추가된 for문
    for(let iterator of arr2){
        console.log(iterator)
    }

}

