import React from 'react';
import ProfPic from '../../images/Prof-Pic-Square.jpg'

const styles = {
    icons: {
        color: "white"
    }
};

export default function Contact() {
  return (
    <div className='container row my-4'>
        <div className='d-none d-sm-none d-md-block d-lg-block col-4'>
            <img className="img-fluid rounded-circle" src={ProfPic} alt="Konner sitting infront of his desk with a big smile on his face!."/>
        </div>
        <div className="col-8 container text-center">
            <h2 className="text-center fw-bold mt-5" id="contact">Reach out</h2>
            <p className="fw-bold">I look forward to hearing from you!</p>
            <div className='row'>
                <div className='col-6'>
                    <div className='mb-3'>
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/konner-hartman/" style={styles.icons}><i className="fab fa-linkedin fa-5x"></i></a>
                    </div>
                    <div className='m-3'>
                        <a target="_blank" rel="noreferrer" href="https://www.facebook.com/konner.hartman" style={styles.icons}><i className="fab fa-facebook fa-5x"></i></a>
                    </div>
                    <div className='m-3'>
                        <a href="tel:214-226-4278" style={styles.icons}><i className="fas fa-mobile-alt fa-5x"></i></a>
                    </div>
                </div>
                <div className='col-6'>
                    <div className='mb-3'>
                        <a target="_blank" rel="noreferrer" href="https://github.com/konnerhartman" style={styles.icons}><i className="fab fa-github-alt fa-5x"></i></a>
                    </div>
                    <div className='m-3'>
                        <a target="_blank" rel="noreferrer" href="https://twitter.com/kHartman22" style={styles.icons}><i className="fab fa-twitter fa-flip fa-5x"></i></a>
                    </div>
                    <div className='m-3'>
                        <a href="mailto:konner.hartman22@gmail.com" style={styles.icons}><i className="fas fa-envelope fa-5x"></i></a>
                    </div>
                </div>
            </div>



            {/* <div className="row text-center">
                <div className="col-6 p-2">
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/konner-hartman/" style={styles.icons}><i className="fab fa-linkedin fa-5x"></i></a>
                </div>
                <div className="col-6 p-2">
                    <a target="_blank" rel="noreferrer" href="https://github.com/konnerhartman" style={styles.icons}><i className="fab fa-github-alt fa-5x"></i></a>
                </div>
            </div>
            <div className="row text-center">
                <div className="col-6 p-2">
                    <a target="_blank" rel="noreferrer" href="https://www.facebook.com/konner.hartman" style={styles.icons}><i className="fab fa-facebook fa-5x"></i></a>
                </div>
                <div className="col-6 p-2">
                    <a target="_blank" rel="noreferrer" href="https://twitter.com/kHartman22" style={styles.icons}><i className="fab fa-twitter fa-flip fa-5x"></i></a>
                </div>
            </div>
            <div className="row text-center p-2">
                <div className="col-6">
                    <a href="tel:214-226-4278" style={styles.icons}><i className="fas fa-mobile-alt fa-5x"></i></a>
                </div>
                <div className="col-6 p-2">
                    <a href="mailto:konner.hartman22@gmail.com" style={styles.icons}><i className="fas fa-envelope fa-5x"></i></a>
                </div>
            </div> */}
        </div>
    </div>
  );
}