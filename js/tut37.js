console.log('we are in 33 tutorial');

const students = [

    {name:'riyaz', learning: 'python' },
    {name:'faiyaz', learning: 'javascript' },
    {name:'anjum', learning:'excel'}
]

 function enrollStudent(student) {

    return new Promise ((resolve,reject) =>{
        setTimeout(function() {
            students.push(student);
            console.log('student have been enrolled');
            const error = false;
            if(!error){
            resolve();
            }
            else{
                reject();
            }
        },2000);
        
    })
    
}

//for each function is synchronous
//settimeout function is asynchronous
function getStudent(student){
    setTimeout(() => {
        let str = '';
        students.forEach(function (student) {
            str += `<li> ${student.name} </li>`
        });
        document.getElementById('students').innerHTML = str;
console.log('students have been fetched')
    }, 3000);
}

let newStudent = {name:"sunny", learning:'python'}
enrollStudent(newStudent).then((result) => {
    getStudent()
}).catch((err) => {
    console.log('error occured' + err)
});