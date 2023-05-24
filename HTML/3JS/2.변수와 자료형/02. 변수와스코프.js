// 사용자로부터 출생년도를 입력받아서 나이를 출력하는 프로그램 

//  저장됨과 동시에 출생년도를 물어보는 창이 올라옴! 

// 전역변수

/*
var date = new Date(); //내장객체
var year = date.getFullYear();

function getAge(){
    //  블럭 레벨
    if(true){
        // 지역변수
        let input = prompt('출생년도를 입력해주세요. : ');
        var age = year - input;
        console.log(`당신의 나이는 ${age}세 입니다. *^*^*`);
        console.log(input);
    }
}
console.log(`당신의 나이는 ${age}세 입니다. *^*^*`);
// var 키워드 : 함수레벨 (어디서든 출력이 가능했음)
console.log(input); // (오류) let 키워드 블럭레벨 (블럭 밖에서는 출력이 안됨)
// document.write(`당신의 나이는 ${age}세 입니다. *^*^*`);
*/
/*
*  주의 : 예약어를 붙이지 않은 경우 > 오류가 발생하지 않고 전역변수로 생성됨 
            예) sum = ''; 
             -> var, let, const 사용하지 않았지만 생성o , 전역변수
 */
//  전역변수 : 함수 외부에서 선언 
g_str1 = '전역변수';
var g_str2 = 'var 전역변수';
let g_str3 = 'let 전역변수';

console.log('전역변수==================');
console.log(g_str1);
console.log(g_str2);
console.log(g_str3);

// 전역변수에 접근하는 방법2가지 
//window.변수명 
//  widnow 객체 : 브라우저에서 제공하는 브라우저창에 대한 정보를 담고 있는 객체
// this.변수명
console.log(window.g_str1);
console.log(this.g_str1);

console.log(window.g_str2);
console.log(this.g_str2);

//  let의 경우 window 객체에 연결(매핑) x 
console.log(window.g_str3);
console.log(this.g_str3);


function test(){
    console.log('전역변수==================');
    console.log(g_str1);
    console.log(g_str2);
    console.log(g_str3);

    console.log('window.변수명==================');
    console.log(window.g_str1);
    console.log(this.g_str1);
    
    console.log(window.g_str2);
    console.log(this.g_str2);
    
    //  let의 경우 window 객체에 연결(매핑) x 
    console.log(window.g_str3);
    console.log(this.g_str3);

    // 지역변수 : 함수 외부에서 접근 불가 
    // 키워드 없이 선언하면 전역변수로 생성 > 언제? 함수가 실행될 때!
    l_str1 = '지역변수';
    var l_str2 = 'var 지역변수';
    let l_str3 = 'let 지역변수';

    console.log('지역변수 출력==================');
    console.log(l_str1);
    console.log(l_str2);
    console.log(l_str3);

    // 전역변수와 동일한 이름의 지역변수 선언시 지역변수가 우선
    //  상단 출력이 undefined로 나오면 전역변수는 영향을 받지 않음. 
    // g_str2 = '전역변수 == 지역변수';


    // console.log('선언', g_str2);
    // console.log(aaa); // 아예 선언이 안된 아이들
    var g_str2 = '전역변수 == 지역변수';
    console.log('g_str2', g_str2); // 지역변수에서 전역변수와 같은 이름으로 재선언
    // 함수 내부에서는 지역변수 값으로 쓰이지만 밖에서는 전역변수의 값으로 쓰임 


    // 블럭 레벨 스코프 테스트
    // if(true){
    //     b_str1 = '블럭선언';    // 전역
    //     var b_str2 = '블럭선언 var';  //함수
    //     let b_str2 = '블럭선언 let';  //블럭

    //     // 상수 : 선언과 동시에 초기화! 변경불가!
    //     const b_str4 = '블럭선언 const'; //블럭
    // }
    // 블럭레벨 스코프(let, const) -> 블럭내부에서 선언되어 블럭 외부에서 호출 불가
    // console.log('함수내부선언', b_str3);
    // console.log('함수내부선언', b_str4);
}
// 함수 내부에서 선언된 지역변수
/*
console.log(l_str1);
console.log(l_str2);
console.log(l_str3);
*/

// 페이지가 로드된 이후 바로 실행 (HTML 파일을 한번 끝까지 읽고나서 실행)
window.onload = function(){
    console.log("onload 실행 - 페이지 로딩완료 ================");

    //var 예약어의 중복선언
    var num = 0;
    console.log(num);
    var num = 10;
    console.log(num);

    // let으로 선언시 num1을 선언문이 나오기 전에 사용불가
    //  let, const도 호이스팅이 되지만 Temporal Dead Zone(TDZ) 에 위치 
    //  TDZ : 선언전에 변수를 사용하는 것을 비 허용하는 개념상의 공간

    // let, const 중복선언 불가 
    num1 = 10;
    let num1= 0;
    num1= 10;

    // const 값 변경 불가, 선언과 동시에 초기화 
    const num2 = 0;
    num2 = 10;
}


var vscope = 'global';
function fscope(){
    //  var 선언 시 변수는 지역변수
    var vscope = 'local';
     vscope = 'local';
}
fscope();
alert(vscope);
