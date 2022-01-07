import React, { useContext, useEffect, useState } from 'react';
import { FirebaseContext } from '../../store/FirebaseContext';
import { PostContext } from '../../store/PostContext';

import './View.css';
function View() {
  const [userDetails,setUserDetails]=useState()
  const {postDetails}=useContext(PostContext)
  const{firebase}=useContext(FirebaseContext)
  useEffect(()=>{
    firebase.firestore().collection('users').get().then((snapshot)=>{
      snapshot.forEach(doc=> {
        setUserDetails(doc.data())
        
      });
    })
  },[])
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price} </p>
          <span>{postDetails.category}</span>
          <p>Two Wheeler</p>
          <span>{postDetails.createAt}</span>
        </div>
   {userDetails &&  
   
   <div className="contactDetails">
          <p>Seller details</p>
          <p> {userDetails.username}
           
            </p>
          <p>{userDetails.phone}
          
          
          
          
          
          </p>
        </div>}
      </div>
    </div>
  );
}
export default View;