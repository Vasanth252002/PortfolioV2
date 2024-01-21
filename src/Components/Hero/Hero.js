import React from 'react'
import '../Hero/Hero.scss'
import { useState, useEffect } from 'react';
import AppearOnView from '../Animations/AppearOnView';
import { IoMdCodeDownload } from "react-icons/io";

function Hero() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(150 - Math.random() * 10);
  const [index, setIndex] = useState(1);
  const toRotate = ["Full Stack Developer", "ML Enthusiast", "Student", "Programmer", "Django Developer","Cybersecurity Enthusiast"];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length +1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(200);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }
  return(
    <div id="home" className="hero-container">
        <div className="banner-innerparent">
          <AppearOnView delay={2.0}>
          <h1 className="hero-intro">Hello, my name is</h1><br/>
          </AppearOnView>
          <AppearOnView delay={2.6}>
          <h1 className="hello">Vasanthakumaran U,</h1><br />
          </AppearOnView>
          <AppearOnView delay={3.1}>
          <h1 className="dynamic">I am a <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "World!", "Programmers!", "Coders!" , "Hackers!","Developers!"]'><span className="wrap">{text}</span></span></h1><br />
          </AppearOnView>
          
          <hr className='hero-splitter'/>
          <AppearOnView delay={3.6}>
          <p className="hero-small-intro">I am a student of Sri Sairam Institute of Technology. I am currently persuing my final year in B.E. Computer Science and Engineering. I am a react frontend developer.
           The concept of open source inspired me a lot. Welcome to my Website. I hope we can connect soon! .</p>
           </AppearOnView>
          <AppearOnView delay={4.1}>
          <div className='buttons-container'>
            <h3 className='button'><a className="no-underline" href="RESUME - VASANTHAKUMARAN U.pdf" download> Resume<i className='icon'></i></a></h3>
            <h3 className='button'><a href="mailto:vsnth252002@gmail.com" className='no-underline'>Get in Touch</a></h3>
          </div>
          </AppearOnView>
        </div>
      
    </div>
  )
}


export default Hero