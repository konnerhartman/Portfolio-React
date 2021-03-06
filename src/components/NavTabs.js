import React from 'react';
import KHLogo from '../images/KH-LOGO copy.png';

const styles = {
    nav: {
        backgroundColor: '#565656'
    }
};

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar shadow rounded-3 sticky-top navbar-expand-md navbar-dark py-2" style={styles.nav}>
        <a className="navbar-brand mx-3" href="#home" onClick={() => handlePageChange('Home')}>
            
            <h1><img width="40px" src={KHLogo} alt='Konner Hartman Logo'/> Portfolio</h1>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-3 ms-auto">
                <li className="nav-item mx-2">
                    <button type="button" className="navBtn btn btn-outline-light" >
                        <a 
                            href="#about"
                            onClick={() => handlePageChange('About')}
                            // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                            className={currentPage === 'About' ? 'nav-link' : 'nav-link active text-reset'}>About Me
                        </a>
                    </button>
                </li>
                <li className="nav-item mx-2">
                    <button type="button" className="navBtn btn btn-outline-light" >
                        <a 
                            href="#skills"
                            onClick={() => handlePageChange('Skills')}
                            // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                            className={currentPage === 'Skills' ? 'nav-link' : 'nav-link active text-reset'}>Skills
                        </a>
                    </button>
                </li>
                <li  className="nav-item mx-2">
                    <button type="button" className="navBtn btn btn-outline-light">
                        <a 
                            href="#projects"
                            onClick={() => handlePageChange('Projects')}
                            // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                            className={currentPage === 'Projects' ? 'nav-link' : 'nav-link active text-reset'}>My Work
                        </a>                    
                    </button>
                </li>
                <li className="nav-item mx-2">
                    <button type="button" className="navBtn btn btn-outline-light">
                        <a 
                            href="#contact"
                            onClick={() => handlePageChange('Contact')}
                            // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                            className={currentPage === 'Contact' ? 'nav-link' : 'nav-link active text-reset'}>Reach Out
                        </a>                    
                    </button>
                </li>
            </ul>
        </div>
    </nav>
  );
}

export default NavTabs;
