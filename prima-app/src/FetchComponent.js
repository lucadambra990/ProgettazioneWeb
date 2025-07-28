import React, { useEffect,useState } from 'react'

const url="https://jsonplaceholder.typicode.com/users";
const FetchComponent = () => {
    const [users,setUsers]=useState([]);

    const getData= async function(){
       const  user=await fetch(url).then(ris=>{
        console.log( ris.json())
        ris.json()
      })
       setUsers(user)

    }

    useEffect(()=>{
        getData();
    },[])

  return (
    <>
      <h1>Fetch Component</h1>
      <ul className="users">
        <select>
        {users.map((el) => {
          const {id,name,username,email,address} = el;
          return (
            <li key={id} className="shadow">
              <div>
                <h5>{id} - {name} - {username} - {email} - {address}</h5>
                <a href={url}> Profile</a>
              </div>
            </li>
            
          );
        })}
        </select>
      </ul>
    </>
  )
}

export default FetchComponent