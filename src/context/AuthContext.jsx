import React, { createContext, useContext, useEffect, useState } from 'react'
import jwtDecode from 'jwt-decode'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const t = localStorage.getItem('token')
    if (!t) return null
    try { return jwtDecode(t) } catch (e) { return null }
  })

  useEffect(() => {
    const t = localStorage.getItem('token')
    if (t) {
      try { setUser(jwtDecode(t)) } catch (e) { setUser(null) }
    }
  }, [])

  const login = (token) => {
    localStorage.setItem('token', token)
    try { setUser(jwtDecode(token)) } catch (e) { setUser(null) }
  }
  const logout = () => {
    localStorage.removeItem('token')
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)

