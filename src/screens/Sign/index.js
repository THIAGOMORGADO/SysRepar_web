import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { useAuth } from "../../context/AuthContext";

import './styles.css'

export default function SignIn() {
  const history = useHistory();
  const { login, logout, user } = useAuth();
  const [ error, setError ] = useState('');
  const [ loading, setLoading ] = useState(false);

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

 

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError('')
      setLoading(true);
      await login(email, password);
      
    } catch {
      setError(`complete os campos corretamente!`)
      setLoading(false);
    }
  }

  async function handleLogout(){
    await logout();
  }


    useEffect(() => {
    if(user){
      setLoading(false);
      history.push("/home");
    }
    return () => {  
    }
  }, [user, history])

  return (    
    <div id="login">
      <h1 className="title">{user?.name}</h1>
      <p>{error}</p>

      <form className="form" onSubmit={handleSubmit}>
      
          <div className="field">
            <br />
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Digite sue email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="field">
            <label htmlFor="password">Senha: </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Sua senha"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>

        <div className="actions">
          <button type="submit" disabled={loading}>Entrar</button>
        </div>
        <p onClick={handleLogout}>LOGOUT</p>

      </form>
    </div>    
  )
}
