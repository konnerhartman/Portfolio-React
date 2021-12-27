import React from 'react';

const styles = {
    icons: {
        color: "#565656"
    }
};

export default function Contact() {
  return (
    <div id="reachMe" class="container d-none gx-5">
        <h2 class="text-center fw-bold mt-5" id="contact">Reach out</h2>
        <p class="fw-bold text-center">I look forward to hearing from you!</p>
        <div class="row text-center">
            <div class="col-6">
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/konner-hartman/" style={styles.icons}><i class="fab fa-linkedin fa-5x"></i></a>
            </div>
            <div class="col-6">
                <a target="_blank" rel="noreferrer" href="https://github.com/konnerhartman" style={styles.icons}><i class="fab fa-github-alt fa-5x"></i></a>
            </div>
        </div>
        <div class="row text-center">
            <div class="col-6">
                <a target="_blank" rel="noreferrer" href="https://www.facebook.com/konner.hartman" style={styles.icons}><i class="fab fa-facebook fa-5x"></i></a>
            </div>
            <div class="col-6">
                <a target="_blank" rel="noreferrer" href="https://twitter.com/kHartman22" style={styles.icons}><i class="fab fa-twitter fa-flip fa-5x"></i></a>
            </div>
        </div>
        <div class="row text-center">
            <div class="col-6">
                <a href="tel:214-226-4278" style={styles.icons}><i class="fas fa-mobile-alt fa-5x"></i></a>
            </div>
            <div class="col-6">
                <a href="mailto:konner.hartman22@gmail.com" style={styles.icons}><i class="fas fa-envelope fa-5x"></i></a>
            </div>
        </div>
    </div>
  );
}