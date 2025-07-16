import React from "react";
import { useState } from "react";

const LoginForm = ()=>{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [message,setMessage]=useState("");

    const gestioneDati=(e)=>{
        e.preventDefault();
        setMessage("Login effettuato con "+email+" e pass "+password)
    }

    return(
    <div className="container">
        <h3>{message}</h3>
      <form className="row g-3">
        <div className="col-md-6">
          <label htmlFor="inputNome" className="form-label"> Email </label>
          <input type="email" value = {email} onChange={(e)=>setEmail(e.target.value)} className="form-control" id="inputNome" />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputCognome" className="form-label"> Password </label>
          <input type="password" value= {password} onChange={(e)=>setPassword(e.target.value)} className="form-control" id="inputCognome" />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary" onClick={gestioneDati}>Invia</button>
        </div>
      </form>
    </div>
    )
}
export default LoginForm;