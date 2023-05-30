// 페이지가 모두 불러져 왔으면 함수를 실행
window.onload = function(){


        // 버튼 요소 선택
        let btn1 = document.querySelector('#btn1');
        btn1.addEventListener('click', function(e){
            
            // input 필드에 저장된 내용을 변수에 저장
            let nameinput = document.querySelector('#username').value;
            let major = document.querySelector('#major').value;
                        
            let tbody = document.querySelector('#attendant > tbody');
            // 테이블의 행
            let tr = document.createElement('tr');

            // 테이블의 한칸
            let tdName = document.createElement('td');
            tdName.innerHTML = nameinput;
            let tdMajor = document.createElement('td');
            tdMajor.innerHTML = major;

            //  요소 생성 (부모와 자식 연결)
            tr.appendChild(tdName);
            tr.appendChild(tdMajor);

            // 테이블에 자식요소로 추가 (요소를 화면에 보여주기 위해서는 화면에 자식요소로 등록!)
            tbody.appendChild(tr);
            
            // 등록이 되긴 하지만 화면에서 사라짐! 
            // 기존 버튼이 가지는 이벤트를 삭제 해줘야함! 
            //  -> ** 버튼이 클릭되었을 때 함수에 이벤트 객체를 넣어줌 function(e) / e.preventDefault
                e.preventDefault();
          
        });



};