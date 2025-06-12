import './Aboutme.css';
import './App.js';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import './Projects.css';



const Projects = () => {
    const [slideIN, setSlideIN] = useState(false);
    const [slideIN2, setSlideIN2] = useState(false);
    const [slideIN3, setSlideIN3] = useState(false);
    const [slideIN4, setSlideIN4] = useState(false);
    const [slideIN5, setSlideIN5] = useState(false);
    const [slideIN6, setSlideIN6] = useState(false);
    const [slideIN7, setSlideIN7] = useState(false);
    const [slideIN8, setSlideIN8] = useState(false);

    useEffect(() => {
    const slideInTimer = setTimeout(() => {
        setSlideIN(true);
    }, 500);
    const slideInTimer2 = setTimeout(() => {
        setSlideIN2(true);
    }, 1000);
    const slideInTimer3 = setTimeout(() => {
        setSlideIN3(true);
    }, 1500);
    const slideInTimer4 = setTimeout(() => {
        setSlideIN4(true);
    }, 2000);
    const slideInTimer5 = setTimeout(() => {
        setSlideIN5(true);
    }, 2500);
    const slideInTimer6 = setTimeout(() => {
        setSlideIN6(true);
    }, 3000);
    const slideInTimer7 = setTimeout(() => {
        setSlideIN7(true);
    }, 3500);
    const slideInTimer8 = setTimeout(() => {
        setSlideIN8(true);
    }, 4000);

    return () => {
        clearTimeout(slideInTimer);
        clearTimeout(slideInTimer2);
        clearTimeout(slideInTimer3);
        clearTimeout(slideInTimer4);
        clearTimeout(slideInTimer5);
        clearTimeout(slideInTimer6);
        clearTimeout(slideInTimer7);
        clearTimeout(slideInTimer8);
    };
}, []);
return (
    <>
    <div className="projects">
    </div>
    <div className={`panneau${slideIN7 ? ' slide-in-panneau' : ''}`}>
        <div className={`panneau-text${slideIN8 ? ' slide-in-panneau-text' : ''}`}>
            <div className="panneau-text-title">Projects</div>
            <div className="panneau-text-content">
                A glimpse into the projects that stuck with me — some born in classrooms, 
                others in late-night creative bursts. 
                I might’ve missed a few, but these are the ones that stayed.
            </div>
            <div className="panneau-text-content2">
                Click on the project you want to see, and then click on the images to zoom in.
            </div>
        </div>
    </div>
    <Link to="/Display/LifeApp">
    <div className={`LifeApp${slideIN ? ' slide-in' : ''}`}></div>
    </Link>
    <Link to="/Display/Conciergerie">
    <div className={`Conciergerie${slideIN2 ? ' slide-in' : ''}`}></div>
    </Link>
    <Link to="/Display/My Garden">
    <div className={`Plant${slideIN3 ? ' slide-in' : ''}`}></div>
    </Link>
    <Link to="/Display/Tree of Life">
    <div className={`Tree${slideIN4 ? ' slide-in' : ''}`}></div>
    </Link>
    <Link to="/Display/Berger">
    <div className={`Berger${slideIN5 ? ' slide-in' : ''}`}></div>
    </Link>
    <Link to="/Display/Desert">
  <div
    className={`Desert${slideIN6 ? ' slide-in' : ''}`}
  ></div>
    </Link>

    <Link to="/Home">
        <div className = "home-button">
            <text className = "home-button-text">Home</text>
        </div>
    </Link>
    
    </>
    
);

}

export default Projects;