import React from 'react';
import './Internship.css';

function Internship() {
    return (
        <div className='internship' id='internship'>
            <div className="internshipContent">
                <h2>Looking for an Internship ? </h2>
                <p>Apply for the best internship oppurtiny
                    and get ready for your dream job <br />
                    with the guidance of field expert.
                </p>
            </div>
            <div className="cardContainer">
                <div className="card">
                    <img src="/BackendDevelopment.webp" alt="Course" />
                    <h3>React Js Internship</h3>
                    <hr style={{ width: '80%' }} />
                    <button>Apply Now</button>
                </div>
                <div className="card">
                    <img src="/analysis.webp" alt="Course" />
                    <h3>React Js Internship</h3>
                    <hr style={{ width: '80%' }} />
                    <button>Apply Now</button>
                </div>
                <div className="card">
                    <img src="/figma.png" alt="Course" />
                    <h3>React Js Internship</h3>
                    <hr style={{ width: '80%' }} />
                    <button>Apply Now</button>
                </div>
                <div className="card">
                    <img src="/Mobile App Developer.webp" alt="Course" />
                    <h3>React Js Internship</h3>
                    <hr style={{ width: '80%' }} />
                    <button>Apply Now</button>
                </div>

            </div>
        </div>
    )
}

export default Internship