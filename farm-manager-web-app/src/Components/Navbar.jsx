import { observer } from 'mobx-react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../Common/Style/navbar.scss'
import AuthService from '../Common/Services/AuthService'
import Image from '../Common/Images/logo.png'

const Navbar = observer(() => {
    const history = useNavigate()
  
    async function handleLogout() {
      try {
        await AuthService.logout()
        history("/login")
      } catch(err) {
        console.error(err)
      }
    }
  
    return (
        <div className="nav">
            { AuthService.loggedIn === true ? 
              <div className="logo">
                <img src={Image} alt="Img" /><Link className="link" to="/home">Farm Manager App</Link>  
              </div> 
            : 
              <div className="logo">
                <img src={Image} alt="Img" /><Link className="link" to="/">Farm Manager App</Link>  
              </div>  
            }
            { AuthService.loggedIn === true ? 
            <div className="user-data">
              <p className="link" onClick={handleLogout}>Log Out</p>
              <div className="link-wrapper">
                <Link to="/properties" className="link">Settings</Link>
              </div>
            </div>
            : 
            <div className="user-data">
                <Link className="link" to="/login">Log In</Link>
                <Link className="link" to="/signup">Sign Up</Link>
            </div>
            }
        </div>
    )
})

export default Navbar;
