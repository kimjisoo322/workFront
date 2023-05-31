
window.onload = function(){
      
                // ----------  지도 생성하는 곳!
                var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
                mapOption = { 
                    center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
                    level: 10// 지도의 확대 레벨
                };
            
                // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
                map = new kakao.maps.Map(mapContainer, mapOption); 
            
            
                // ----------- 현재 위치 
                if(navigator.geolocation){
                    // 위치정보 사용 가능
                    // 성공콜백, 오류 콜백, 옵션
                    navigator.geolocation.getCurrentPosition
                    ((position) =>{
                        doSomething(position.coords.latitude, position.coords.longitude);                               
                    }
                    , (err) => console.log(err)
                    );
                
                    }else{
                    // 위치정보 사용 불가능
                    alert('geolocation 지원불가! - 현재 위치를 알 수 없습니다.');
                    }
            
                function doSomething(latitude, longitude){
                // 현재 위치정보를 지도에 세팅- 중심좌표, 마커 
            
                // 마커 표지션(위도와 경도 생성)
                var markerPosition  = new kakao.maps.LatLng(latitude, longitude); 
                mapX.value = longitude;
                mapY.value = latitude;
                // 마커를 생성합니다    (2. maps에 marker 표시)
                var marker = new kakao.maps.Marker({
                    map: map, 
                    position: markerPosition
                });
                // 마커가 지도 위에 표시되도록 설정합니다  (3. setMap)
                // > map : map 이 있을 경우 setMap(map) 생략o 
                // marker.setMap(map);
            
                // 지도 중심좌표를 접속위치로 변경합니다
                map.setCenter(markerPosition);  
                } 

    let btn = document.querySelector('#btnCampInfo');

    btn.addEventListener('click', function(e){

        
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
            if(json.response.body.items == ''){
                alert('주변에 캠핑장이 없습니다. 반경을 확대해주세요!');
                return;
            }
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
    
    positions = [];
    for(content of item){
        result.innerHTML += `
                <li>
                <h1>${content.facltNm}</h1>
                 <p> <img src = ${content.firstImageUrl}> </p>
                 <p>${content.mapX}</p>
                 <p>${content.mapY}</p>
                </li>` ;
                

        // 포지션 객체를 생성 
        let position = {        
            title: `${content.facltNm}`, 
            latlng: new kakao.maps.LatLng(`${content.mapY}`, `${content.mapX}`)
        };
        positions.push(position);

        // console.log('position', position);
        // console.log('positions', positions);


        // 마커를 생성합니다
        var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
       
        // 마커 이미지의 이미지 크기 입니다
         var imageSize = new kakao.maps.Size(24, 35); 
        
        // 마커 이미지를 생성합니다    
        var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 
        
        var marker = new kakao.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: new kakao.maps.LatLng(`${content.mapY}`, `${content.mapX}`), // 마커를 표시할 위치
            title : `${content.facltNm}`,  // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
            image : markerImage // 마커 이미지 
        });
    }
    result.innerHTML += '</ul>';
 };
 
 // 마커 클러스터러를 생성합니다 
 var clusterer = new kakao.maps.MarkerClusterer({
    map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체 
    averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정 
    minLevel: 10 // 클러스터 할 최소 지도 레벨 
});

// 데이터를 가져오기 위해 jQuery를 사용합니다
// 데이터를 가져와 마커를 생성하고 클러스터러 객체에 넘겨줍니다
$.get("json/chicken.json", function(data) {
    // 데이터에서 좌표 값을 가지고 마커를 표시합니다
    // 마커 클러스터러로 관리할 마커 객체는 생성할 때 지도 객체를 설정하지 않습니다
    console.log('data.positions', $(data.positions));
    var markers = $(data.positions).map(function(i, position) {
        return new kakao.maps.Marker({
            position : new kakao.maps.LatLng(position.lat, position.lng)
        });
    });

    // 클러스터러에 마커들을 추가합니다
    clusterer.addMarkers(markers);
});