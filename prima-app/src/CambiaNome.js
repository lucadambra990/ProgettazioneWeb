import { useState } from "react"; 

const CambiaNome = () =>  {
    const [nome, setNome] = useState("Luca");
    const cambia = () => {
        if(nome === "Luca"){
            setNome("Manuel")
        }else{
            setNome("Luca")
        }

    }
    return ( 
        <div>
            {nome}
        <div>
           <button class= "btn btn-dark" onClick={cambia}> Cambia </button>
        </div>
        </div>
    );
 };
export default CambiaNome;