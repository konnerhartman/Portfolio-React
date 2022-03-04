import React from 'react';
import smileEmoji from '../../images/kh-emoji-smile.png';
import resume from '../../images/K.-Hartman-Resume.pdf';

export default function About() {
  return (
    <div className="container ms-0 ps-0">
        <div className="row">
            <aside className="col-lg-4">
                <img className="d-none d-sm-block d-sm-none d-md-block d-md-none d-lg-block img-fluid" src={smileEmoji} alt="Emoji of Konner smiling."/>
            </aside>
            <div className="text-center col-lg-8 my-5">
                <h2 className="fw-bold">About Me</h2>
                <div>
                    <p className='mt-4'>An innovative problem-solver passionate about user experience, my current focus is on app functionality and development.</p>
                    <p className='mt-4'>I am a Full Stack Web Developer with an emphasis on back end development, holding a Bachelor of Science From Texas A&M University. I recently received a certificate in Full Stack Development from Southern Methodist University, where I developed skills in JavaScript, MySQL, MongoDB, NodeJS, React.js, and more.</p>
                    <button type="button" className="aboutBtn btn btn-outline-light mt-4">
                        <a target="_blank" rel="noreferrer" className="nav-link active text-reset" href={resume}>Resume</a>
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
}
