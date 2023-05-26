window.onload = function(){
    
    //  고전 이벤트 모델 
    // 이벤트에 대한 정보를 알고 싶으면 함수(event 또는 e) 매개변수 넣기 

    // -> 내부적으로 이벤트 발생 정보를 담고 있는 객체를 매개변수로 전달
    btn1.onclick = function(e){
        console.log('고전 이벤트 모델', this);

        console.log('target', e.target);
        console.log('button', e.button);
        console.log('clientX', e.clientX);
        console.log('clientY',e.clientY);
        console.log('ctrlKey',e.ctrlKey);
        console.log('shiftKey',e.shiftKey);
        console.log('timeStamp',e.timeStamp);
        console.log('code',e.code);
        console.log('key',e.key);
        

        /*
            target : 이벤트가 발생한 대상 
            button : 마우스 키값 반환
            clientX : 이벤트가 발생한 가로 위치
            clientY : 이벤트가 발생한 세로 위치
            ctrlKey : ctrl 키가 눌렸는지 
            shiftKey : shift 키가 눌렸는지 
            timeStamp : 이전 이벤트와 현재 이벤트가 발생한 시간의 차이 > 밀리세컨드로 반환
            code : 키보드 키코드 값
            key : 키보드 키 
        */ 
    }
     // 고전방식으로 이벤트를 적용할 경우, 속성에 값을 주는 것이기때문에
      // 중복이벤트 작성 불가 
     
//  익명함수로 이벤트에 대한 정보 전달하기 
    btn1.onclick = (e)=>{
        //  화살표 함수에서는 this가 없음
        //  화살표 함수의 상위요소의 this를 찾아서 반환 > 상위 window 객체가 나오게 됨 
        console.log('this', this);
        console.log('e', e.target);
    }

//  함수() = 바로 실행 / 함수 만 작성하면 클릭하면 실행
    btn2.addEventListener('click',clickEventHandler);
    btn2.addEventListener('mouseenter', function(){
        // 나를 선택한 요소의 스타일을 변경
        this.style.backgroundColor = 'skyblue';
    });
    btn2.addEventListener('mouseleave',(e)=>{
        //  e 이벤트 속성의 target으로 이벤트가 발생되고 있는 대상의 스타일을 변경
        e.target.style.backgroundColor = 'pink';
    });


    //  2.이벤트가 발생한 요소 객체에 접근하는 방법
    // 1) 고전 이벤트 방식
    btn3.onclick = function(e){
        console.log(e.target);
        console.log('this', this);
        // 화살표 함수는 this x  > e 지정 > e.target으로 알 수 있음 
        console.log(window.event.target);
        // event 객체가 갖고 있는 정보 
    }

    // btn3.onclick = (e)=>{
    //     console.log(e.target);
    //     console.log('this', this);
    //     // 이벤트 발생 요소가 아님!!! 
    //     // 화살표 함수에서는 this가 가르키는 대상이 아님 
    //     console.log(window.event.target);
    // }

    // 3) 표준 이벤트 모델

    // btn4.addEventListener('click', function(e){
    //     console.log('e', e);
    //     console.log('this' , this);
    //     console.log(window.event.target);
    // });

    btn4.addEventListener('click', (e)=>{
        console.log('e', e);
        console.log('this' , this);
        console.log(window.event.target);
    });



    submit.addEventListener('click', function(e){
        // 정규식
        // 특정 규칙을 규칙을 가진 문자열을 검색하거나 치환할 때 사용하는 형식언어
        //  /패턴/으로 선언
        //  /정규식패턴/.test('문자열')
        //  문자열에 정규식 패턴을 만족하는 값이 있으면 true, 없으면 false 리턴 

        let regExp = /^[a-z0-9]{5,12}$/;
        let userid = document.querySelector('#userid').value;
        /**
         * ^ : 시작
         * [] : [...] 내의 문자들 중 하나라도 존재
         * {m,n} : 앞선 패턴이 최소 m번 최대 n번 반복되는 문자열을 의미 
         * $ : 끝
         */
        if(!regExp.test(userid)){

            alert('아이디는 영문자, 숫자로만 5~12자 사이로 입력해주세요.');

            // 표준이벤트방식에서는 (이벤트 객체가 있는 경우)
            //  이벤트 객체의 preventDefault() 함수를 이용해 기본 이벤트 제거가 가능! 
            e.preventDefault();
        }
    });
}




// (2) 인라인 이벤트 방식 
function test(e){
    //  매개값으로 이벤트 객체를 가져올 수 없음
    //  window 객체, this 는 가능
    console.log('e', e);
    console.log('this' , this);
    console.log(window.event.target);
}


// 이벤트 핸들러 
//  이벤트 처리기 - 이벤트가 발생했을 때 처리하는 함수
function clickEventHandler(){
    console.log('표준 이벤트 모델');
}

/* 1) 기본 이벤트 제거1*/
function passwordCheck(){
    let pass1 = document.querySelector('#pass1').value; 
    let pass2 = document.querySelector('#pass2').value;

    // 비밀번호, 비밀번호 확인을 비교해 일치하지 않는 경우 '비밀번호가 일치하지 않습니다.' 
    // 메세지 처리
    if(pass1 != pass2){
        alert("비밀번호가 일치하지 않습니다.");
    }else{
        return false;
    }
}
