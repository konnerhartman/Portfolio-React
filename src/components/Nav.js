import React from 'react';

const styles = {
    nav: {
        backgroundColor: '#565656'
    }
};

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
                        <a 
                            href="#about"
                            onClick={() => handlePageChange('About')}
                            // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>About Me
                        </a>
                    </button>
                </li>
                <li  class="nav-item mx-2">
                    <button type="button" class="btn btn-outline-light">
                        <a id="myWorkBtn" class="nav-link active text-reset" href="#projects">My Work</a>
                    </button>
                </li>
                <li class="nav-item mx-2">
                    <button type="button" class="btn btn-outline-light">
                        <a id="reachMeBtn" class="nav-link active text-reset" href="#contact">Reach Out</a>
                    </button>
                </li>
            </ul>
        </div>
    </nav>
  );
}

export default Nav;
