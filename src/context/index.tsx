import React, { useReducer } from 'react'

import initialState from './initialState'
import reducer from './reducer'

const Context = React.createContext({})

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <Context.Provider value={{ state, dispatch }}>
      {children}
    </Context.Provider>
  )
}

export { Context, ContextProvider }
