import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'
import Home from '../Pages/Home'
const Header = () => {
  return (
    <div>
        <nav>
           <div className="nav">
            <div className="nav__left">
                 <img src="https://preview.colorlib.com/theme/ithost/img/logo.png" alt="" />
            </div>
            <div className="nav__right">
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/'>Services</Link>
                    </li>
                    <li>
                        <Link to='/'>News</Link>
                    </li>
                    <li>
                        <Link to='/'>Contact</Link>
                    </li>
                    <button>Login/Register</button>
                </ul>
               
            </div>
           </div>
        </nav>
    </div>
  )
}

export default Header