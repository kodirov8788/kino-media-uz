import React, { useState } from "react";
import "./Loginscreen.css";
import SignUp from "./signUp/SignUp";

function Loginscreen() {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          className="loginscreen_logo "
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <button onClick={() => setSignIn(true)} className="loginScreen__button">
          Login
        </button>
        <div className="loginscreen__gredient" />
      </div>
      <div className="loginScreen__body">
        {signIn ? (
          <SignUp />
        ) : (
          <>
            <h1>Unlimited films, TV Programmes and more.</h1>
            <h2>Watch Anywhere. Cancel at anytime.</h2>
            <h3>
              Ready to watch? Emter your email to create or restart your
              membership
            </h3>
            <div className="loginScreen__input">
              <form>
                <input type="email" placeholder="Email address" />
                <button
                  onClick={() => setSignIn(true)}
                  className="loginScreen__getStarted"
                >
                  Get Started
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Loginscreen;
