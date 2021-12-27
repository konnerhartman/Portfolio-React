import React from "react";

const styles = {
    card: {
        color: "white",
        backgroundColor: "#565656"
    }
};

export default function Projects() {
    return (
        <div id="myWork" class="container d-none pt-5">
        <h2 class="text-center fw-bold">
            My Work
        </h2>

        {/* <!-- First Project --> */}

        <div class="mb-3 shadow-lg">
            <div class="row g-0 rounded" style={styles.card}>
                <div class="col-md-4">
                    {/* <img class="shadow bg-secondary rounded img-fluid" src="./assets/images/BuggysBlog.gif" alt="Screen capture of link."> */}
                    <button type="button" class="btn btn-outline-light m-1">
                        <a target="blank" class="nav-link active text-reset" href="https://buggys-blog.herokuapp.com/">Deployed Page</a>
                    </button>        
                    <button type="button" class="btn btn-outline-light m-1">
                        <a target="blank" class="nav-link active text-reset" href="https://github.com/konnerhartman/Tech-Blog">Repository</a>
                    </button>
                </div>
                <div class="col-md-8">
                    <h5 class="card-title text-center bg-dark p-3 rounded">"Buggy's Tech Blog"</h5>
                    <div class="card-body">
                        <p class="card-text">This app is a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. This app follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.</p>
                    </div>
                </div>
            </div>
        </div>

        {/* <!-- Second Project --> */}

        <div class="mb-3 shadow-lg">
            <div class="row g-0 rounded" style={styles.card}>
                <div class="col-md-4">
                    {/* <img class="shadow bg-secondary rounded img-fluid" src="./assets/images/Employee_Tracker_SQL.gif" alt="Screen capture of link."> */}
                    <button type="button" class="btn btn-outline-light m-1">
                        <a target="blank" class="nav-link active text-reset" href="https://youtu.be/Tyaef5QoG08">Demo Video</a>
                    </button>        
                    <button type="button" class="btn btn-outline-light m-1">
                        <a target="blank" class="nav-link active text-reset" href="https://github.com/konnerhartman/Employee-Tracker">Repository</a>
                    </button>
                </div>
                <div class="col-md-8">
                    <h5 class="card-title text-center bg-dark p-3 rounded">"Back-End Employee Tracker"</h5>
                    <div class="card-body">
                        <p class="card-text">This is a command-line application that manages a company's employee database, using Node.js, Inquirer, and MySQL. I built this app to gain valuable knowledge and experience with back-end coding, using SQL, Node.js, and NPM Inquirer. This app solves the problem of strugling to view and understand employes roles. While building this, I learned how to use SQL and how to connect it to other features like NPM and Node.JS. There is no deployed page for this app.</p>
                    </div>
                </div>
            </div>
        </div>

        {/* <!-- Third Project --> */}

        <div class="mb-3 shadow-lg">
            <div class="row g-0 rounded" style={styles.card}>
                <div class="col-md-4">
                    {/* <img class="shadow bg-secondary rounded img-fluid" src="./assets/images/Note_Taker.gif" alt="Screen capture of link."> */}
                    <button type="button" class="btn btn-outline-light m-1">
                        <a target="blank" class="nav-link active text-reset" href=" https://shielded-hollows-62643.herokuapp.com/">Deployed Page</a>
                    </button>        
                    <button type="button" class="btn btn-outline-light m-1">
                        <a target="blank" class="nav-link active text-reset" href="https://github.com/konnerhartman/Note-Taker">Repository</a>
                    </button>
                </div>
                <div class="col-md-8">
                    <h5 class="card-title text-center bg-dark p-3 rounded">"Not Your Dad's Note Taking App"</h5>
                    <div class="card-body">
                        <p class="card-text">The app allows the user to make notes of To-Dos that persist on the page by utilising API's and databases. It was creating using express.js. My motivation for this app was to create something that the user could use to help visualize and accomplish tasks. While bulding this app I learned a lot about express and routing! I utilized seperate files for each specific code, which presented me with challanges when it came to linking all the files togehter.</p>
                    </div>
                </div>
            </div>
        </div>

        {/* <!-- Group Project --> */}

        <div class="mb-3 shadow-lg">
            <div class="row g-0 rounded" style={styles.card}>
                <div class="col-md-4">
                    {/* <img class="shadow bg-secondary rounded img-fluid" src="./assets/images/Fetch-A-Buzz.png" alt="Screen capture of link."> */}
                    <button type="button" class="btn btn-outline-light m-1">
                        <a target="blank" class="nav-link active text-reset" href="https://konnerhartman.github.io/Fetch-A-Buzz/">Deployed Page</a>
                    </button>        
                    <button type="button" class="btn btn-outline-light m-1">
                        <a target="blank" class="nav-link active text-reset" href="https://github.com/konnerhartman/Fetch-A-Buzz">Repository</a>
                    </button>
                </div>
                <div class="col-md-8">
                    <h5 class="card-title text-center bg-dark p-3 rounded">"Fetch A Buzz"</h5>
                    <div class="card-body">
                        <p class="card-text">Fetch A Buzz is an app created as a class project by myself and two other classmates. This app allows the user to select certain cocktails and see the movie that made the drink famous. To achieve this we utilized Materialize (CSS framework), JQuery, and two APIs: OMDB and TheCocktailDB. My roll in this project was a wide spread of tasks, ranging from front end design, JavaScript functionality, to team managing within GitHub and making sure any branch issues were resolved correctly, the main branch remained clean, and each member stayed on task by using the KANBAN board on GitHub.</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="row g-0 content-justify-center">
            {/* <!-- Web Design --> */}
            <div class="col m-1 rounded shadow-lg" style={styles.card}>
                <h5 class="card-title text-center bg-dark p-3 rounded">Template Website Design</h5>
                {/* <img class="shadow bg-secondary rounded img-fluid" src="./assets/images/perilousoutdoors.png" alt="Screen capture of link."> */}
                <div class="card-body">
                    <p class="card-text">Here is an example of light web design I have done using a template site. This specific site was created on SquareSpace.com.</p>
                </div>
                <button type="button" class="btn btn-outline-light">
                    <a target="blank" rel="noreferrer" class="nav-link active text-reset" href="https://www.perilousoutdoors.com/">Visit Site</a>
                </button>
            </div>
            {/* <!-- Google Portfolio --> */}
            <div class="col m-1 rounded shadow-lg" style={styles.card}>
                <h5 class="card-title text-center bg-dark p-3 rounded">Other Interests</h5>
                {/* <img target="blank" class="shadow rounded img-fluid" src="./assets/images/google-drive.png" alt="Screen capture of link."> */}
                <div class="card-body">
                    <p class="card-text">This Google page will give you a glimpse into other branches of my life. Get a better feel for who I am.</p> 
                </div>
                <button type="button" class="btn btn-outline-light">
                    <a class="nav-link active text-reset" target="_blank" rel="noreferrer" href="https://drive.google.com/drive/folders/1UuTff7HrEOknrHOJARi-pUAUP2q-LWWB?usp=sharing">See More</a>
                </button> 
            </div>  
        </div>
    </div>   
    );
}