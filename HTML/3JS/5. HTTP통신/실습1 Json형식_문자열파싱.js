// 버튼이 클릭되면 
// json 형식 문자열을 파싱해서 화면에 출력 
window.onload =function(){
  let btn = document.querySelector('#register');

  btn.addEventListener('click', function(e){
     e.preventDefault();
    
     
     for(obj of jsObj){
      let tbody = document.querySelector('#attendant > tbody');

     // 테이블의 행
     let tr = document.createElement('tr');

     // 테이블의 한칸
     let tdName = document.createElement('td');
     tdName.innerHTML = obj.name;
     let tdMajor = document.createElement('td');
     tdMajor.innerHTML = obj.major;
     let tdgrade = document.createElement('td');
     tdgrade.innerHTML = obj.grade;

     //  요소 생성 (부모와 자식 연결)
     tr.appendChild(tdName);
     tr.appendChild(tdMajor);
     tr.appendChild(tdgrade);

     // 테이블에 자식요소로 추가 (요소를 화면에 보여주기 위해서는 화면에 자식요소로 등록!)
     tbody.appendChild(tr);
    }
    
  });
}
let jsonStr = `
  [{
    "name" : "박지민",
    "major" : "생활체육학과",
    "grade" : 3
  },
  {
    "name" : "전정국",
    "major" : "생활체육학과",
    "grade" : 2
  },
  {
    "name" : "김태형",
    "major" : "생활체육학과",
    "grade" : 3
  },
  {
    "name" : "김석진",
    "major" : "생활체육학과",
    "grade" : 4
  }
  ]`;

  // jsObj로 변경 
  let jsObj = JSON.parse(jsonStr);
  
