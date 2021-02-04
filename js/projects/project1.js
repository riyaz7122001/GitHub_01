console.log('hello world');

showNotes();

let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click',function(e){

    let addTxt = document.getElementById('addTxt');
    let addTitle = document.getElementById('addTitle');
    let notes = localStorage.getItem('notes');
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }

    let myObj = {
        title : addTitle.value ,
        text : addTxt.value
    }
    notesObj.push(myObj);
    localStorage.setItem('notes',JSON.stringify(notesObj));
    addTxt.value = "";
    addTitle.value = "";
    // console.log(notesObj);

    showNotes();
})


// functions to show elements from local storage;

function showNotes(){

    let notes = localStorage.getItem('notes');
    if(notes == null){

        notesObj = [];
    }
    else{

        notesObj = JSON.parse(notes);
    }
    let html = '';
    notesObj.forEach(function(element,index){
        html += ` <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title"> ${element.title}</h5>
            <p class="card-text">${element.text}</p>
            <button id = "${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note </a>
        </div>
    </div>`;
    
});

 let notesEle = document.getElementById('notes');
 if(notesObj.length != 0){
  notesEle.innerHTML = html;
 }else
 {
     notesEle.innerHTML = `Nothing to show! Use  "Add a Note" section Above to Add Notes.`  
 }
}

// function for deleting a note;

function deleteNote(index){
    // console.log('I am deleting',index);

    let notes = localStorage.getItem('notes');
    if(notes == null){

        notesObj = [];
    }else{
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index,1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    showNotes();
}

let search = document.getElementById('searchTxt');
search.addEventListener('input',function(){

    let inputVal = search.value.toLowerCase();
    // console.log("input event fired",inputVal);
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName('p')[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }else{
            element.style.display = "none";
        }
        // console,log(cardTxt);
    });
    
});

/*
Further Features
1. Add Title;
2. Mark a note as Important;
3. Separate notes by user;
4. sync and host with a web server;
*/