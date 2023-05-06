import React from 'react'

const Messages = () => {
  return (
    <div className='message owner'>
      <div className='messageInfo'>
        <img src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d29tZW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
       <span>just now</span>
      </div>
      <div className='messageContent'>
         <p>hello</p>
         <img src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d29tZW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
      </div>

    </div>
  )
}

export default Messages