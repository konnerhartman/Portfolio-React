import React from 'react';
import compEmoji from '../../images/kh-emoji-computer.png'


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
                            <i class="devicon-javascript-plain colored"></i>

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