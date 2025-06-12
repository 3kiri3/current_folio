import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './Display.css';
import data from './proj.json';

const Display = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedIdx, setSelectedIdx] = useState(0);
    const { elementname } = useParams();
    const element = data.find(item => item.name === elementname);

    if (!element) return <div>Not found</div>;

    return (
        <div className="display">
            <div className="folder">
                <div className="name">{element.name}</div>
                <div className="description">{element.description}</div>
                <Link to= "/Home">
                    <div className="home-button2">
                    </div>
                </Link>
                <Link to= "/Projects">
                    <div className="projects-button">
                    </div>
                </Link>
                
                <div className="grille">
                    {element.images && element.images.map((img, idx) => (
                        <img
                            key={idx}
                            src={img}
                            alt={`${element.name} ${idx + 1}`}
                            className="grille-img"
                            onClick={() => { setSelectedIdx(idx); setModalIsOpen(true); }}
                            style={{ cursor: 'pointer' }}
                        />
                    ))}
                </div>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={() => setModalIsOpen(false)}
                    className="custom-modal"
                    overlayClassName="custom-modal-overlay"
                    contentLabel="Image Zoom"
                >
                    <button className="modal-close" onClick={() => setModalIsOpen(false)}>×</button>
                    <button
                        className="modal-arrow left"
                        onClick={() => setSelectedIdx((selectedIdx - 1 + element.images.length) % element.images.length)}
                    >‹</button>
                    <img src={element.images[selectedIdx]} alt="zoom" className="modal-img" />
                    <button
                        className="modal-arrow right"
                        onClick={() => setSelectedIdx((selectedIdx + 1) % element.images.length)}
                    >›</button>
                </Modal>
            </div>
        </div>
    );

}

export default Display;
