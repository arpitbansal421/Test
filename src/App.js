import React, {useState } from 'react';
import Alert from './Alert'
import './App.scss';




function App() {
  const [ShowAlert, SetAlert]=useState(false);
  const [Content, setContent]=useState('Juspay Technologies Private Limited')
  const handleclick=()=>{
    SetAlert(true);

    setTimeout(() => {
      SetAlert(false);
    }, 2); // 2000 ms = 2 seconds

  };

  const handleChange=()=>{
    setContent('Juspay: Revolutionizing payments with seamless, secure, and speedy solutions.')

    setTimeout(()=>{
      setContent('Juspay Technologies Private Limited')
    },2000)

  }
  


    
  return (
      <>
      {ShowAlert && <Alert/>}
    <div className="ui-container">
      <div className="green-eclipse"></div> {/* green ellipse */}
      
      <div className="grid-background">
        <div className="header">
          <button className="assignment-button" onClick={handleclick}>ASSIGNMENT</button>
        </div>
        <div className="section">
          <div className="content">
            UI DEVELOPER <br /> ASSIGNMENT
          </div>
        </div>
      </div>
      
      <div className="footer1">
        <div className="company">COMPANY</div>
        <div className="company-name" onClick={handleChange} style={{cursor:'pointer'}}>{Content}</div>
      </div>
      
      <div className="ecllipse_design"></div> {/* Blue ellipse */}
    </div>
      
      </>
  );
}

export default App;