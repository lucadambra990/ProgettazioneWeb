import React, { useState } from 'react'

const Hidden = () => {
    const [show,setShow]=useState(true)
  return (
    <div>Hidden
        {show && <Elemento></Elemento>}
        <div>
            <button className='btn btn-primary' onClick={()=>setShow(!show)}>{show ? "Nascondi" : "Visualizza"}</button>
        </div>
    </div>
  )
}

const Elemento = ()=>{
    return <div>Elemento</div>
}
export default Hidden


{
  "id"; 123,
  "sessions" ;[
    {
      "self": "http://myUniversity.ac.uk/examsessions/110", // Link alla risorsa sessione stessa
      "room": { "self": "http://myUniversity.ac.uk/rooms/222" }, // Link alla risorsa aula
      "link": {
        "rel": "http://myUniversity.ac.uk/examSessions/reserve", // Descrive la relazione (prenotazione)
        "uri": "/examsessions/110" // Link all'azione di prenotazione
      }
    },
    {
      "self": "http://myUniversity.ac.uk/examsessions/211",
      "room": { "self": "http://myUniversity.ac.uk/rooms/115" },
      "link": {
        "rel": "http://myUniversity.ac.uk/examSessions/reserve",
        "uri": "/examsessions/211"
      }
    }
  ]
}