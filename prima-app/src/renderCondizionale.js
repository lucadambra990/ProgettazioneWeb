import React, { useEffect, useState } from "react";

const url = "https://jsonplaceholder.typicode.com/photos";
const RenderCondizionale = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [photos, setPhotos] = useState([]);

  const getData = async () => {
    setIsError(false);
    
    try {
    
      const resp = await fetch(url).then((res) => res.json())
      setPhotos(resp);
    } catch (err) {
      console.log(err);
      setIsError(true);
    }
    setIsLoading(false);
  };
  
  useEffect(()=>{
    setIsLoading(true);
    setTimeout(()=>{
        
        getData()
    },2000)
  },[])


  if (isLoading) {
    return <h2>In caricamento....</h2>;
  }

  if (isError) {
    return <h2>Chiamata in errore</h2>;
  }

  return <div>
    {
        photos.map((p)=>{
            return (<p>{p.title}</p>)
        })
    }
  </div>;
};

export default RenderCondizionale;