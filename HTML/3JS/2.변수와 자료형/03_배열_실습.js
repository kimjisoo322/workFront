function arrayTest1(){
    //  la1 요소를 선택 후 태그 안의 문자열을 배열로 만들기
    var la1 = document.getElementById('la1').innerHTML.split(',');
    
    var la2 = document.getElementById('la2').innerHTML.split(',');
    var la3 = document.getElementById('la3').innerHTML.split(',');
    var la4 = document.getElementById('la4').innerHTML.split(',');
    
    var array = la1.concat(la2).concat(la3).concat(la4);


    //text 필드 값 읽어오기 
    var text =  document.querySelector('#text').value;
    
    // 배열에서 해당값이 속해있는 index 반환
    let index = array.indexOf(text);

    if (index >= 0){
        // console.log(index);
        alert(index);
    }else{
        alert('존재하지 않습니다.');
    }
 
}

function reverseTest(){
    
    var la1 = document.getElementById('stringla1').innerText;
    var array1 = la1.split(',');
    var reversedArray = array1[0].split(' ').reverse();
    var reverseArray1_1 = reversedArray.join(' ');
    console.log(reverseArray1_1);
    
    //console.log(array.reverse);
    var la2 = document.getElementById('stringla2').innerText;
    let array2 = la2.split(',');
    var reverseArray2 = array2[0].split(' ').reverse();
    var reverseArray2_1 = reverseArray2.join(' ');
    console.log(reverseArray2_1);

    var print = document.querySelector('#print')
    print.innerHTML = ``;
    print.innerHTML += `${reverseArray1_1} ${reverseArray2_1}`;
}


let array = [];

function input(){
    var text = document.querySelector('#strInput');
    //  배열에 값을 저장
    array.push(text.value);
    //  초기화
    text.value = '';
}

function print(){
    array.sort().reverse();
    
    var print = document.querySelector('#print2');
    print.innerHTML = array.join();

    

}
function arrayTest3(){
    var strarray = document.querySelector('#stringla4').innerHTML.split(' ');
    console.log(strarray);
    var remove_text =  document.querySelector('#remove').value;
    var add_text =  document.querySelector('#add').value;
    console.log(remove_text);

    // 배열에서 해당값이 속해있는 index 반환
    let index = strarray.indexOf(remove_text);
    let result = strarray.splice(index,1);
    console.log(result)

    // let index2 = strarray.indexOf(add_text);
    let result2 = strarray.push(add_text);
    var print = document.querySelector('#print4');

    print.innerHTML = `${strarray}`;


    
// - if (index >= 0) {
//     arr.splice(index,1); 
// }

//  for ( let i =0; i<arr.length; i++){
//      if(arr[i] === remove){
//          arr.splice(i,1);
//          break;
// }
// }


}