import React from 'react'
import '../Projects/Project.scss'
import { projects } from './Proj'
import AppearOnView from '../Animations/AppearOnView'
import { FiArrowUpRight } from "react-icons/fi";

function Projects() {
  return (
    <div>
    <div className='Projects-header'>
            <h3 className='Projects-heading'>Projects</h3>
            <hr className='Projects-hr' />
    </div>
    <div className='Projects-container'>
      {
        projects.map((item,index)=>{
          return(
            <AppearOnView delay={0.2}>
            <div key={item.id} id="Projects" className='Projects-individual'>
              <div className='Projects-image-div'>
                  <div className='Projects-curtain'></div>
                  <div className='Projects-window' style={{backgroundImage:`url(${item.src})`,backgroundSize:'cover'}}>
                    <img className='Projects-image' src={item.src} alt={item.alts} />
                  </div>
              </div>
              <div className='Projects-content'>
                <h3 className='Projects-title'><a href={item.linkg} target="_blank">{item.title+" "}<FiArrowUpRight /></a>
</h3>
                <p className='Projects-desc'>{item.desc}</p>
                <ul className='Projects-techstack'>
                {
                  item.technology.map((ind,i)=>{
                    return(
                      <li>{item.technology[i]}</li>
                    )
                  })
                }
                </ul>
              </div>
            </div>
            </AppearOnView>
          )
        })
      }
    </div>
    </div>
    
  )
  
}

export default Projects