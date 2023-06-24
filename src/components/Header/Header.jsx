import React, { useContext } from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Header = () => {

  const {user, logOut} = useContext(AuthContext);

  const handleLogout = () =>{
    logOut()
    .then (() =>{})
    .catch(error => {
      console.log(error);
    })
  }
  return (
    <nav className="nav">
      <div className="nav-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="user"> {user && <p>User Profile: {user.email}</p>}</div>
      <div className="nav-link">
        <Link to="/">Shop</Link>
        <Link to="/orders">Orders</Link>
        {/* <Link to="/inventory">Inventory</Link> */}
    
        <Link to="/signup">Sign Up</Link>
        {user ? <Link onClick={handleLogout}>LogOut</Link>  :  <Link to="/login">Login</Link> }
      </div>
    </nav>
  );
};

export default Header;
