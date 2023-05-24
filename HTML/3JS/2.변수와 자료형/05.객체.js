window.onload = ()=>{

    bts.addEventListener('click', ()=>{
        //  객체 선언 ==========================================
        let product = {
            0: '배열 흉내', // 객체명['속성명']으로 접근 가능
            pName : 'Z플립' 
            , price : 102000
            , price : 150000 // 중복선언시 마지막에 입력된 값으로 세팅
            , brand : '삼성'
            , spec : ['OLED', 'ISO15'] 
            
        };
        console.log('product : ', product);

        let area = document.querySelector('.area1');
        area.innerHTML = '객체 선언 테스트';
        area.innerHTML += '객체명[속성명] 으로 접근하는 방법<br>';

   
        area.innerHTML += '객체명.속성명 으로 접근하는 방법<br>';
        area.innerHTML += `${product.pName} <br>`;

        //  배열을 쭈루룩 출력
        for(const key in product){
            area.innerHTML += (`속성: ${key}: 값: ${product[key]}`);
        };
    
    //  속성명에 공백이나 특수문자 등이 포함된 경우 
    // ' ' 따옴표로 묶어서 표기 
    // 접근) -> [] 를 이용해 값을 가져올 수 있음 
        let user = {
            'user name' : '박지민'
            , user_age : '28'
            , 'id!!' : 'bts'
        };
/**
 * user
{user name: '박지민', user_age: '28', id!!: 'bts'}
    user.user_age
    '28'
    user['user name']
    '박지민'
    user['id!!']
    'bts'
 */
    });
//  객체의 메소드 =====================================
    bts2.addEventListener('click', ()=>{
        let area2 = document.querySelector('.area2');
        console.log('테스트', area2);
        let name = '윤시윤';
        //  객체 선언
        let dog = {
            name : '백구',
            kind : '진돗개',
            eat : function(food){
                //  객체의 내부속성에 접근하기 위해서 this 사용
                return `${this['kind']} ${this['name']}가 ${food}를 먹습니다.`;
            } 
        }
        //  객체가 가지고 있는 함수와 함수('매개변수');
         dog.eat('사과');

        // area2.innerHTML = '출력';
        area2.innerHTML = `출력<br>`;
        area2.innerHTML += dog.eat('뼈다귀');
 
         

    });

// 객체와 반복문 ==========================================
    bts3.addEventListener('click', ()=>{
        let area3 = document.querySelector('.area3');
        console.log('출력' , area3);
        let game = {
            title : '크레이지 아케이드',
            price : 0,
            support : ['win7', 'win10'],
            service : true
        };
        area3.innerHTML = `for문 출력 <br>`;
        //  game 라는 객체가 가지고 있는 key값을 찍어줌
        for(const key in game){
            area3.innerHTML += `key : ${key}, game[key] : ${game[key]}<br>`;
        };
        
        console.log(game);


        // area3.innerHTML += ;

    });

// 객체의 속성 추가 및 제거 ================================
    bts4.addEventListener('click', ()=>{
        // 빈 객체 선언 
        let member = {};

        //  객체의 속성 추가 
        member.name = '도겸';
        member.age = 28;
        //  member 객체에 job 속성을 의미한다. 
        member['job'] = '가수';

        // 객체에 메서드 추가 
        member.whoAreYou = function(){
            let str = '';
            for(const key in this){
                // this의 key의 타입이 function이 아니면 
                if(typeof(this[key])!== 'function'){
                    str += `${key} : ${this[key]} \n`;
                }
            }
            return str;
        };
        console.log(member);
        console.log(member.whoAreYou());
        console.log('job' in member);
    });

}