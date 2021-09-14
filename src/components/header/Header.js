import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./Header.css";
function Header() {
  const [show, setShow] = useState(false);
  const history = useHistory();
  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);

  return (
    <div className={`header ${show && "header header__black"}`}>
      <div className="header__contents">
        <img
          onClick={() => history.push("/")}
          className="header__logo"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <img
          onClick={() => history.push("/profile")}
          className="header__avatar"
          src="https://i2.wp.com/www.cssscript.com/wp-content/uploads/2020/12/Customizable-SVG-Avatar-Generator-In-JavaScript-Avataaars.js.png?fit=438%2C408&ssl=1"
          alt=""
        />
      </div>
    </div>
  );
}

export default Header;
