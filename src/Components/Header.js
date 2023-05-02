import React,{useState} from 'react'
import { Link,NavLink } from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {HiInformationCircle} from 'react-icons/hi'
import {RiMoneyDollarCircleFill} from 'react-icons/ri'
import {RiContactsBookFill} from 'react-icons/ri'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FaTimesCircle} from 'react-icons/fa'

const Header = () => {

  const [menuClicked,setMenu]=useState(false)

  const handleMenu=()=>{
    
    setMenu(!menuClicked)

  }

  return (
    <header className='nav-bar'>

    <Link className='nav-link' to='/'>Logo</Link>

    <div className="menu-icons">
        {menuClicked?
        <GiHamburgerMenu onClick={handleMenu} className='menu-bars'/>:
        <FaTimesCircle onClick={handleMenu} className='menu-bars'/>}
    </div>

    <nav className={menuClicked?'nav-menu':'nav-menu active'}>
      <Link to='/' className='nav-link'><span className='nav-icon'><AiFillHome /></span>Home</Link>
      <Link to='about-us' className='nav-link'><span className='nav-icon'><HiInformationCircle /></span>About Us</Link>
      <Link to='investment' className='nav-link'><span className='nav-icon'><RiMoneyDollarCircleFill /></span>Investment</Link>
      <Link to='contact-us' className='nav-link'><span className='nav-icon'><RiContactsBookFill /></span>Contact Us</Link>
    </nav>

    <Link to='/' className='nav-link-register'>Login/SignUp</Link>

    </header>
  )
}

export default Header