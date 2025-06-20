import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import about from '../assets/img/aboutme.svg';
import projects from '../assets/img/projects.svg';
import contactme from '../assets/img/contactme.svg';
import hobbies from '../assets/img/hobbies.svg';

const AnimatedText = () => {
  const [shrink, setShrink] = useState(false);
  const [fadeIN, setFadeIN] = useState(false);
  const [slideIN, setSlideIN] = useState(false);
  const [slideIN2, setSlideIN2] = useState(false);
  const [slideIN3, setSlideIN3] = useState(false);
  const [slideIN4, setSlideIN4] = useState(false);
  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);
  const [hovered4, setHovered4] = useState(false);
  

  useEffect(() => {
  const timer = setTimeout(() => {
    setShrink(true);
  }, 1200);
  const fadeInTimer = setTimeout(() => {
    setFadeIN(true);
  }, 2700);
  const slideInTimer = setTimeout(() => {
    setSlideIN(true);
  }, 3500);
  const slideInTimer2 = setTimeout(() => {
    setSlideIN2(true);
  }, 4000);
  const slideInTimer3 = setTimeout(() => {
    setSlideIN3(true);
  }, 4500);
  const slideInTimer4 = setTimeout(() => {
    setSlideIN4(true);
  }, 5000);

  return () => {
    clearTimeout(timer);
    clearTimeout(fadeInTimer);
    clearTimeout(slideInTimer);
    clearTimeout(slideInTimer2); 
    clearTimeout(slideInTimer3); 
    clearTimeout(slideInTimer4); 
  };
}, []);

  const containerStyle = {
    position: 'fixed',
    top: 0,
    left: -52,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#4D0012',
    fontFamily: 'GHISELL',
    boxSizing: 'border-box',
    overflow: 'hidden',
    zIndex: 0,
  };
  const containerStyle2 = {
    position: 'fixed',
    top: 40,
    left: 40,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#8EB9FE',
    fontFamily: 'GHISELL',
    boxSizing: 'border-box',
    overflow: 'hidden',
    zIndex: 0,
  };
   const container1= {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100vw',
    height: '40vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#4D0012',
    backgroundImage: `url(${about})`,
    'background-repeat': 'no-repeat',
    'background-size': 'cover',
    boxSizing: 'border-box',
    overflow: 'hidden',
    zIndex: 0,
    transform: `${slideIN ? 'translateY(0)' : 'translateY(100vh)'}${hovered1 ? ' translateY(-20px)' : ''}`,
    transition: 'transform 0.4s cubic-bezier(0.77,0,0.175,1)',
    cursor: 'pointer',
   };
   const container2= {
    position: 'absolute',
    bottom: -50,
    left: 0,
    width: '100vw',
    height: '40vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#4D0012',
    backgroundImage: `url(${projects})`,
    'background-repeat': 'no-repeat',
    'background-size': 'cover',
    boxSizing: 'border-box',
    overflow: 'hidden',
    zIndex: 0,
    transform: `${slideIN2 ? 'translateY(0)' : 'translateY(100vh)'}${hovered2 ? ' translateY(-20px)' : ''}`,
    transition: 'transform 0.4s cubic-bezier(0.77,0,0.175,1)',
    cursor: 'pointer',
   };
   const container3= {
    position: 'absolute',
    bottom: -100,
    left: 0,
    width: '100vw',
    height: '40vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#4D0012',
    backgroundImage: `url(${hobbies})`,
    'background-repeat': 'no-repeat',
    'background-size': 'cover',
    boxSizing: 'border-box',
    overflow: 'hidden',
    zIndex: 0,
    transform: `${slideIN3 ? 'translateY(0)' : 'translateY(100vh)'}${hovered3 ? ' translateY(-20px)' : ''}`,
    transition: 'transform 0.4s cubic-bezier(0.77,0,0.175,1)',
    cursor: 'pointer',
   };
   const container4= {
    position: 'absolute',
    bottom: -150,
    left: 0,
    width: '100vw',
    height: '40vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#4D0012',
    backgroundImage: `url(${contactme})`,
    'background-repeat': 'no-repeat',
    'background-size': 'cover',
    boxSizing: 'border-box',
    overflow: 'hidden',
    zIndex: 0,
    transform: `${slideIN4 ? 'translateY(0)' : 'translateY(100vh)'}${hovered4 ? ' translateY(-20px)' : ''}`,
    transition: 'transform 0.4s cubic-bezier(0.77,0,0.175,1)',
    cursor: 'pointer',
   };

  const textStyle = {
    fontSize: shrink ? '3.6vw' : '8vw',
    fontWeight: 'bold',
    transition: 'transform 1.5s ease-in-out, font-size 1.5s ease-in-out',
    whiteSpace: 'nowrap',
    userSelect: 'none',
    transform: shrink ? 'translate(-13vw, -35vh)' : 'translate(0, 0)',
  };
  
  const textStyle2 = {
    fontSize: '3.6vw',
    fontWeight: 'bold',
    transition: 'transform 8s ease-in-out',
    whiteSpace: 'wrap',
    textAlign: 'left',
    overflowWrap: 'break-word',
    userSelect: 'none',
    opacity: fadeIN ? 1 : 0,
  };
  const text = {
    position: 'absolute',
    top: '7%',
    left : '14.2vw',
    height : '50vh',
    width : '70vw',
    display: 'flex',
    alignItems: 'center',
    margin : '0 auto',
    
  };
  const containerGlobal = {
    position : 'absolute',
    backgroundColor : '#D9D9D9',
    height : '100vh',
    width : '100vw',
    overflow : 'hidden',

  };

  return (
    <div style={containerGlobal}>
    <div style={containerStyle}>
      <span style={textStyle}>Hello, I am Yousra</span>
    </div>
    <div style={containerStyle2}>
        <div style={text}>
            <span style={textStyle2}>Welcome in my mind, where all the magic happens</span>
        </div>
    </div>
    <Link to="/about-me" style={{ textDecoration: 'none' }}>
        <div
          style={container1}
          onMouseEnter={() => setHovered1(true)}
          onMouseLeave={() => setHovered1(false)}
        ></div>
      </Link>
      <Link to="/Projects" style={{ textDecoration: 'none' }}>
        <div
        style={container2}
        onMouseEnter={() => setHovered2(true)}
        onMouseLeave={() => setHovered2(false)}
        ></div>
      </Link>
      <Link to="/Hobbies" style={{ textDecoration: 'none' }}>
        <div
          style={container3}
          onMouseEnter={() => setHovered3(true)}
          onMouseLeave={() => setHovered3(false)}
        ></div>
      </Link>
      <Link to="/Contactme" style={{ textDecoration: 'none' }}>
        <div
          style={container4}
          onMouseEnter={() => setHovered4(true)}
          onMouseLeave={() => setHovered4(false)}
        ></div>
      </Link>
    </div>
  );
}

export default AnimatedText;