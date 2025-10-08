import React from 'react'
import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {
    const navigate = useNavigate();
    return (
        <>
            <h2>ERRORE 404 - Pagina non trovata</h2>
            <div><button className='btn btn-success' onClick={() => navigate("/")}>Torna alla home</button></div>
            <div><button className='btn btn-primary' onClick={() => navigate(-1)}></button>Torna alla pagina precedente</div>
        </>
    )
}

export default ErrorPage