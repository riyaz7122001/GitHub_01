console.log('we are in 33 tutorial');

const students = [

    {name:'riyaz', learning: 'python' },
    {name:'faiyaz', learning: 'javascript' }

]

 function enrollStudent(student, callBack) {
    setTimeout(function() {
        students.push(student);
        console.log('student have been enrolled');
        callBack();
    },2000);
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
    }, 4000);
}

let newStudent = {name:"sunny", learning:'python'}
enrollStudent(newStudent,getStudent());