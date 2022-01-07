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
                    <img className="d-none d-sm-block d-sm-none d-md-none d-md-block d-lg-block img-fluid" src={compEmoji} alt="Emoji of Konner on his computer."/>
                </section>
                <div className='col-lg-8 text-center my-5'>
                    <h2 className='pb-2 fw-bold'>Skills</h2>
                    <div className='row'>
                        <div className='col-lg-6 col-sm-12'>
                            <h4 className='pb-3'>Front End</h4>
                            <div className='row m-3'>
                                <div className='col-6'>
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
                                <div className='col-6'>
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
                        <div className='col-lg-6 col-sm-12'>
                            <h4 className='pb-3'>Back End</h4>
                            <div className='row m-3'>
                                <div className='col-6'>
                                    <div>
                                        <i style={styles.icon} class="devicon-nodejs-plain colored"></i>
                                        <p>NodeJS</p>
                                    </div>
                                    <div>
                                        <i style={styles.icon} class="devicon-npm-original-wordmark colored"></i>
                                        <p>NPM</p>
                                    </div>
                                    <div>
                                        <i style={styles.icon} class="devicon-express-original colored"></i>
                                        <p>Express</p>
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <div>
                                        <i style={styles.icon} class="devicon-mysql-plain colored"></i>
                                        <p>MySQL</p>
                                    </div>
                                    <div>
                                        <i style={styles.icon} class="devicon-sequelize-plain colored"></i>
                                        <p>Sequelize</p>
                                    </div>
                                    <div>
                                        <i style={styles.icon} class="devicon-mongodb-plain colored"></i>
                                        <p>MongoDB</p>
                                    </div>
                                </div>
                                <div>
                                        <i style={styles.icon} class="devicon-graphql-plain colored"></i>
                                        <p>GraphQL</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}