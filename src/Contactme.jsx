import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Contactme.css';

const Contactme = () => {
    const [selected, setSelected] = useState(null);
    const [selected2, setSelected2] = useState(null);
    const [selected3, setSelected3] = useState(null);
    useEffect(() => {
        const timer = setTimeout(() => {
            setSelected(true);
        }, 300);
        const timer2 = setTimeout(() => {
            setSelected2(true);
        }, 1200);
        const timer3 = setTimeout(() => {
            setSelected3(true);
        }, 1700);

        return () => {clearTimeout(timer);
            clearTimeout(timer2);
            clearTimeout(timer3);
        };

    }, []);


    return (
        <div className="contactme">
            <div className={`contactme-title${selected ? ' contactme-title-timed' : ''}`}>Let's get in touch !</div>
            <div className={`contactme-content${selected2 ? ' contactme-content-timed' : ''}`}>
            </div>
            <div className={`contactme-content2${selected3 ? ' contactme-content-timed2' : ''}`}>
            </div>
            <Link to="/Home">
                            <div className = "home-button">
                                <text className = "home-button-text">Home</text>
                            </div>
            </Link>
        </div>
    );
}

export default Contactme;