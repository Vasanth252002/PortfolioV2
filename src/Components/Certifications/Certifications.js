import React from 'react'
import '../Certifications/Certifications.scss'
import { cert } from './Certs'
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';

function Certifications() {
  return (
    <div id="Certs">
        <div className='Certs-top'>
                    <h3 className='Certs-header'>Certifications</h3>
                    <hr className='Certs-hr'/>
            </div>
        <div className='Certs-container'>
            {
                cert.map((item,index)=>{
                    return(
                        <div className='Certs-individual'>
                            <i className='Certs-icon'><VerifiedOutlinedIcon /></i>
                            <h2 className='Certs-title'>{item.title}</h2>
                            <h3 className='Certs-provider'>{item.pro}</h3>
                        </div>
                    )
                })   
            }        
        </div>
    </div>
  )
}

export default Certifications