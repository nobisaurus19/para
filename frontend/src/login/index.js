import { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom';
import axios from 'axios'
import DefaultLayout from '../layout/DefaultLayout'

import './index.css'

const role = {
  Admin: Symbol("admin"),
  User: Symbol("user"),
}

function Login() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [userRole, setUserRole] = useState(role.User)
  const [error, setError] = useState(null)
  const [apiLink, setApiLink] = useState(`http://localhost:4000/user/login`);

  useEffect(() => {
    setApiLink(`http://localhost:4000/${userRole === role.User ? 'user' : 'admin'}/login`);
  }, [userRole]);


  const handleLogin = async () => {
    try {
      const response = await fetch(apiLink,{ 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password })
      })
      const data = await response.json();
      if (data.token) {
        const token = data.token
        localStorage.setItem('token', token);
        (data.role === 'admin') ? localStorage.setItem('role', 'admin'): localStorage.setItem('role', 'user');
        window.location.href = '/'
      } else {
        setError(data.message)
      }

    } catch (err) {
      console.warn(err)
    }
  }

  return (
    <DefaultLayout>
      <div className="login">
        <div className='loginrole'>
          <a
            className={userRole === role.User ? 'current' : ''}
            href="#"
            onClick={() => setUserRole(role.User)}
          >
            User
          </a>{' '}
          <a
            className={userRole === role.Admin ? 'current' : ''}
            href="#"
            onClick={() => setUserRole(role.Admin)}
          >
            Admin
          </a>
        </div>
        <div className="loginbox">
          <label htmlFor="txtUsername">Username</label>
          <input
            type="text"
            id="txtUsername"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="txtPassword">Password</label>
          <input
            type="password"
            id="txtPassword"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <div className="error">{error}</div>}
          <button type="submit" id="btnLogin" className="loginbutton" onClick={handleLogin}>Log in</button>
          <p className='tosignup'>Don’t have any account ? <a href="signup" className="linksignup">Sign up</a></p>
        </div>
      </div>
    </DefaultLayout>
  )
}

export default Login
