//Promise: Async Behavior

const getData = new Promise((resolve,reject) => {
    // resolve(134345);
    reject("No data Available")
} )

getData
.then(data => console.log(data))
.catch(err => console.log("Err:",err))

function getFetch1(url){

    fetch(url)
    .then(res => res.json())
    .then ( data => console.log(data))
    .catch(err => console.log(err.message))

}

async function getFetch2 (url){
    try{
        const res = await fetch(url);
        const data = res.json();
        console.log(data);
    }
    catch (err){
        console.log(err);
    }
}

