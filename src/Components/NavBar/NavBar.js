import React from 'react'
import '../NavBar/NavBar.scss'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import AppearOnView from '../Animations/AppearOnView';
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from "react-router-hash-link";

function NavBar() {
  const [hamburger, setHamburger] = useState(false)
  const [icon, setIcon] = useState(false)
  console.log(hamburger)
  return (
    <div>
       <BrowserRouter>
      <div className={hamburger===true ? 'nav-blur-open':'nav-blur-close'}></div>
          <div className="nav-container">
          <Link className='no-underline' to="#home" smooth><div className="nav-logo-container"><img className="nav-logo" src="/mainLogo.png" alt="logo" /></div></Link>
              <div className="nav-links">
                  <ul 
                    className={(hamburger)?"nav-list-container mobile":"nav-list-container"}>
                     
                        <AppearOnView delay={0.2}><Link to="#About" className='no-underline' smooth><li className='hamburger-list' onClick={() => setHamburger(!hamburger)}><h5>01. </h5>About</li></Link></AppearOnView>
                        <AppearOnView delay={0.8}><Link to="#Experience" className='no-underline' smooth><li className='hamburger-list' onClick={() => setHamburger(!hamburger)}><h5>02. </h5>Experience</li></Link></AppearOnView>
                        <AppearOnView delay={1.6}><Link to="#Projects" className='no-underline' smooth><li className='hamburger-list' onClick={() => setHamburger(!hamburger)}><h5>03. </h5>Projects</li></Link></AppearOnView>
                        <AppearOnView delay={2.0}><Link to="#Certs" className='no-underline' smooth><li className='hamburger-list' onClick={() => setHamburger(!hamburger)}><h5>04. </h5>Certifications</li></Link></AppearOnView>
                      
                  </ul>
                  <div 
                    className='nav-icon-div'
                    onClick={()=>{setHamburger(!hamburger)}}
                    >
                    {(hamburger)?
                      <CloseIcon sx={{color : 'white'}} fontSize='large'/> :
                      <MenuIcon sx={{color : 'white'}} fontSize='large'/>
                    }
                    
                  </div>
              </div>
          </div>
          </BrowserRouter>
    </div>
  )
}

export default NavBar