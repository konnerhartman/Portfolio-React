import React from 'react';
import computerEmoji from '../../images/kh-emoji-computer.png';

export default function Home() {
  return (
    <div className="container rox">
        <div className="col-lg-4">
            <img className="d-none d-sm-block d-sm-none d-md-block d-md-none d-lg-block img-fluid rounded-circle" height="700px" src={computerEmoji} alt="Konner standing with hands in pockets and a smile on his face."/>
        </div>
        <div className="col-lg-8">
            <div className="my-5 mx-5 px-5 text-center">
                <h2>FULL STACK WEB DEVELOPER</h2>
                <p className="fw-bold py-0 my-0">Click any of the links in the navigation bar above to learn a little about me.</p>
                <p className="fw-bold py-0 my-0">-OR-</p>
                <p className="fw-bold pt-0 mt-0">Let's get straight to business!</p>
                <button type="button" className="btn btn-outline-light mx-2">
                    <a target="_blank" rel="noreferrer" className="nav-link active text-reset" href="https://github.com/konnerhartman">Github</a>
                </button>
                <button type="button" className="btn btn-outline-light mx-2">
                    <a target="_blank" rel="noreferrer" className="nav-link active text-reset" href="https://www.linkedin.com/in/konner-hartman/">LinkedIn</a>
                </button>
                <button type="button" className="btn btn-outline-light mx-2">
                    <a target="_blank" rel="noreferrer" className="nav-link active text-reset" href="https://drive.google.com/file/d/1JEeGyZeOsCBbJvjaGcXqMN_F2mmo1N4F/view">Resume</a>
                </button>
            </div>
        </div>
    </div>
  );
}