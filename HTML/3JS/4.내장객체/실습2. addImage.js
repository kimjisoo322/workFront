window.onload = function(){
let imgNode1 = document.createElement('img');
let imgNode2= document.createElement('img');

let date = new Date();

// let imgSrc = (hour < 12)? 'images/morning.jpg' : 'images/afternoon.jpg';

if (date.getHours()<12){
    
    imgNode1.src = 'images/morning.jpg';
}else{
    imgNode2.src = 'images/afternoon.jpg';
    
}
container.appendChild(imgNode1);
container.appendChild(imgNode2);

// date = new Date();
// date.getHours();


};