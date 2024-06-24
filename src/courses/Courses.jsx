import React, { useState } from 'react';
import './Courses.css';

function Courses() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='courses' id='course'>
      <div className="who">
        <h2>Who is Internee.pk?</h2>
        <p className='coursesP'>
          Internee.pk is the ultimate platform designed to turbocharge the IT sector in Pakistan. We recognize the immense potential of talented individuals and aim to bridge the gap between them and the thriving IT industry.
        </p>
        <p style={{ textDecoration: 'underline',padding:'14px'}}>
          <b>Key Features</b>
        </p>
        <ul className='accordion'>
          {['Virtual Internships', 'Monthly Internships', 'Industry Exposure', 'Networking Opportunities'].map((feature, index) => (
            <li key={index}>
              <button onClick={() => toggleAccordion(index)}>
                <b>{feature}:</b>
              </button>
              {activeIndex === index && (
                <p>
                  {feature === 'Virtual Internships' && 'Offering a comprehensive range of virtual internship opportunities exclusively in the IT field.'}
                  {feature === 'Monthly Internships' && 'Providing new internships every month to kickstart students\' tech careers.'}
                  {feature === 'Industry Exposure' && 'Equipping students with practical skills and industry experience.'}
                  {feature === 'Networking Opportunities' && 'Creating pathways for success in the tech industry through valuable connections.'}
                </p>
              )}
            </li>
          ))}
        </ul>
      </div>
      <h2 className='skill'>Want to learn a new skill?</h2>
      <div className="cardContainer">
        {[1, 2, 3].map((_, index) => (
          <div className="card" key={index}>
            <img src="/BackendDevelopment.webp" alt="Course" />
            <h3>Backend Development</h3>
            <p>Lorem ipsum doloere quaerat harum natus, ipsam eum.</p>
            <button>Enroll Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
