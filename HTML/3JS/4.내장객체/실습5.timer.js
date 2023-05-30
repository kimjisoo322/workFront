window.onload = function() {
    let bttn = document.getElementById('bttn'); // 버튼 요소 가져오기

    timerid = 0;
    bttn.addEventListener('click', function() {
      
            let div1 = document.createElement('div');
            div1.classList.add('noti'); // 'noti' 클래스 추가
            
            let text = document.createTextNode('알림 내용을 표시합니다.');
            div1.appendChild(text);
    
            let body = document.querySelector('#noti-box');
            body.appendChild(div1);
        

            // 3초후에 삭제가 실행되도록 (timeout 실행)
            setTimeout(() => {
                
                // 요소 삭제
                div1.remove();
            }, 2000);
 
    });
};



/*

*/