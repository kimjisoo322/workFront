window.onload = function(){
    btn1.addEventListener('click', function(){
        // alert('버튼이 클릭되었습니다.');
        // window.open(alert('버튼클릭')); // 알림창 뜨고 새창으로 이동
        // window.open('https://naver.com'); // 새탭에 열리고 URL로 이동 
        // window.open('https://naver.com', 'naver'); // open(url, 창이름) 
        
        // open(url, 창이름, '속성')
        //  ** 주의) url은 철자 같이 똑같이 맞춰줘야함!! 
        window.open('7.BOM.html', 'BOM', 'width=500 height=500');

    });

    // 타이머 관련 메소드 

    //window.setTimeout()
    btn2.addEventListener('click', ()=>{

        // timerId에 반환값을 저장
        let timerId = 0;

        // 새창 띄우기 
        let newWindow =window.open();

        // 새 창을 띄운 걸 저장하고, 함수를 사용 
        newWindow.alert('3초 후에 이 페이지는 종료됩니다.');
        
        // setTimeout(콜백함수, 시간)
        // 일정시간 경과 후 콜백함수를 한번 실행 
        //  1000 / 1 초 => 3000은 3초
        timerId =  window.setTimeout(function(){
            newWindow.close();
        }, 3000);

        // 타이머id를 clearTimeout() 함수에 전달하면 해당 id의 타이머를 취소할 수 있음
        clearTimeout(timerId);

    });
    // window.setInterval() 

    let timerid2 = 0;
    btnStart.addEventListener('click', ()=>{
        //  일정시간마다 콜백함수를 반복 실행
        // window.setInterval(함수, 시간)
            timerid2 = window.setInterval(function(){
                //  현재 날짜의 시간을 받아오는 Date() 객체 
                let date = new Date();
                area1.innerHTML =`${date.getHours()} : ${date.getMinutes()}: ` 
                + `<span id = 'second'> ${date.getSeconds()}</span>`;
                
            }, 1000);
        });

         btnStop.addEventListener('click', ()=>{
            clearInterval(timerid2);
        });

//  location() 
        btn3.addEventListener('click', ()=>{
            area3.innerHTML = `<h4> location 객체 </h4>`;

            // 객체가 가지고 있는 속성에 접근하기 
            for( const key in location){
                console.log('key :', key);
                console.log('value : ', location[key]); // location이 갖고 있는 속성
                area3.innerHTML += `key : , ${key},  value : ${location[key]} `; 
            }
        });
    
}