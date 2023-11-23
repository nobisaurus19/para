import React, { useState } from "react";
import "./index.css";
import { Link, useLocation } from "react-router-dom";

const NavbarItem = ({ children, href }) => {
  const isActive = useLocation().pathname === href;
  return (
    <li className="navbar-item">
      <Link
        className={`navbar-link ${isActive ? "currentpage" : ""}`}
        to={href}
      >
        {children}
      </Link>
    </li>
  );
};

const ProfileModal = ({ onClose, onNavigate }) => {
  const isAdmin = localStorage.getItem("role") === 'admin' ? true : false;
  return (
    <>
      {isAdmin ? (
        <div className="profile-modal">
          <p onClick={() => onNavigate("/admin")}>
            <img src={`${process.env.PUBLIC_URL}/edit.png`} alt="coice" className="mochoice" />
            ADMIN</p>
          <p onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/";
          }}>
            <img src={`${process.env.PUBLIC_URL}/logout.png`} alt="coice" className="mochoice" />
            LOG OUT</p>
        </div>
      ) : 
        (
          <div className="profile-modal">
            <p onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/";
            }}>
              <img src={`${process.env.PUBLIC_URL}/logout.png`} alt="coice" className="mochoice" />
              LOG OUT</p>
          </div>
      )}
    </>
  );
}



const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  const handleNavigate = (path) => {
    setShowModal(false);
    window.location.href = path;
  };
  return (
    <nav className="navbar">
    <img
      src={`${process.env.PUBLIC_URL}/kohub.png`}
      alt="logo"
      className="logo"
    />
    <ul className="navbar-list" style={{ zIndex: 100 }}>
      <NavbarItem href="/">HOME</NavbarItem>
      <NavbarItem href="/about">ABOUT US</NavbarItem>
      <NavbarItem href="/search">SEARCH</NavbarItem>
      <NavbarItem href="/service">SERVICE</NavbarItem>
      {!localStorage.getItem("token") ? (
        <NavbarItem href="/login">
          <button className="LoginButton">LOG IN</button>
        </NavbarItem>
      ) : (
        <NavbarItem>
          <img src={`${process.env.PUBLIC_URL}/chat.png`} alt="profile" className="profilepic" />
          <img src={`${process.env.PUBLIC_URL}/notification.png`} alt="profile" className="profilepic" />
          <img
            src={`${process.env.PUBLIC_URL}/profile.png`}
            alt="profile"
            className="profilepic"
            onClick={() => setShowModal(!showModal)}
          />
          {showModal && (
            <ProfileModal
              onClose={() => setShowModal(false)}
              onNavigate={handleNavigate}
            />
          )}
        </NavbarItem>
      )}
    </ul>
  </nav>
  );
}

export default Navbar;
