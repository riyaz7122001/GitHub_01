console.log('AJAX tutorials page');

let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', function () {
    console.log('you have clicked the button fetchBtn');
    // instantiate an object
    const xhr = new XMLHttpRequest();
    //open the object
    // xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1',true);

    //use this for post request
    xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/creat', true);
    xhr.getResponseHeader('content-type', 'application/json');

    //on progresss what to do

    xhr.onprogress = function () {

        console.log('on progress');
    }

    //by the old method of onreadystatechange

    // xhr.onreadyStateChange = function(){
    //     if(this.status == 4){
    //         console.log('progress me ho bachhe',xhr.onreadyStateChange);
    //     }
    // }
    //what to do on resonse is ready
    xhr.onload = function () {
        if (this.status === 200) {
            console.log(this.responseText);
        }
        else {

            console.error('some error occured');
        }
    }

    //send the request
    param = `{"name":"test","salary":"123","age":"23"}`;
    xhr.send(param);


})


let popBtn = document.getElementById('popBtn');
popBtn.addEventListener('click', popHandler);

function popHandler() {
    console.log('you have clicked the button popBtn');
    // instantiate an object
    const xhr = new XMLHttpRequest();
    //open the object
    xhr.open('GET', 'http://dummy.restapiexample.com/employees', true);

    //use this for post request
    // xhr.open('POST','http://dummy.restapiexample.com/api/v1/create',true);
    // xhr.getResponseHeader('content-type','application/json');

    //on progresss what to do
    xhr.onprogress = function () {
        console.log('on progress');
    }
    xhr.onload = function () {
        if (this.status == 200) {
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            str = '';
            let list = document.getElementById('list');
            for (key in obj) {
                str += `<li> + ${obj[key].employee_name} + </li>`;
            }
            list.innerHTML = str;
        } else {
            console.log('some error occured');
        }
    }
    xhr.send();
    console.log('we are done');
}
