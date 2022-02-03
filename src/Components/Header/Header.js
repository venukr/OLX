import React, { useContext } from 'react';

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext, FirebaseContext } from '../../store/FirebaseContext';
import {useHistory} from 'react-router-dom';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function Header() {

  
const history=useHistory()
  
  const{user} =useContext(AuthContext)
  const{firebase}=useContext(FirebaseContext)
  return (
    <div className="headerParentDiv">
      <div className='me-auto' >
        <Link className='p-2 mr-3'   to='/'>Home</Link>
        <Link className='p-2 mr-3'   to='/signup'>Signup</Link>
        <Link className='p-2 mr-3'   to='/login'>Login</Link>
        <Link className='p-2 mr-3'   to='/create'>Create</Link>
      </div>
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          <span>{user ? `welcome ${user.dispalyName}`:'login'}</span>
          <hr />
        </div>
        {user && <span onClick={()=>{
        firebase.auth().signOut(); 
          history.push('/login')
      }}>Logout</span>}
     
        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
