import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbare.css";
//import { bars } from '@fortawesome/free-solid-svg-icons';

import { BsFillHddStackFill } from "react-icons/bs";
const Navbare = (props) => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  function logout(){
    window.location.reload();
  }
  return (
    <div className="nav-sticky">
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <NavLink to="/">
              <img
                className="logN"
                src="https://res.cloudinary.com/dqy7m95yz/image/upload/v1677352785/icon2_1_pdxuih.png"
                alt="nf"
              />
            </NavLink>
            {/* <img className='logN' src="https://res.cloudinary.com/dcyfkgtgv/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1672838305/Dark_Beige_Modern_Real_Estate_Building_Logo-removebg-preview_xx8tar.jpg" alt="nf" /> */}
          </div>
          <div className="menu-icon" onClick={handleShowNavbar}>
            <BsFillHddStackFill />
          </div>
          <div className={`nav-elements  ${showNavbar && "active"}`}>
            <ul>
              <li className="hov">
                Welcome {props.user},
              </li>
              
              <li className="hov">
                <NavLink to="/">Contact</NavLink>
              </li>
              <li className="hov">
                <NavLink to="/blog">Blog</NavLink>
              </li>

              <li className="hov">
                <NavLink to="/about">About</NavLink>
              </li>
              <li className="hov">
                <NavLink to="/" onClick={logout}>Logout</NavLink>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbare;
