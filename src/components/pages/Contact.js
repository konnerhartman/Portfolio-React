import React from 'react';
import ProfPic from '../../images/Prof-Pic-Square.jpg'
import resume from '../../images/Konner_Hartman_Full_Resume.pdf';

export default function Contact() {
  return (
    <div className='container row ms-0 ps-0'>
        <div className='mt-5 d-none d-sm-none d-md-none d-lg-block col-4'>
            <img className="img-fluid rounded-circle" src={ProfPic} alt="Konner sitting infront of his desk with a big smile on his face!."/>
        </div>
        <div className="col-8 container text-center my-5">
            <h2 className="text-center fw-bold" id="contact">Reach out</h2>
            <p className="fw-bold">I look forward to hearing from you!</p>
            <div className='row'>
                <div className='col-6'>
                    <div className='mb-3'>
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/konner-hartman/"><i className="fab fa-linkedin fa-5x"></i></a>
                    </div>
                    <div className='m-3'>
                        <a href="tel:214-226-4278"><i className="fas fa-mobile-alt fa-5x"></i></a>
                    </div>
                </div>
                <div className='col-6'>
                    <div className='mb-3'>
                        <a target="_blank" rel="noreferrer" href="https://github.com/konnerhartman"><i className="fab fa-github-alt fa-5x"></i></a>
                    </div>
                    <div className='m-3'>
                        <a href="mailto:konner.hartman22@gmail.com"><i className="fas fa-envelope fa-5x"></i></a>
                    </div>
                </div>
                <button type="button" className="btn btn-outline-light m-2">
                    <a target="_blank" rel="noreferrer" className="nav-link active text-reset" href={resume}>Resume</a>
                </button>
            </div>
        </div>
    </div>
  );
}