import React from 'react';
import './Header.css';

const MylampComponent = () => {
  return (
    <div className="bg">
      <div className="container">
        <div className="left">
          <div className="round">OUR BEST FEATURES</div>
          <h2>
            Get the best guidance and excel in your dream career with{' '}
            <span className="orange">myLamp</span>{' '}
            <span id="green">Premium</span>
          </h2>
          <p>
            Join a community of serious & passionate tech folks,
            <br />
            students, mentors, and coaches
            <br />
            to accelerate your career.
          </p>
          <div className="collection">
            <div className="guidance same">
              <div className="logo">
                <img src="guidance.png" alt="" />
              </div>
              <h5>Overall career Guidance</h5>
            </div>

            <div className="mentor same">
              <div className="logo">
                <img src="mentors.png" alt="" />
              </div>
              <h5>IITs, IIMs, Mentors</h5>
            </div>

            <div className="AI same">
              <div className="logo">
                <img src="profile.png" alt="" />
              </div>
              <h5>AI-Modules & Profile making</h5>
            </div>
          </div>
          <button className="btn">Explore</button>
        </div>
        <div className="right">
          <img src="mylamp1.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default MylampComponent;
