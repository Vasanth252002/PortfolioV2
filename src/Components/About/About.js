import React from 'react'
import '../About/About.scss'
import AppearOnView from '../Animations/AppearOnView'

function About() {
  
  return(
    <div id="About" className='About-parent'>
       
        <div className='About-info'>
            <AppearOnView delay={0.2}>
            <div className='About-top'>
                <h3 className='About-header'>About Me</h3>
                <hr className='About-hr'/>
            </div>
            </AppearOnView>
            <AppearOnView delay={0.5}>
            <p className='About-para'>Hello Devs, I am a competitive programmer who loves to program with python. I have worked on Machine Learning projects
                and published research papers on the same in Scopus indexed journal and IEEE conferences. I have worked on Django for backend and written REST API's.
                I have organised events in my college. I am a drone developer and programmer. I have also participated in Google 30 days of Cloud.<br/><br/>
                Here are few technologies I am working on.
                <ul className='About-tech'>
                    <li>React</li>
                    <li>Django</li>
                    <li>Scikit Learn</li>
                    <li>Redux Toolkit</li>
                    <li>Javascript</li>
                </ul>
           

            </p>
            </AppearOnView>
        </div>
        <AppearOnView delay={0.9}>
        <div className='About-img'>
            <div className='About-dummy'></div>
             <div className='About-inner-img-div'><img className="About-jpg" src="webPhotovk.jpg" alt="Photo"/></div>
            
        </div>
        </AppearOnView>
    </div>
  )
}


export default About