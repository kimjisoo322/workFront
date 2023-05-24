window.onload = function(){
    var btn = document.querySelector('#btn1');
    var div = document.querySelector('.area');
    
    // onclick 과 동일 = addEventListener
    // btn 요소에 'click이벤트'가 발생하면 '함수'를 실행
    btn.addEventListener('click', function(){
        div.innerHTML = '버튼이 클릭되었습니다.';
        
        //  1. 배열 생성 ========================================
        let array1 = new Array(); // 빈 배열[] 생성
        let array2 = new Array(3); // 빈 공간3칸 [empty, empty, empty]
        let array3 = new Array('빨강', '파랑', '노랑', '초록');
        let array4 = [1,2,3,4,5];
 
        console.log('1', array1);
        console.log('2',array2);
        console.log('3',array3);
        console.log('4',array4);

        // 여러가지 타입을 입력
        let array5 = [
            '김지수', // 문자
            25,       // 숫자
            true,     // 논리
            [3,4,5],  // 배열
            function(){
                return 1  
            } ,       // 함수
            {}        // 객체
        ];
        console.log('array5',array5);
        //  오브젝트 타입은 화살표로 나옴

        // 2. 배열에 값 추가하기 ==============================
        array1[0] = '귤';
        array1[1] = '사과';
        array1[2] = '자몽';
        array1[3] = '포도';
        console.log('추가', array1);
        // 배열의 길이를 지정하지 않았는데 추가가 됨.

        div.innerHTML = `array1에 값 대입 : [${array1}] <br> 길이 : ${array1.length} <br>`;
    
        
        array2[0] = '작은시';
        array2[1] = '다너마';
        array2[2] = '내방법';
        array2[3] = 'stay';
        console.log('추가2', array2);
        div.innerHTML += `array2에 값 대입 : [${array2}] <br> 길이 : ${array2.length}`;
        //  배열의 길이를 지정해뒀는데 길이가 늘어남, 추가됨


    });

    // 2. 배열의 메소드

// 1) indexOf() : 항목의 index 번호를 반환
    var btn2 = document.querySelector('#btn2');
    var div2 = document.querySelector('.area2');
    
    btn2.addEventListener('click', function(){
        div2.innerHTML = '버튼이 입력되었습니다.<br>';

        let array = ['귤', '자몽','사과','복숭아','키위'];
        div2.innerHTML += `${array}<br>`;
        div2.innerHTML += ` 복숭아 : ${array.indexOf('복숭아')} <br>`;
        div2.innerHTML += ` 자몽 : ${array.indexOf('자몽')}`;
//  배열 요소에 위치한 인덱스 값을 반환
    });


    var btn3 = document.querySelector('#btn3');
    var div3 = document.querySelector('.area3');

    btn3.addEventListener('click', function(){
        div3.innerHTML = '버튼이 입력되었습니다.<br>';

        let array1 = ['지민', '정국'];
        let array2 = ['JIMIN', 'JK'];

        div3.innerHTML += `array1 : ${array1} <br>`;
        div3.innerHTML += `array2: [${array2}] <br>`;

        div3.innerHTML += `array1 기준 결합: ${array1.concat(array2)} <br>`;
        //  결합 해줬는데 원본이 달라진 게 없음! 
        div3.innerHTML += `array1 : ${array1} <br>`; // 원본에 영향을 미치지 않는 함수 concat() 
        div3.innerHTML += `array2 기준 결합: ${array2.concat(array1)} <br>`
        div3.innerHTML += `array2: [${array2}] <br>`;
    
    
    });

    var btn4 = document.querySelector('#btn4');
    var div4 = document.querySelector('.area4');

    
    //  3) join() 배열의 요소들을 결합하여 문자열을 반환
    //      매개값으로 구분자를 입력할 수 있음
    btn4.addEventListener('click', function(){
    div4.innerHTML = '버튼이 입력되었습니다.<br>';
    let array = ['서울', '강원', '경기'];

    div4.innerHTML += `array : ${array}<br>`;
    div4.innerHTML += `array toString() : ${array.toString()} <br>`;
    div4.innerHTML += `array join() : ${array.join()}<br>`;
    div4.innerHTML += `array join(|) : ${array.join('|')}<br>`;
    div4.innerHTML += `array join(|) 타입은 ?: ${typeof(array.join('|'))}<br>`;
    div4.innerHTML += `array join(|) : ${array.join('★')}<br>`;

    // 공백을 구분자로 문자열 생성 
    let str = array.join(' ');

    // 문자열 -> 배열 
    div4.innerHTML += `str.split : ${str.split(' ')}`;
    str.split(' ');

    });


    
    var btn5 = document.querySelector('#btn5');
    var div5 = document.querySelector('.area5');

//  4) reverse() : 원본에 영향을 미침 
    btn5.addEventListener('click', function(){
        div5.innerHTML = '버튼이 입력되었습니다.<br>';
       
        let array = Array.of(10,5,3,6);
        div5.innerHTML += `array: ${array} <br>`;
        div5.innerHTML += `array reverse(): ${array.reverse()} <br>`;
        div5.innerHTML += `array: ${array} <br>`;
        });

//  5) sort() : 정렬
//  매개변수가 없는 경우 ASCII 문자 오름차수느올 정렬
//  원본 배열에 영향을 미치는 메서드
    var btn6 = document.querySelector('#btn6');
    var div6 = document.querySelector('.area6');

    btn6.addEventListener('click', function(){
    div6.innerHTML = '버튼이 입력되었습니다.<br>';

        let array1 = [7,22,230,100,55] ;
        let array2 = ['Cherry', 'apple', 'Apple', 'Banana'] ;
        
        div6.innerHTML += `array1 원본: ${array1}<br>`;
        div6.innerHTML += `array1 sort(): ${array1.sort()}<br>`;
        div6.innerHTML += `array1 정렬 후 원본: ${array1}<br>`;

        div6.innerHTML += `array2  원본: ${array2}<br>`;
        div6.innerHTML += `array2 sort(): ${array2.sort()}<br>`;
        div6.innerHTML += `array2 정렬 후 원본 : ${array2}<br>`;

//      sort()메소드에 함수를 매개값으로 전달해서 정렬 기준을 변경할 수 있음
        array1.sort(function(left, right){
            return left - right  // 오름차순 정렬
        });
    
        div6.innerHTML += `array1 숫자 오름차순 : ${array1} <br>`
        div6.innerHTML += `array2 문자 오름차순 : ${array2.sort()} <br>`

        array1.sort(function(left, right){
            return right - left; // 내림차순 정렬
        });
        div6.innerHTML += `array1 숫자 내림차순 : ${array1} <br>`
        div6.innerHTML += `array2 문자 내림차순 : ${array2.sort().reverse()} <br>`
    });

    //  6. push(), pop()
    var btn7 = document.querySelector('#btn7');
    var div7 = document.querySelector('.area7');

    btn7.addEventListener('click', function(){
        // div7.innerHTML = '버튼을 입력했습니다.';

        let array = ['캡틴아메리카', '토르', '헐크', '호크아이', '아이언맨'];
        div7.innerHTML += `array 출력 : [${array}] <br>`;
        
        console.log(array.push('BTS')); // 배열에 요소를 추가 후 배열의 길이를 반환
        div7.innerHTML += `array 추가+ : [${array}] <br>`;

        console.log(array.push('GD')); // 배열에 요소를 추가 후 배열의 길이를 반환
        div7.innerHTML += `array 추가2+ : [${array}] <br>`;

        console.log(array.pop());
        // console.log(array.pop());
        div7.innerHTML += `array 요소 삭제 후 : [${array}] <br>`;
        div7.innerHTML += `array 요소 삭제 후 길이: [${array.length}] <br>`;
    
        div7.innerHTML += `array 요소 지정 삭제: [${array.pop('캡틴아메리카')}] <br>`;
        div7.innerHTML += `array 요소 삭제 후 : [${array}] <br>`;
        div7.innerHTML += `array 요소 삭제 후 길이: [${array.length}] <br>`;
    });
//  7. shift(), unshift()

    var btn8 = document.querySelector('#btn8');
    var div8 = document.querySelector('.area8');

    btn8.addEventListener('click', function(){
    //   div8.innerHTML = '버튼을 입력했습니다.';
        let array = ['박지민', '전정국', '정호석', '김남준'];
        div8.innerHTML = `array : ${array}<br>`;

        div8.innerHTML += `array 요소 추가 : ${array.unshift('김태형')}<br>`;
        div8.innerHTML += `array 요소 추가 후: ${array}<br>`;

        div8.innerHTML += `array 요소 추가 : ${array.unshift('GD')}<br>`;
        div8.innerHTML += `array 요소 추가 후: ${array}<br>`;

        div8.innerHTML += `array 요소 반환 후 제거 :  ${array.shift()}<br>`;
        div8.innerHTML += `array 결과 : ${array}<br>`;

        
    });


//  slice() , splice()
    
    var btn9 = document.querySelector('#btn9');
    var div9 = document.querySelector('.area9');
    
    btn9.addEventListener('click', function(){
        // div9.innerHTML = '버튼클릭';
   
        let array = ['사과', '바나나', '자몽', '오렌지',' 딸기'];
        div9.innerHTML = `array : ${array}<br>`;
        div9.innerHTML += `array slice() : ${array.slice(0,3)}<br>`;
        div9.innerHTML += `array slice() : ${array}<br>`;

        div9.innerHTML += `array splice(2,0) : ${array.splice(2,0,'포도')} <br>`;
        div9.innerHTML += `array splice('포도' 추가) 결과 : ${array}<br>`;

        div9.innerHTML += `array splice(0,3) : ${array.splice(0,3,'메론', '키위')} <br>`;
        div9.innerHTML += `array splice('메론','키위'추가) 결과 : ${array}<br>`;

    })

}
