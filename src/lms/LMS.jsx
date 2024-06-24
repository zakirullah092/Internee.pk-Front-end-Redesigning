import React from 'react';
import './LMS.css';

function LMS() {
  return (
    <div className='lms-section'>
      <div className="lms-content">
        <h2>Our LMS</h2>
        <p>Guided Tutorials in Learning Management System</p>
        <div className="featuresAndImage">
          <div className="features">
            <div className="feature">
              <h4>Your Roadmap to Success</h4>
              <p>Our LMS guides you through every step, even if your English isn't perfect. Start learning today!</p>
            </div>
            <div className="feature">
              <h4>Earn While You Teach</h4>
              <p>Share your expertise, create courses, and earn rewards. Join us as an instructor and make a difference.</p>
            </div>
            <div className="feature">
              <h4>Get Certified</h4>
              <p>Complete courses and earn certifications that showcase your skills to potential employers.</p>
            </div>
            <div className="feature">
              <h4>Courses in Urdu</h4>
              <p>Learn in a language that feels like home. Our Urdu courses break down language barriers for effective learning.</p>
            </div>
            <div className="feature">
              <h4>Hands-on Practice</h4>
              <p>Apply your knowledge with practical exercises that simulate real-world scenarios.</p>
            </div>
          </div>
          <div className="imageContent">
            <img src="/lms.png" alt="Learning Management System" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LMS;
