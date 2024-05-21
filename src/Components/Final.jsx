import React from 'react'

const Final = () => {
    let showV = false
    const handleShow = ()=>{
        showV = true
    }
    setTimeout(handleShow, 10000);
      
  return (
    <div>
      {showV ?  <p>done</p> : <p>jsdhkjs</p>}
    </div>
  )
}

export default Final
