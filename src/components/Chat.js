import React from 'react'
import { AiFillVideoCamera } from 'react-icons/ai';
import {MdPersonAddAlt1} from "react-icons/md"
import {FiMoreHorizontal} from "react-icons/fi"
import Messagess from './Messagess';
import Input from "./Input"
const Chat = () => {
  return (
    <div className='chat'>
      <div className='chatInfo'>
       <span>Jane</span>
       <div className='chatInfo'>
        <div className='chatIcons'>
       <AiFillVideoCamera/>
       <MdPersonAddAlt1/>
        <FiMoreHorizontal/>
        </div>
       
       </div>
      
      </div>
      <Messagess/>
      <Input/>
    </div>
  )
}

export default Chat