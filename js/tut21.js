console.log('we are at 21 tutorial');
/* solving a problem*/
//create a new element 
let divEle = document.createElement('div');
// add text to that created element
let txt = document.createTextNode('this is my element. click to edit it');
divEle.appendChild(txt)
// give element a div, class and style
divEle.setAttribute('id','elem');
divEle.setAttribute('class','elem');
divEle.setAttribute('style','border: 2px solid black; width:155px; margin:34px; padding:27px');
// grab the main cotainer
let container = document.querySelector('.container');
let first = document.getElementById('myFirst');
// insert the element before element with id first
container.insertBefore(divEle,first);
divEle.appendChild(txt);
console.log(divEle,container,first);

//add event listener 
divEle.addEventListener('click',function(){
    let noteTextArea = document.getElementsByClassName('textArea').length;
    if (noteTextArea == 0){
    let html = elem.innerHTML;
    divEle.innerHTML =`<textarea class="textArea" id="textArea" rows="3">${html}</textarea>`;
    }

    // listen for blur event 
    let textArea = document.getElementById('textArea');
    textArea.addEventListener('blur',function(){
        ele.innerHTML = textArea.nodeValue;
    });
});

