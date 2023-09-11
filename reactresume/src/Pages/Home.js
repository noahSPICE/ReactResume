import React from "react";
import GithubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../Styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>HELLO! MY NAME IS NOAH NELSON.</h2>
        <div className="prompt">
          <p>
            I AM A FULL STACK WEB DEVELOPER WHO IS DETERMINED TO LEARN AND USE
            THE SKILLS I HAVE AQUIRED TO MAKE THE BEST PRODUCTS POSSIBLE.
          </p>
          <LinkedInIcon />
          <EmailIcon />
          <GithubIcon />
        </div>
        <div className="skills">
          <h2 className="skillsHeader">SKILLS</h2>
          <ol className="list">
            <li className="item">
              <h2>FRONT-END</h2>
              <span>REACTJS, HTML, CSS, BOOTSTRAP</span>
            </li>
            <li className="item">
              <h2>BACK-END</h2>
              <span> NODEJS, EXPRESSJS, MYSQL, MONGODB, SQL</span>
            </li>
            <li className="item">
              <h2>LANGUAGES</h2>
              <span>JAVASCRIPT</span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Home;
