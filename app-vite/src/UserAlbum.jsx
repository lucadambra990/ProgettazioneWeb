// creare interfaccio che permette di scegliere un utente,
// che filtra gli albums e tramite selezioni di questi ultimi appaiono le foto
// passo 1: valorizzare la select con gli users

import React, { useEffect, useState } from "react";
import useFetch from "./hooks/useFetch";


const urlUsers = "https://jsonplaceholder.typicode.com/users";
const urlAlbums = "https://jsonplaceholder.typicode.com/albums";
const urlPhotos = "https://jsonplaceholder.typicode.com/photos";
const UserAlbumsFullStack = () => {
  const {data:users,isLoading}=useFetch(urlUsers);
  // const [users, setUsers] = useState([]); complementare alla riga superiore
  const [userSelected, setUserSelected] = useState(0);
  const [photos, setPhotos] = useState([])

  const [albums, setAlbums] = useState([]); //xmind app per mappe mentali
  const [albumSelected, setAlbumSelected] = useState(0);


  /*const getUsers = async () => {
    try {
      const response = await fetch(urlUsers);
      const result = await response.json();
      setUsers(result);
    } catch (err) {
      console.log(err);
    }
  };*/


  const getAlbums = async () => {
    try {
      const url = urlAlbums + "?userId=" +userSelected;
      const response = await fetch(url);
      const result = await response.json();
      setAlbums(result);
    } catch (err) {
      console.log(err);
    }
  };

  const getPhotos = async () =>{
    try{
      const url = urlPhotos + "?userId=" +albumSelected;
      const response = await fetch(url);
      const result = await response.json();
      setPhotos(result)
    } catch (err) {
      console.log(err)
    }
  };


  /*useEffect(() => {
    getUsers()
  }, []);*/

  useEffect(() => {
    if(userSelected){
      getAlbums();
    }else{
      setAlbums([])
    }
    
  }, [userSelected]);

  useEffect(() =>{
    if(albumSelected){
      getPhotos();
    }else{
      setPhotos([]);
    }
    
  }, [albumSelected]);

  const manageUser = (e) => {
    setUserSelected(e.target.value);
    setAlbumSelected(0);
  };

  const Opt=({id,name,userId,title})=>{
    const selectedValue = id===(userId ? albumSelected : userSelected);
    const optName= userId ? title : name;
    return (<option value={id} defaultValue={selectedValue}>{optName}</option>)
  }
  if(isLoading){
    return "Sto caricando"
  }

  return (
    <div className="container">
      <h1>Gestione albums e photos</h1>
      <div className="row">
        <div className="col-6">
 <select
          className="form-select"
          value={userSelected}
          onChange={(manageUser)}
        >
          <option value="">Seleziona Utente</option>


          {users.map((u) => {
            return (
              <Opt key={u.id} {...u}/>
            );
          })}
        </select>

        </div>
       
        <div className="col-6">
             <select className="form-select" 
              value={albumSelected} 
                onChange={(e)=>setAlbumSelected(e.target.value)}>
          <option value="0"> seleziona album</option>
          {albums.map((u) => {
            return (
              <option key={u.id} value={u.id}>
              
                {u.title}
              </option>
            );
          })}
        </select>
        </div>
       
      </div>


      <div className="row">
        <div className="col-12"></div>
        {photos.map((u) => {
          return(
            <p key={u.id} value={u.id}>
              <span>{u.title}</span>
            </p>
          );
        })}
      </div>
    </div>
  );
};


export default UserAlbumsFullStack;
