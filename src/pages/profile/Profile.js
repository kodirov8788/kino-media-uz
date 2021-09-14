import React from "react";
import { useSelector } from "react-redux";
import Header from "../../components/header/Header";
import { selectUser } from "../../features/userSlice";
import { auth } from "../../firebase";
import "./Profile.css";

function Profile() {
    const user=useSelector(selectUser)
  return (
    <div className="profile">
      <Header />
      <div className="profile__body">
        <h1>Edit Profile</h1>
        <div className="profile__info">
          <img
            src="https://i2.wp.com/www.cssscript.com/wp-content/uploads/2020/12/Customizable-SVG-Avatar-Generator-In-JavaScript-Avataaars.js.png?fit=438%2C408&ssl=1"
            alt=""
          />
          <div className="profile__details">
              <h2>{user.email}</h2>
              <div className="profile__plans">
              <h3>Plans</h3>

                  <button className="profile__signOut" onClick={()=>auth.signOut()}>Sign Out</button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
