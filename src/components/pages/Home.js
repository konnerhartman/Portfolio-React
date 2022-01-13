import React from 'react';
import waveEmoji from '../../images/kh-emoji-wave.png';

export default function Home() {
  return (
    <div className="container row my-4">
        <div className="col-lg-8 col-md-8 col-sm-12">
            <div class="animated-title">
                <div class="text-top">
                    <div>
                    <span>Konner</span>
                    <span>Hartman</span>
                    </div>
                </div>
                <div class="text-bottom">
                    <div>Full Stack Web Developer</div>
                </div>
            </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
            <img className="d-none d-sm-none d-md-block d-lg-block img-fluid" src={waveEmoji} alt="Emoji of Konner waving his hand."/>
            <div className="text-center">
                <p className="fw-bold m-3">Let's get to business!</p>
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