import React, { Component } from "react";
import Title from "../Title";
import PortfolioItem from "./PortfolioItem";

class Portfolio extends Component {
  state = {
    projects: [
      {
        title: "This website",
        description: "Porfolio and blog personal website made using React.",
        skills: [
          "React",
          "Javascript",
          "CSS",
          "MongoDB",
          "Express.js",
          "Node.js",
        ],
        imageName: "p1.jpeg",
      },
      {
        title: "Old Personal Website",
        description:
          "A blog website I made using the Django Python framework and Mezzanine CMS.",
        skills: [
          "Django",
          "Python",
          "Mezzanine CMS",
          "PostgreSQL",
          "Bootstrap",
          "Heroku",
        ],
        imageName: "p2.jpg",
      },
      {
        title: "CRC Robotics Simulation",
        description:
          "A 3D Java simulation made for the 'Canadian Robotics Competitions' organization for the 2020 'Jump' game.",
        skills: ["JMonkey3", "Java", "NiftyGUI", "Blender"],
        imageName: "p3.png",
      },
    ],
  };

  render() {
    let projects = this.state.projects.map((project) => (
      <PortfolioItem
        key={project.title}
        title={project.title}
        description={project.description}
        skills={project.skills}
        imgName={project.imageName}
      />
    ));

    return (
      <React.Fragment>
        <Title>Portfolio</Title>

        {projects}
      </React.Fragment>
    );
  }
}

export default Portfolio;
