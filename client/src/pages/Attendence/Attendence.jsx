import React from 'react'
import './attendence.css'
import { IoMdPersonAdd } from 'react-icons/io'
import { PiNotePencilBold } from 'react-icons/pi'

const Attendence = () => {
  return (
    <div className='container'>
      <div className="topbar" style={{ justifyContent: 'start' }}>
        <span className="icon">
          <PiNotePencilBold />
        </span>
        <h1> Attendence</h1>
      </div>
    </div>
  )
}

export default Attendence