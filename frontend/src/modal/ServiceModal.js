import React, { useState } from "react";
import "./ServiceModal.css";

export default function ServiceModal({ children , onClose }) {

  return (
      <div className="modal" style={{ display: "block" }}>
      <div onClick={onClose} className="overlay" />
        <div className="modal-content">
        <button className="user-close-modal" onClick={onClose}>
          <img src={`${process.env.PUBLIC_URL}/closemodal.png`} alt="icon" className="modalicon" />
        </button>
          {children}
        </div>
      </div>
  );
}
