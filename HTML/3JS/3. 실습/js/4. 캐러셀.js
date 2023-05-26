window.onload = function(){
    //  이미지 배열 만들기 (이미지의 파일명을 배열로!)
    imgs = ['pic-1.jpg','pic-2.jpg','pic-3.jpg','pic-4.jpg','pic-5.jpg', 'pic-6.jpg'];
    
    // container.style.backgroundImage ='url(images/pic-1.jpg)';

    //  container 박스의 배경화면을 배열의 0번째 인데스값을 넣어보자.
    // container.style.backgroundImage = url
    
    // 왼쪽 버튼이 클릭되었을 때 , 0보다 작니 
    index = 0;
    
    container.style.backgroundImage =`url(images/${imgs[index]})`;
    
    left.addEventListener('click', function(){
        index--;
        if(index < 0){
            //  imgs.length -1 
            // index +=imgs.length;
            index = imgs.length-1;
        }
        container.style.backgroundImage ='url(images/'+ imgs[index]+')'; 
    });

    // 오른쪽 버튼이 클릭되었을 때 , 배열의 총길이보다 크거나 같니 
    right.addEventListener('click', function(){
        index++;
        if(index >= imgs.length){
            //  imgs.length +1
            //  index -=imgs.length;
            index = imgs.length+1;
        }
          container.style.backgroundImage ='url(images/'+ imgs[index]+')'; 
    });
}   
//  일정간격으로 반복적으로 콜백함수를 실행
//  setInternal(콜백함수, 대기시간(밀리초), (콜백함수의 인자 나열))
var i = 0; 
var interval = setInterval(function(){
    
   imgChange();
    stop();
}, 3000);

function imgChange(){
 //  img, index는 지역변수로 선언되어있기에 함수밖에서는 실행x 오류!! 
    // -> 함수 밖에서 사용하려면 전역변수로 지정 (변수 선언x)
    index--;
    if(index < 0){
        //  imgs.length -1 
        // index +=imgs.length;
        index = imgs.length-1;
    }
    container.style.backgroundImage ='url(images/'+ imgs[index]+')'; 
}

function stop(){
    console.log('setInterval 중지');
    clearInterval(interval);
}