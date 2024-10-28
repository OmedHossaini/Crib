import React from 'react';
import '../styles/Omed.css';

const Omed = () => {
    return (
        <div className="omed-container">
            <h1 className="omed-title">Omed</h1>
            <p className="omed-bio">"Living life to the fullest!"</p>
            <img src="/images/omed.jpg" alt="Omed" className="omed-image" />
            <button className="omed-btn" onClick={() => window.location.href = "/"}>Go Home</button>
            <div className="animated-div"></div> {/* New animated div */}
        </div>
    );
};

export default Omed;
