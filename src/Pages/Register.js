import React, { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"; 
import {auth,storage,db} from "../firebase"
import "../style.scss"
import Add from "../img/proj4.jpg"
const Register = () => {
  const[err,setErr]=useState(false)
const handleSubmit=async(e)=>{
e.preventDefault()
const displayName=e.target[0].value;
const email=e.target[1].value;
const password=e.target[2].value;
const file=e.target[3].value

try{
  const res=await createUserWithEmailAndPassword(auth, email, password)

  const storageRef = ref(storage, displayName);
  
  const uploadTask = uploadBytesResumable(storageRef, file);
  
  uploadTask.on('state_changed', 

    (error) => {
      setErr(true)
    }, 
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then( async(downloadURL) => {
         await updateProfile(res.user,{
          displayName,
          photoURL:downloadURL
         })
         await setDoc(doc(db,"users",res.user.uid),{
        uid:res.user.uid,
          displayName,
          email,
          photoURL:downloadURL
        })
      });
    }
  );
 
  
}catch(err){
     setErr(true)
}



}

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat with friends</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="display name" />
          <input type="email" placeholder="display eamil" />
          <input type="password" placeholder="display password" />
          <input style={{display:"none"}} type="file" id="file" />
          <label htmlFor="file">
            <img style={{height:"20px",width:"20px"}} src={Add} alt=""/>
            <span>Add an avatar</span>
          </label>
          <button>Sign up</button>
          {err && <span>Something went wrong</span>}
        </form>
        <p>You do have an account? Login</p>
      </div>
    </div>
  );
};

export default Register;
