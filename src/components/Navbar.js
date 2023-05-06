import React from 'react'
// import "../style.scss"
const Navbar = () => {
  return (
    <div className='navbar'>
     <span className='logo'>Lama chat</span>
      <div className='user'> 
        <img src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d29tZW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
        <span>Jon</span>
        <button >Logout</button>
      </div>

    </div>
  )
}

export default Navbar