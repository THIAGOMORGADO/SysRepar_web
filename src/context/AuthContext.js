import React, { useContext, useState } from "react"
import server from '../services/api';

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [ loading, setLoading ] = useState(false)
  const [ user, setUser ] = useState('')

 async function login(email, password) {
    setLoading(true);
    try {
      const response = await server.post('/login', {
        email,
        password
      })
      setUser(response.data)
      setLoading(false)
    } catch (error) {
      alert(error)
      setLoading(false)
    }
  }

  async function logout() {
    setUser('')
  }

  const value = {
    login,
    logout,
    user,
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )

}