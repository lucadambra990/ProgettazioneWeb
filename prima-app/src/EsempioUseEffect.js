import React, { useEffect,useState} from "react";

const EsempioUseEffect = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    console.log("sto usando Effect 1");
    if(count<1){
      document.title="nessun titolo 1"
    }else{
       document.title="Count 1 incrementato"
    }

    return (()=>{console.log("Sonod entro il cleanup 1")})

    //return(()=>console.log("Clean up"))
  },[count]);//primo arrow function, secondo array che può o meno esserci, senza secondo parametro viene sempre eseguito lo use state, con parametro array vuoto viene eseguito una sola volta


  useEffect(() => {
    console.log("sto usando Effect 2");
   if(count2<1){
      document.title="nessun titolo 2"
    }else{
       document.title="Count 2 incrementato"
    }
return (()=>{console.log("Sonod entro il cleanup 2")})
    //return(()=>console.log("Clean up"))
  },[count2]);//primo arrow function, secondo array che può o meno esserci, senza secondo parametro viene sempre eseguito lo use state, con parametro array vuoto viene eseguito una sola volta

 // console.log("fuori dallo use Effect");
  const incrementa = () => {
    setCount((currentValue) => {
     
        return currentValue + 1;
     
    });
  };
    const increment2 = () => {
    setCount2((currentValue) => {
     
        return currentValue + 1;
     
    });
  };
  return (
    <>
      <div>EsempioUseEffect count 1: {count}</div>
       <div>EsempioUseEffect  count 2: {count2}</div>
      <div>
    
        <button onClick={incrementa}>Incrementa C1</button>
          <button onClick={increment2}>Incrementa C2</button>
      </div>
    </>
  );
}