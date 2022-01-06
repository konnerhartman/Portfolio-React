import React from 'react';
import compEmoji from '../../images/kh-emoji-computer.png'

const styles = {
    icon: {
        fontSize: '50px'
    }
}

export default function Skills() {
    return (
        <div className="container ms-0 ps-0">
            <div className="row">
                <section className="col-lg-4">
                    <img className="d-none d-sm-block d-sm-none d-md-block d-md-none d-lg-block img-fluid rounded-circle" height="700px" src={compEmoji} alt="Konner standing with hands in pockets and a smile on his face."/>
                </section>
                <div className='col-lg-8 text-center'>
                    <h2>Skills</h2>
                    <div className='row'>
                        <div className='col-6'>
                            <h4>Front End</h4>
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <div>
                                        <i style={styles.icon} class="devicon-javascript-plain colored"></i>
                                        <p>JavaScript</p>
                                    </div>
                                    <div>
                                        <i style={styles.icon} class="devicon-html5-plain-wordmark colored"></i>
                                        <p>HTML</p>
                                    </div>
                                    <div>
                                        <i style={styles.icon} class="devicon-css3-plain colored"></i>
                                        <p>CSS</p>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div>
                                        <i style={styles.icon} class="devicon-react-original colored"></i>
                                        <p>React</p>
                                    </div>
                                    <div>
                                        <i style={styles.icon} class="devicon-jquery-plain colored"></i>
                                        <p>JQuery</p>
                                    </div>
                                    <div>
                                        <i style={styles.icon} class="devicon-handlebars-plain"></i>
                                        <p>HandlebarsJS</p>
                                    </div>
                                </div>
                                <div>
                                        <i style={styles.icon} class="devicon-bootstrap-plain colored"></i>
                                        <p>Bootstrap</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-6'>
                            <h4>Back End</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}