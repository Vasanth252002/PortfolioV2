import React, { useState } from 'react'
import '../Experience/Experience.scss'
import {attributes} from '../Experience/Exp'

function Experience() {
    const [content,setContent]=useState(0)
  return (
    <div id="Experience" className='Exp-parent'>
        <div className='Exp-header'>
            <h3 className='Exp-heading'>Experience</h3>
            <hr className='Exp-hr' />
        </div>
        <div className='Exp-slider'>
            <div className='Exp-slider-heads'>
                <ul className='Exp-slider-points'>
                {attributes.map((item,index) => {
                            return(
                                <li id={item.id} key={item.id} className={content===item.id - 1 ? 'Exp-slider-points-clicked':'Exp-slider-points-notclicked'} onClick={() => {setContent(item.id - 1);}}>{item.head}</li>
                            )
                        })}
                </ul>
            </div>
            {
            <div className='Exp-slider-content'>
            
                    <h4 className='Exp-slider-content-head'>{attributes[content].pos+" "}<span className='Exp-slider-content-tag'>{attributes[content].tag}</span></h4>
                    <p>{attributes[content].desc}</p>
            
            </div>
            }
        </div>
        
    </div>
  )
}

export default Experience