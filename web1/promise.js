const url="https://jsonplaceholder.typicode.com/users";

let post="";

fetch(url).then(response=>response.json()).then(ris=>
    {
        console.log("risultato fetch",ris)
        post=ris;
    }
).catch(err=>console.log(err))

async function getPost(){
    const response=await fetch(url);
    const ris=await response.json()
    console.log(ris)
    return ris;
}
getPost().then(ris=>console.log(ris));
console.log("post",post);