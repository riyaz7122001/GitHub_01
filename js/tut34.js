console.log('callabck functions');

const getRollNo = function(){
    setTimeout(() => {
        console.log("we are in first timeout function");
        let roll_no = [1,2,3,4,5];
        console.log(roll_no);

        setTimeout((roll_no) => {
            console.log('we are in second timeout function');
            let biodata= {
                name : "Riyaz",
                age : 18,
                company : "Oracle"
            }
            console.log(`My Name is ${biodata.name}. My rollno is ${roll_no} andI am ${biodata.age} yr's old.`);

            setTimeout((age) => {
                console.log("we are in third timeout function" )
                biodata.gender = "Male";
                console.log(`My Name is ${biodata.name}. My rollno is ${roll_no} andI am ${biodata.age} yr's old. My gender is ${biodata.gender}`);

                setTimeout((company) => {
                    console.log("we are in fourth timeout function");
                    console.log(`My Name is ${biodata.name}. My rollno is ${roll_no} andI am ${biodata.age} yr's old. My gender is ${biodata.gender}, My company name is ${biodata.company}.`)
                }, 2000, biodata.company);
            }, 2000,biodata.age);
            
        }, 2000 , roll_no[2]);
    }, 2000);
}

getRollNo();