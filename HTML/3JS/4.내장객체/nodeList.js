window.onload= function(){
    // btn1.addEventListener('click', function(){

    //     let pNode1 = document.createElement('p');

    //     let pNode2 = document.createElement('p');
    //     let pNode3 = document.createElement('p');
    //     let pNode4 = document.createElement('p');
    
    //     let textNode = document.createTextNode('JAVA');
    //     let textNode1 = document.createTextNode('Oracle');
    //     let textNode2 = document.createTextNode('JSP/Servlet');
    //     let textNode3 = document.createTextNode('SPRING');
    
    //     pNode1.appendChild(textNode);
    //     pNode2.appendChild(textNode1);
    
    //     pNode3.appendChild(textNode2);
    //     pNode4.appendChild(textNode3);
    
    //     let body = document.querySelector('body');
    //     let p = document.querySelectorAll('p');
    
    
    
    //     body.insertBefore(pNode1,p[0]);
    //     body.insertBefore(pNode2,p[0]);
    
    //     body.appendChild(pNode3);
    //     body.appendChild(pNode4);

    // });    


    let liNode = document.createElement('li');
    let textNode = document.createTextNode('Java');

    let liNode2 = document.createElement('li');
    let textNode2 = document.createTextNode('Oracle');

    liNode.appendChild(textNode);
    liNode2.appendChild(textNode2);

    let ul = document.querySelector('#items');
    let li = document.querySelectorAll('li');

    ul.insertBefore(liNode,li[0]);
    ul.insertBefore(liNode2,li[0]);
   
}