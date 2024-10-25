// src/components/Marvin.js
import React from 'react';
import '../styles/Marvin.css';

const Marvin = () => {
    return (
        <div className="marvin-container">
            <h1 className="marvin-title">Marvin</h1>
            <p className="marvin-bio">"Chasing dreams one step at a time."</p>
            <img src="/images/marvin.jpg" alt="Marvin" className="marvin-image" />
            <button className="marvin-btn" onClick={() => window.location.href = "/"}>Go Home</button>
        </div>
    );
};

export default Marvin;
