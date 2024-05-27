import React, { createContext, useState, useContext } from 'react'

const ActiveIdContext = createContext()

export const ActiveIdProvider = ({ children }) => {
  const [activeId, setActiveId] = useState(null)

  return (
    <ActiveIdContext.Provider value={{ activeId, setActiveId }}>
      {children}
    </ActiveIdContext.Provider>
  )
}

export const useActiveId = () => {
  const context = useContext(ActiveIdContext)
  if (!context) {
    throw new Error('useActiveId must be used within an ActiveIdProvider')
  }
  return context
}

