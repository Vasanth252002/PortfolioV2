import React from 'react'
import { GitHub, LinkedIn } from '@mui/icons-material'
import { Icon } from '@iconify/react';
import { RiTwitterXFill } from "react-icons/ri";
import '../Footer/Footer.scss'

function Footer() {
  return (
    <div className='Footer-container'>
        <h5 className='Footer-content'>Built from scratch using React, scss and Framer motion</h5>
        <ul className='Footer-icons-top'>
            <a href="https://twitter.com/Vasanth252002" target="_blank"><li className='Footer-icons'><RiTwitterXFill /></li></a>
            <a href="https://github.com/vasanth252002" target="_blank"><li className='Footer-icons'><GitHub/></li></a>
            <a href="https://leetcode.com/vsnth252002/" target="_blank"><li className='Footer-icons'><Icon icon="simple-icons:leetcode" width="28" height="28"/></li></a>
            <a href="https://www.linkedin.com/in/vasanthakumaran-u-664134201/" target="_blank"><li className='Footer-icons'><LinkedIn/></li></a>
        </ul>
    </div>
  )
}

export default Footer