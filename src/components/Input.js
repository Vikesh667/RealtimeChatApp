import React from 'react'
import {IoMdAttach} from "react-icons/io"
import {BsImages} from "react-icons/bs"
const Input = () => {
  return (
    <div className='input'>
      <input type="text" placeholder='Type something...'/>
         <div className='send'>
         <IoMdAttach/>
         <input type="file" style={{display:"none"}} id="file"/>
         <label htmlFor='file'>
          <BsImages/>
         </label>
         <button>Send</button>
         </div>
      </div>
  )
}

export default Input