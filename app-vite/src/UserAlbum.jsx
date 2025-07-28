// creare interfaccio che permette di scegliere un utente,
// che filtra gli albums e tramite selezioni di questi ultimi appaiono le foto
// passo 1: valorizzare la select con gli users

import { useEffect, useState } from "react";

const urlUsers = "https://jsonplaceholder.typicode.com/users";
//const urlAlbums="https://jsonplaceholder.typicode.com/albums";
//const urlPhotos="https://jsonplaceholder.typicode.com/photos";
const UserAlbums = () => {
  const [users, setUsers] = useState([]);
  const [userSelected, setUserSelected] = useState(0);
  const [albumSelected,setAlbumSelected] = useState(0);

    const getUsers = async()=>{
        try{
        const response=await fetch(urlUsers);
        const results=await response.json();
        setUsers(results);
    } catch (err) {
        console.log(err)
    }
}
    useEffect(()=>{
       getUsers();

    //    fetch(urlUsers)
    //         .then(res=>res.json)
    //         .then(ris=>setUsers(ris))
    //         .catch(err=>console.log(err))
    },[])

  return (
    <div className="container">
      <h1>Gestione albums photos</h1>
      <div className="row">
        <div className="col-6">
          <select className="form-select" value={userSelected} onChange={(e)=>setUserSelected(e.target.value)}>
            <option value="0">Seleziona utente</option>
            {
                users.map((u)=>{
                    return <option key={u.id} value={u.id}>{u.name}</option>
                })
            }
          </select>
        </div>
        <div className="col-6">
            <select className="form-select" value={albumSelected} onChange={(a)=>setAlbumSelected(a.target.value)}>
                <option value="0">Seleziona l'album</option>
                {
                    users.map((a)=>{
                        return <option key={a.id} value={a.id}>{a.name}</option>
                    })
                }
            </select>
        </div>
      </div>
      <div className="row">
        <div className="col-12"></div>
      </div>
    </div>
  );
};

export default UserAlbums;