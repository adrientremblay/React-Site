import React, { Component } from "react";
import Title from "../Title";
import PortfolioItem from "./PortfolioItem";

class Portfolio extends Component {
  state = {
    projects: [
      {
        title: "Rusty Chip (WIP)",
        description: "A Chip-8 emulator in Rust.  A work in progress.",
        skills: ["Rust"],
        imageName: "p5.jpg",
        url: "https://github.com/MartensCedric/rusty-chip",
      },
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
        url: "https://github.com/adrientremblay/React-Site",
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
        url: "https://github.com/adrientremblay/personal-website",
      },
      {
        title: "CRC Robotics Simulation",
        description:
          "A 3D Java simulation distributed to teams of the 'Canadian Robotics Competitions' organization for the 2020 'Flip' competition.",
        skills: ["JMonkey3", "Java", "NiftyGUI", "Blender"],
        imageName: "p3.png",
        url: "https://github.com/adrientremblay/CRC-Robotics-Simulation",
      },
      {
        title: "2D Gladiator Game",
        description:
          "A small 2D platformer-fighting game made using the Phaser3 game framework.",
        skills: ["Phaser3", "Node", "Javascript"],
        imageName: "p4.png",
        url: "https://github.com/adrientremblay/GladiatorGame",
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
        url={project.url}
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
