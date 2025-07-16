import { useState } from "react"; 

const CambiaNome = () =>  {
    const [nome, setNome] = useState("silvia");
    const cambia = () => {
        if(nome === "silvia"){
            setNome("Camilla")
        }else{
            setNome("silvia")
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