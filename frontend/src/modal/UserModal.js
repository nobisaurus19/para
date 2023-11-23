import React, { useState } from "react";
import "./UserModal.css";

export default function UserModal({ children , onClose }) {

  return (
      <div className="modal" style={{ display: "block" }}>
      <div onClick={onClose} className="overlay" />
        <div className="modal-content">
        <button className="user-close-modal" onClick={onClose}>
          <img src={`${process.env.PUBLIC_URL}/closemodal.png`} alt="icon" className="usermodolicon" />
        </button>
          {children}
        </div>
      </div>
  );
}
