import React from 'react';

export default function Home() {
  return (
    <div class="col-lg-8">
        <div id="mainLogo">
            <div class="my-5 mx-5 px-5 text-center">
                {/* <img class="img-fluid d-block my-5" alt="Responsive image"  height="300px" src="./assets/images/KH-LOGO copy.png" alt="Konner Hartman's logo."> */}
                <h2>FULL STACK WEB DEVELOPER</h2>
                <p class="fw-bold py-0 my-0">Click any of the links in the navigation bar above to learn a little about me.</p>
                <p class="fw-bold py-0 my-0">-OR-</p>
                <p class="fw-bold pt-0 mt-0">Let's get straight to business!</p>
                <button type="button" class="btn btn-outline-dark mx-2">
                    <a target="_blank" rel="noreferrer" class="nav-link active text-reset" href="https://github.com/konnerhartman">Github</a>
                </button>
                <button type="button" class="btn btn-outline-dark mx-2">
                    <a target="_blank" rel="noreferrer" class="nav-link active text-reset" href="https://www.linkedin.com/in/konner-hartman/">LinkedIn</a>
                </button>
                <button type="button" class="btn btn-outline-dark mx-2">
                    <a target="_blank" rel="noreferrer" class="nav-link active text-reset" href="https://drive.google.com/file/d/1JEeGyZeOsCBbJvjaGcXqMN_F2mmo1N4F/view">Resume</a>
                </button>
            </div>
        </div>
    </div>
  );
}