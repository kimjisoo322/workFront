
window.onload=function(){

    
/* 프로필 보기 버튼을 클릭하면 나타나고,
 x 버튼을 누르면 다시 사라짐 */

 
 //  모달창 보여주기
 let open = document.getElementById('open');
 let close = document.getElementById('close');
 let modalbox = document.getElementById('modal-box');

    open.addEventListener('click', function(){

        modalbox.classList.add('active');
       
    });

    // 모달창 닫아주기 
    close.addEventListener('click', function(){
        modalbox.classList.remove('active');
    });
    
}
