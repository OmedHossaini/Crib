import React from 'react';
import '../styles/Matthew.css';

const Matthew = () => {
    return (
        <div className="matthew-container">
            <h1 className="matthew-title">Matthew</h1>
            <p className="matthew-bio">"Finding joy in the journey."</p>
            <img src="/images/matthew.jpg" alt="Matthew" className="matthew-image" />
            <button className="matthew-btn" onClick={() => window.location.href = "/"}>Go Home</button>
        </div>
    );
};

export default Matthew;
