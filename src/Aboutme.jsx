import React, {useState} from 'react';
import './App.js';
import { Link } from 'react-router-dom';



const AboutMe = () => {
    const [selected, setSelected] = useState(null);
    return(
        <>
            <div className="about-me">
                <h1 className={`about-me-title${selected ? ' rotated-title' : ''}`}>About Me</h1>
            </div>
            <div className={`school${selected === 'school' ? ' selected' : selected ? ' hidden' : ''}`}
                    onClick={() => setSelected('school')}
                    ></div>
            <div className={`me${selected === 'me' ? ' selected' : selected ? ' hidden' : ''}`}
                    onClick={() => setSelected('me')}
                ></div>
            <div className={`xp${selected === 'xp' ? ' selected' : selected ? ' hidden' : ''}`}
                    onClick={() => setSelected('xp')}
                ></div>
            <Link to="/Home">
                <div className = "home-button">
                    <text className = "home-button-text">Home</text>
                </div>
            </Link>
            {selected && (
                <div className="back-button back" onClick={() => setSelected(null)}>
                    <span className="back-button-text">Back</span>
                </div>
            )}
        </>
    );
}

export default AboutMe;