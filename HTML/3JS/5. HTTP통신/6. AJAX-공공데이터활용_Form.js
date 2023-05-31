window.onload = function(){
    
    //  현재 위치 가져오기
    if(navigator.geolocation){
        // 위치정보 사용 가능
        // getCurrentPosition(성공콜백함수, 오류콜백함수)
        
        navigator.geolocation.getCurrentPosition(position =>{
            let latitude = position.coords.latitude;    // 위도
            let longitude = position.coords.longitude; // 경도

            mapX.value = longitude;
            mapY.value = latitude;
        });
      }else{
        // 위치정보 사용 불가능
        alert('geolocation 지원불가! - 현재 위치를 알 수 없습니다.');
      }



    let btn = document.querySelector('#btnCampInfo');

    btn.addEventListener('click', function(e){

        // 기본 이벤트 제거
        e.preventDefault();

        let campForm = document.querySelector('#campForm');
        
        //  formData가 가지고 있는 메서드 사용 1_ 모든 키/ value 쌍을 반환
        let formData = new FormData(campForm);
        
        let parms = '';
        let url = 'https://apis.data.go.kr/B551011/GoCamping/locationBasedList?';
        
        for(let pair of formData.entries()){
            //  console.log('pair[0]', pair[0]);
            //  console.log('pair[1]', pair[1]);
            parms += `${pair[0]}=${pair[1]}&`;
        }
        

        url += parms;
        console.log('url',url);


        /*
        캠핑장 정보를 받아오고 싶어서 url을 작성해서 url로 부터 요청 결과가 성공적이라면  
        자바 오브젝트로 반환해서 변환 >
        */ 

        // ES6에서 
        // url요청 결과를 받아옴
        fetch(url)
        // 요청결과가 성공이라면 
        // res로부터 json 파일을 자바오브젝트로 파싱되어
        // res.json에서 반환된 값이 밑에 json으로 들어오게 됨  
        // 화살표함수에서 한줄인 경우 중괄호, return이 생략 가능 > 
        //  * res 는 fetch의 결과가 들어오는 것 -> fetch의 결과는 url로부터 받아온 문자열이고
        //  받아온 문자열을 .json 해서 객체로 파싱. 
        
        .then(res => res.json())
        //  res.json하면 오브젝트로 반환 
        .then((json)=>{console.log(json)
            printCampInfo(json.response.body.items.item);
            // console.log('d',json);
        });
        
    });
};

//  캠핑장 정보 출력 

function printCampInfo(item){

    // item 배열을 매개변수로 받아서 배열에 입력된 정보를 화면에 출력> 그렇기에 매개변수에 item 넣음
    // let item = jsObj.response.body.items.item;

    let result = document.querySelector('#result');
    result.innerHTML = '';
    result.innerHTML += '<ul>';
         
    for(content of item){
        result.innerHTML += `
                <li>
                <h1>${content.facltNm}</h1>
                 <p> <img src = ${content.firstImageUrl}> </p>
                 <p>${content.intro}</p>
                </li>` ;
        }
    result.innerHTML += '</ul>';
 };