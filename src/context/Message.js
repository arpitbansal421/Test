
import React,{createContext} from 'react'

export const MyContext=createContext('Welcome to Juspay')

export  function Message({children}) {
    const message='Welcome to Juspay';
  return (
    <MyContext.Provider value={message}>
        {children}

    </MyContext.Provider>

    
  )
}

export default Message
