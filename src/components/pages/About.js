import React from 'react';

const styles = {
    cardBody: {
        color: 'white',
        backgroundColor: '#565656'
    }
};

export default function About() {
  return (
    <div className="container ms-0 ps-0">
        <div className="row">
            <section className="intro col-lg-4">
                {/* <img class="d-none d-sm-block d-sm-none d-md-block d-md-none d-lg-block img-fluid" height="700px" src="./assets/images/IMG_6895-cutout.png" alt="Konner standing with hands in pockets and a smile on his face."> */}
            </section>

            <div className="accordion my-5 d-none" id="accordionExample">
                <h2 className="text-center fw-bold">About Me</h2>
                <div>
                    <div className="card-header bg-dark" id="headingOne">
                        <h2 className="mb-0">
                        <button className="btn btn-link collapsed text-white text-decoration-none px-5" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            My Past
                        </button>
                        </h2>
                    </div>
                
                    <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div className="card-body" style={styles.cardBody}>
                            <p>Building is my passion. As a child, I would lock myself away in my bedroom, spending endless hours creating anything and everything with Lego, Lincoln Logs, or other building toys. The older I became, the more I gained the trust of my father with power tools… because believe it or not, power tools can pose a bit of danger in the hands of a pre-teen. The power tools allowed me to create and transpire my love for creating through the medium of wood. I can vividly remember the days my dad took me on construction sites where I assisted with house add-ons, building decks, awnings, etc. The building went beyond that. We spent countless hours in his workshop, music blasting, garage door open — just creating.</p>

                            <p>Outside of the garage, my time was spent outdoors; working outside, riding motorcycles and skateboarding. My most vivid memory was, of course, relevant to creating. My parents bought a new water heater, and while they attempted to discard the cardboard box it came in, I immediately became an astronaut and that box was my spaceship. I was suddenly the first man on the moon!</p>
                            
                            <p>Letting my creativity run wild was my passion then and is to this day. Whether it was woodwork, art, or spending time outdoors — I was determined to build, to create, to make something out of nothing!</p>                            
                        </div>
                    </div>
                </div>

                <div className="">
                    <div className="card-header bg-dark" id="headingTwo">
                        <h2 className="mb-0">
                        <button className="btn btn-link collapsed text-white text-decoration-none px-5" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            My Present
                        </button>
                        </h2>
                    </div>

                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                        <div className="card-body" style={styles.cardBody}>
                            <p>I’m currently a Senior Zoologist at the Dallas Zoo. I know what you’re thinking, “What a cool job!” And you’re right — it is! And while this opportunity is phenomenal and has offered me experiences that most wouldn’t get in a lifetime, I have decided to make a career change. My passion for creativity and building runs deep, and with great eager, I am transitioning into web development.</p>

                            <p>As I am working full-time at the zoo, I am also a full stack coding bootcamp student at Southern Methodist University in Dallas, Tx.</p>

                            <p>While working 40 hours a week, I was apprehensive to sign up for a class the would add 20+ hours to my work week, but I was determined to make this life change happen. And I must say, now that it is more than half way complete, I have absolutely fallen in love with it!</p>
                        </div>
                    </div>
                </div>

                <div className="">
                    <div className="card-header bg-dark" id="headingThree">
                        <h2 className="mb-0">
                        <button className="btn btn-link collapsed text-white text-decoration-none px-5" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            My Future
                        </button>
                        </h2>
                    </div>

                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                        <div className="card-body" style={styles.cardBody}>
                            <p>My aspirations for my future are forever changing as life progresses. But one thing I do know is that I will be a successful web developer! As I did research into this completely new occupational field, I was always leaning toward back-end development. Although, I do have tons of fun with front-end design, so I may try my hand at free-lancing, while I continue to achieve my goal of becoming a back-end developer.</p>

                            <p>Thanks for making it this far! Check out some of my other links above.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
