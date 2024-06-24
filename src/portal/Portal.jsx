import React from 'react';
import './Portal.css'; // Ensure you create this CSS file for the styles

function Portal() {
  return (
    <div className='portal'>
      <div className="portalContent">
        <h2>Manage Projects Via Our Task Portal</h2>
        <h3>Transform tasks into skills with internee.pk</h3>
        
        <div className="featuresAndImage">
          <div className="features">
            <div className="feature">
              <h4>1. Hands-on Projects</h4>
              <p>Engage in projects that mirror real-world scenarios, enhancing your practical skills for professional environments.</p>
            </div>

            <div className="feature">
              <h4>2. Showcase Your Journey</h4>
              <p>Every completed task adds to your digital portfolio, highlighting your skills and accomplishments.</p>
            </div>

            <div className="feature">
              <h4>3. SDLC Techniques</h4>
              <p>Learn the Software Development Life Cycle (SDLC) to meet industry standards and boost your project management skills.</p>
            </div>

            <div className="feature">
              <h4>4. Easy to Understand</h4>
              <p>Our tasks are designed to be clear and simple, ensuring a smooth learning experience for all skill levels.</p>
            </div>
          </div>
          <div className="imageContent">
            <img src="/task.webp" alt="Task Portal" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portal;
