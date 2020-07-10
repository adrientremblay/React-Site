import React, { Component } from "react";
import Title from "../../components/Title/Title";
import classes from "./Portfolio.module.css";
import PortfolioItem from "../../components/PortfolioItem/PortfolioItem";

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
    ],
  };

  render() {
    let projects = this.state.projects.map((project) => (
      <PortfolioItem
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
