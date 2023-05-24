// 화면을 모두 load한 이후에 함수를 실행해
//  웹브라우저 내의 모든 요소가 준비가 된 이후 실행 (실행시점)
window.onload = function(){
     // 0~255까지의 임의의 수를 추출
     var r = parseInt(Math.random()*256);
     var g = parseInt(Math.random()*256);
     var b = parseInt(Math.random()*256);
     document.body.style.backgroundColor= `rgb(${r}, ${g}, ${b})`;
 
}

function setColor(){
    // 0~255까지의 임의의 수를 추출
    var r = parseInt(Math.random()*256);
    var g = parseInt(Math.random()*256);
    var b = parseInt(Math.random()*256);
    document.body.style.backgroundColor= `rgb(${r}, ${g}, ${b})`;

}
// setColor();