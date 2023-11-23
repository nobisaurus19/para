import { useState } from 'react'
import { withRouter } from 'react-router-dom';
import DefaultLayout from '../layout/DefaultLayout'
import './index.css'


function Signup() {
  const handleSubmit = async (event) => {
    event.preventDefault(); // prevent the default form submit action

    const username = document.getElementById('txtUsername').value;
    const fullname = document.getElementById('txtFullname').value;
    const password = document.getElementById('txtPassword').value;
    const email = document.getElementById('txtEmail').value;

    try {
      const response = await fetch('http://localhost:4000/user/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, fullname, password, email }),
      });
      const data = await response.json();
      if (data.success) {
        window.location.href = '/login'
      }

    } catch (error) {
      console.error(error);
    }
  };


  return (
    <DefaultLayout>
      <div className="login">
        <div className="signupbox">
          <label htmlFor="txtFullname">Full name</label>
          <input
            type="text"
            id="txtFullname"
          />
          <label htmlFor="txtUsername">Username</label>
          <input
            type="text"
            id="txtUsername"
          />
          <label htmlFor="txtPassword">Password</label>
          <input
            type="password"
            id="txtPassword"
          />
          <label htmlFor="txtEmail">Email</label>
          <input
            type="email"
            id="txtEmail"
          />
          <button onClick={handleSubmit} type="submit" id="btnSignup" className="signupbutton" >Sign up</button>
          <p className='tologin'>Already have an account ? <a href="login" className="linksignup">Log in</a></p>
        </div>
      </div>
    </DefaultLayout>
  )
}

export default Signup
