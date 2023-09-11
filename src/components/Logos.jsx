import React from 'react'

 const Logos = () => {
  return (
    <div style={{
    display: 'flex',
    gap: '20px',
    flexDirection: 'column',
    justifyContent: 'center', 
    alignItems: 'center',
    width: '1280px',
    backgroundPosition: "bottom",
    backgroundSize: "cover",
    backgroundImage: "url('./img/bg-logo.png')",
    height: "285px",
    marginBottom:"50px",
    }}>

      
      <img src="./img/logo-text.png" alt="" />
      <div className="boorger-logo">
      <img src="./img/logo.png" alt="" style={{width: '220px', height: '220px'}}/>
      <h1>Tasty <br /> <span>burgers</span></h1>
      </div>

    </div>
  )
}

export default Logos