window.onload = function(){
    btn1.addEventListener('click', function(){
        let nameinput = document.querySelector('#username').value;
        let major = document.querySelector('#major').value;

        console.log(nameinput);

        let tr = document.createElement('tr');
        let td = document.createElement('td');
    
        tr.appendChild(td);
    

    });

};