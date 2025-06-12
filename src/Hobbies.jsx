import './Hobbies.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Hobbies = () => {
    const [selected, setSelected] = useState(null);

    return (
        <div className="hobbies">
            <div className='titre'>Hobbies</div>
            <div className='fichier'></div>
            <div
                className={`art${selected === 'art' ? ' top' : ''}`}
                onClick={() => setSelected('art')}
            ></div>
            <div
                className={`sport${selected === 'sport' ? ' top' : ''}`}
                onClick={() => setSelected('sport')}
            ></div>
            <div
                className={`books${selected === 'books' ? ' top' : ''}`}
                onClick={() => setSelected('books')}
            ></div>
            <div
                className={`games${selected === 'games' ? ' top' : ''}`}
                onClick={() => setSelected('games')}
            ></div>
            <Link to="/Home">
                <div className="home-button">
                    <text className="home-button-text">Home</text>
                </div>
            </Link>
        </div>
    );
}

export default Hobbies;