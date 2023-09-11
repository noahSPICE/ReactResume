import React from "react";
import ProjectItem from "../Components/ProjectItem";
import Proj1 from "../assets/Proj1.svg";
import Proj2 from "../assets/Proj2.jpeg";
import Proj3 from "../assets/Proj3.png";
import Proj4 from "../assets/Proj4.jpeg";
import "../Styles/Projects.css";

function Projects() {
  return (
    <div className="projects">
      <h1>PROJECTS</h1>
      <div className="projectList"></div>
      <ProjectItem
        name="SOCIAL MEDIA WEBSITE"
        image={
          <a href="https://github.com/noahSPICE/Handlebars-and-TechBlogs">
            <img src={Proj1} alt="Proj1" />
          </a>
        }
      />
      <ProjectItem
        name="MENTAL BREAK MINIGAMES"
        image={
          <a href="https://github.com/amandajduva/mini-games">
            <img src={Proj2} alt="Proj2" />
          </a>
        }
      />
      <ProjectItem
        name="CASTLE DOOR APIS SOCIAL MEDIA"
        image={
          <a href="https://github.com/noahSPICE/CastleDoor_APIs">
            <img src={Proj3} alt="Proj3" />
          </a>
        }
      />
      <ProjectItem
        name="SQL EMPLOYEE MANAGEMENT SYSTEM"
        image={
          <a href="https://github.com/noahSPICE/sqlEmployeeManager">
            <img src={Proj4} alt="Proj4" />
          </a>
        }
      />
    </div>
  );
}

export default Projects;
