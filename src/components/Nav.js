import React from 'react';
const styles = {
    nav: {
        backgroundColor: '#565656'
    }
}
// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Nav({ currentPage, handlePageChange }) {
  return (
    <nav class="navbar shadow rounded-3 sticky-top navbar-expand-lg navbar-dark py-2" style={styles.nav}>
            <a class="navbar-brand mx-3" href="https://konnerhartman.github.io/K.-Hartman-Portfolio/">
                
                <h1> Portfolio</h1>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav mx-3 ms-auto">
                    <li class="nav-item mx-2">
                        <button type="button" class="btn btn-outline-light" >
                            <a id="abtMeBtn" class="nav-link active text-reset" href="#about">About Me</a>
                        </button>
                    </li>
                    <li  class="nav-item mx-2">
                        <button type="button" class="btn btn-outline-light">
                            <a id="myWorkBtn" class="nav-link active text-reset" href="#myWork">My Work</a>
                        </button>
                    </li>
                    <li class="nav-item mx-2">
                        <button type="button" class="btn btn-outline-light">
                            <a id="reachMeBtn" class="nav-link active text-reset" href="#reachMe">Reach Out</a>
                        </button>
                    </li>
                </ul>
            </div>
        </nav>

    // <ul className="nav nav-tabs">
    //   <li className="nav-item">
    //     <a
    //       href="#home"
    //       onClick={() => handlePageChange('Home')}
    //       // This is a conditional (ternary) operator that checks to see if the current page is "Home"
    //       // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
    //       className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
    //     >
    //       Home
    //     </a>
    //   </li>
    //   <li className="nav-item">
    //     <a
    //       href="#about"
    //       onClick={() => handlePageChange('About')}
    //       // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
    //       className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
    //     >
    //       About
    //     </a>
    //   </li>
    //   <li className="nav-item">
    //     <a
    //       href="#projects"
    //       onClick={() => handlePageChange('Projects')}
    //       // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
    //       className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
    //     >
    //       Blog
    //     </a>
    //   </li>
    //   <li className="nav-item">
    //     <a
    //       href="#contact"
    //       onClick={() => handlePageChange('Contact')}
    //       // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
    //       className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
    //     >
    //       Contact
    //     </a>
    //   </li>
    // </ul>
  );
}

export default Nav;
