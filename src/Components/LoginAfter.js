import React from 'react';
import {  useNavigate } from 'react-router-dom';

import '../Assets/Css/Dashboard.css';
import { Settings2 } from 'lucide-react';
import userimg from '../Assets/Image/11.jpg'

import { CircleUser, LogOut, BookHeart, Book,Twitter,Facebook,Instagram,Linkedin } from 'lucide-react';


function LoginAfter() {
  const navigate = useNavigate()
  const handleLogout = () => {
    navigate('/Home')
  }
  const popup1=()=>
  {
    alert("Changes has been saved")
  }

  return (
    <div>
      <div className="side-bar">


        <div className="bookName">

          <h3>William</h3>
          <p className="newyork">NewYork,USA</p>
        <div>
          <img src={userimg} alt="Book" className="userimg" />
        </div>
        
        </div>
        <div className="d-c">
          <ul>
            <div className="icon-text">
              <CircleUser /> <li>Account</li>
            </div>
            <div className="icon-text">
              <Settings2 /> <li>Settings</li>
            </div>
            <div className="icon-text">
              <BookHeart />
              <li>Your Favourites</li>
            </div>
            <div className="icon-text">
              <Book />
              <li>Your Reviews</li>
            </div>
            <div className="icon-text" onClick={handleLogout}>
              <LogOut />
              <li>Logout</li>
            </div>
          </ul>
          <p className="follow">Follow us on</p>
          <div className="allicons">

          <Instagram className="iicon"/>
          <Twitter  className="iicon"/>
          <Facebook className="iicon"/>
          <Linkedin  className="iicon"/>
          </div>
        </div>
      </div>
      
        <h1 className="dt">Your Reviews</h1>
        <input type="text" className="booknamebox" placeholder="BookName" required></input>
        <input type="text" className="review-box" placeholder="Your Review" required></input>
        <button className="save" onClick={popup1}>Save</button>

   
    </div>
  );
}

export default LoginAfter;
