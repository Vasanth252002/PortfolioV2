import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import '../Sidebar/LeftSidebar.scss'
import { GitHub, LinkedIn } from '@mui/icons-material'
import { Icon } from '@iconify/react';
import { RiTwitterXFill } from "react-icons/ri";

function LeftSidebar () {
  return (
    <div className='left-sidebar-container'>
      
        <a href="https://github.com/vasanth252002" target="_blank"><div className='icondiv'><GitHub sx={{color : 'white'}} fontSize='large'/></div></a>
        <a href="https://www.linkedin.com/in/vasanthakumaran-u-664134201/" target="_blank"><div className='icondiv'><LinkedIn sx={{color : 'white'}} fontSize='large'/></div></a>
        <a href="https://twitter.com/Vasanth252002" target="_blank"><div className='icondiv'><RiTwitterXFill color='white' width="30" height="30"/></div></a>
        <a href="https://leetcode.com/vsnth252002/" target="_blank"><div className='icondiv'><Icon icon="simple-icons:leetcode" width="28" height="28" color='white'/></div></a>
    <div className="left-sidebar-bar"></div>
    </div>
  )
}

export default LeftSidebar