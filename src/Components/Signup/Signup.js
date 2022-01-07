import React, { useContext, useState } from 'react';


import Logo from '../../olx-logo.png';
import { FirebaseContext } from '../../store/FirebaseContext';
import './Signup.css';
import {useHistory} from 'react-router-dom';

 

export default function Signup() {
  const[username,setUsername]=useState('')
  const[email,setEmail]=useState('')
  const[phone,setPhone]=useState('')
  const[password,setPassword]=useState('')

  const {firebase}=useContext(FirebaseContext)

  const history=useHistory();

  const handleSubmitt=(e)=>{
   e.preventDefault();
   
     
   firebase.auth().createUserWithEmailAndPassword(email, password).then((result)=> {

    result.user.updateProfile({displayName:username}).then(()=>{
      
       firebase.firestore().collection('users').add({
         id:result.user.uid,
         username:username,
         phone:phone
         }).then(()=>{
          history.push("/login")
         })
    })
    
        })
        }  

  return(
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo} alt=''></img>
        <form onSubmit={handleSubmitt}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input" value={username} onChange={(e)=>setUsername(e.target.value)}
            type="text"
            id="fname"
            name="name"
           
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input" value={email} onChange={(e)=>setEmail(e.target.value)}
            type="email"
            id="fname"
            name="email"
    
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input" value={phone} onChange={(e)=>setPhone(e.target.value)}
            type="number"
            id="lname"
            name="phone"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input" value={password} onChange={(e)=>setPassword(e.target.value)}
            type="password"
            id="lname"
    
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
     <a >Login</a>
      </div>
    </div>
  );
}

