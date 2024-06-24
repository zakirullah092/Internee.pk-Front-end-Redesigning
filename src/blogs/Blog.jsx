import React from 'react';
import './Blog.css';

function Blog() {
    return (
        <div className='blog'>
            <h2>Recent Posts</h2>
            <div className="posts">
            <div className="firstPost">
                <h3>
                    Complete all of the task but didn't get certification yet? 😓🤦‍♀️
                </h3>
                <p>
                    
                📧 Drop us a quick email at issues@internee.pk with the subject "Didn't get certification yet." Our team will swiftly resolve the matter, ensuring you get your recognition promptly.

                    </p>
                    <button className='greenBtn'>Read more </button>
                </div>
                <div className="firstPost">
                    <h3>We've hit a major milestone: 20,000 followers on LinkedIn! 🎉</h3>
                    <p>
                        Thank you for being a part of our incredible journey towards empowering students and professionals in the world of IT and services. Your support means the world to us! 🚀
                    </p>
                    <button className='greenBtn'>Read more </button>

                </div>
                <div className="firstPost">
                    <h3>🚀Calling communities to Empower Students, Collaborate with Internee.pk!✌</h3>
                    <p>
                    We'd love to discuss how a collaboration with Internee.pk can benefit your universites , socities, institutes and educational institutions and specially with students.
                    </p>
                    <button className='greenBtn'>Read more </button>

                </div>
            </div>
           
        </div>
    )
}

export default Blog