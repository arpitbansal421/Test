import React,{useContext} from 'react'

import { MyContext } from './context/Message'


function Alert() {
 
    const message=useContext(MyContext);

    alert(message);
  return (
    <div>

      
    </div>
  )
}

export default Alert
