console.log('we are learning javascript');

function func1 (){

    return new Promise ((resolve,reject) => {
        setTimeout(() => {
            const error = false;
            if(!error){
                console.log("your promise has been resolved"); 
                resolve();
            }else{
                console.log('your promise has not been resolved');
                reject('your promise has not been resolved');
            }
        }, 2000);
    })
}

func1().then(() => {
    console.log("thanks your data has been resolved");
}).catch((error) => {
    console.log("very bad " + error);
});