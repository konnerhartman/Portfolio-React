import React from 'react';
import waveEmoji from '../../images/kh-emoji-wave.png';

export default function Home() {
  return (
    <div className="container row my-4">
        <div className="d-none d-sm-none d-md-block d-lg-block col-4">
            <img className="img-fluid" src={waveEmoji} alt="Emoji of Konner waving his hand."/>
        </div>
        <div className="col-lg-8 col-md-8 col-sm-12">
            <div className="text-center">
                <h2 className='fw-bold m-3'>FULL STACK WEB DEVELOPER</h2>
                <p className="fw-bold m-3">Click any of the links in the navigation bar above to learn a little about me.</p>
                <p className="fw-bold m-3">-OR-</p>
                <p className="fw-bold m-3">Let's get straight to business!</p>
                <div className='mb-5'>
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
    </div>
  );
}