console.log('promises by thapa technical');



function myfunction() {
const promiseObj = new Promise((resolve,reject) => {
    setTimeout(() => {
        let roll_no = [1,2,3,4,5];
        const error = false;
        if(!error){
        resolve(roll_no);
        }else{
        reject('error while communicating');
        }

    }, 2000);
});

const getBiodata = (index) => {
    return new Promise((resolve,reject) =>{
        setTimeout((index) => {
            let biodata = {
                name: "riyaz", age: 18
            }
            resolve(` My Name is ${biodata.name}.My rollno is ${index}and i am ${biodata.age} years old`);
        }, 2000,index);
    })
};

const getCompany = (index1) => {
    setTimeout((index1) => {
        let biodata = {
            name: "riyaz", age: 18, company : "Oracle"
        }
        console.log(`My Name is ${biodata.name}.My rollno is ${index1}and i am ${biodata.age}years old. My company is ${biodata.company}.`)
    }, 2000,index1);
}

// promiseObj.then((rollno) => {
//     console.log(rollno);

//   return getBiodata(rollno[2]);
  
// }).then((data) => {
//     console.log(data);
//     getCompany(34,"Oracle");
// }).catch((err) => {
//     console.log(err);
// });

// async function getData() {
//     try{
//     const rollnoData = await promiseObj;
//     console.log(rollnoData);

//     const getBiodatas = await getBiodata(rollnoData[2]);
//     console.log(getBiodatas);
//     const getCompanyName = await getCompany(rollnoData[2]);
//     console.log(getCompanyName);
//     }catch(error){
//         console.log(`Error:${error}.`)
//     }
// }

// getData();


async function getData (){
    const getrollno = await promiseObj;
    console.log(getrollno);

    const getBiodatas = await getBiodata(getrollno[2]);
    const getCompanyName =  getCompany(getrollno[2]);
    console.log(getBiodatas);
    console.log(getCompanyName);
}

getData();
