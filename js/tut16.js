// console.log("hello i am riyaz");
// console.log("we are at tut 16");
// let element = document.createElement("li");
// element.className = "classul"
// element.id = "list";

// element.innerHTML = '<b>hello this is javascript</b>'
// let ul = document.querySelector('.list');
// ul.appendChild(element);
// console.log(ul);
// console.log(element);


// let ele2 = document.createElement('h2');

// ele2.id = 'ele2';
// ele2.className = 'ele2';
// let tnode = document.createTextNode('JavaScript');
// ele2.appendChild(tnode);
// element.replaceWith(ele2);

// let myul = document.getElementById('myul');
// myul.replaceChild(ele2,document.getElementById('first'));
// myul.removeChild(document.getElementById('last'));


let str = 'javascript';
let links = document.links;
console.log(links);
let href;
Array.from(links).forEach(function(element){
    console.log(element,"thanks for entering a our links");
    href = ele2.href;
    if(href.includes(str)){
        console.log(href);
    };

});

/*let myBtn = document.getElementById('myBtn');
myBtn.addEventListener('click',function(e){
    console.log('you have clicked on a button',e);
    console.log(e.preventDefault());
});*/