import React from 'react';
import ProfPic from '../../images/Prof-Pic-Square.jpg'

const styles = {
    icons: {
        color: "#565656"
    }
};

export default function Contact() {
  return (
    <div className='container row'>
        <div className='col-4'>
            <img className="d-none d-sm-block d-sm-none d-md-block d-md-none d-lg-block img-fluid rounded-circle" height="700px" src={ProfPic} alt="Konner standing with hands in pockets and a smile on his face."/>
        </div>
        <div className="col-8 container gx-5">
            <h2 className="text-center fw-bold mt-5" id="contact">Reach out</h2>
            <p className="fw-bold text-center">I look forward to hearing from you!</p>
            <div className="row text-center">
                <div className="col-6">
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/konner-hartman/" style={styles.icons}><i className="fab fa-linkedin fa-5x"></i></a>
                </div>
                <div className="col-6">
                    <a target="_blank" rel="noreferrer" href="https://github.com/konnerhartman" style={styles.icons}><i className="fab fa-github-alt fa-5x"></i></a>
                </div>
            </div>
            <div className="row text-center">
                <div className="col-6">
                    <a target="_blank" rel="noreferrer" href="https://www.facebook.com/konner.hartman" style={styles.icons}><i className="fab fa-facebook fa-5x"></i></a>
                </div>
                <div className="col-6">
                    <a target="_blank" rel="noreferrer" href="https://twitter.com/kHartman22" style={styles.icons}><i className="fab fa-twitter fa-flip fa-5x"></i></a>
                </div>
            </div>
            <div className="row text-center">
                <div className="col-6">
                    <a href="tel:214-226-4278" style={styles.icons}><i className="fas fa-mobile-alt fa-5x"></i></a>
                </div>
                <div className="col-6">
                    <a href="mailto:konner.hartman22@gmail.com" style={styles.icons}><i className="fas fa-envelope fa-5x"></i></a>
                </div>
            </div>
        </div>
    </div>
  );
}