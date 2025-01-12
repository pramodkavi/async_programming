function fetchData() {
    return new Promise((resolve, reject)=>{
        console.log("Fetching data...");
        setTimeout(() => {
            const data = { id: 1, name: "John Doe" };
            let check = false;
            if(check){
                resolve(data);
            }else{
                reject("error occured...");
            }
        }, 2000);
        console.log("Comming data...");
    })
}

fetchData().then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.error(error)
})