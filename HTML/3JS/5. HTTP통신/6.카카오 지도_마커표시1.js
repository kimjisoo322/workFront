    window.onload =function(){
            // ----------  지도 생성하는 곳!
    var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3// 지도의 확대 레벨
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

            // mapX.value = longitude;
            // mapY.value = latitude;
        

        }else{
        // 위치정보 사용 불가능
        alert('geolocation 지원불가! - 현재 위치를 알 수 없습니다.');
        }

    function doSomething(latitude, longitude){
    // 현재 위치정보를 지도에 세팅- 중심좌표, 마커 

    // 마커 표지션(위도와 경도 생성)
    var markerPosition  = new kakao.maps.LatLng(latitude, longitude); 

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
    }