import React, { useEffect, useState } from 'react';
import { useAuth } from "../../context/AuthContext";
import { useHistory } from 'react-router-dom';

import './styles.css'

export function Header({props}) {
  const history = useHistory();
  const {  logout, user } = useAuth();
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    if(!user){
      setLoading(false);
      history.push("/");
    }
    return () => {  
    }
  }, [user, history])

  async function handleLogout(){
    await logout();
  }
  return (
    <>
       <header id='top'>
        <div className="content">
          <h1>{props}</h1>
          <div className="actionsHome">
            <p>{user.name}</p>
            <p onClick={handleLogout}>Sair</p>
          </div>
        </div>
      </header>
    </>
  )
}
