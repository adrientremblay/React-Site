import React, { Component } from "react";
import Title from "../Title";
import SkillBox from "./SkillBox";

class Skills extends Component {
  state = {
    categories: [
      {
        name: "Languages",
        skills: [
          "English",
          "French",
          "Java",
          "Python",
          "Javascript",
          "Rust",
          "C",
          "PHP",
          "Lisp",
          "Prolog",
          "Ruby",
          "Bash",
          "Powershell",
        ],
      },
      {
        name: "Frameworks, Libraries, and Engines",
        skills: [
          "ReactJS",
          "Django",
          "Flask",
          "Node",
          "Bootstrap",
          "Selenium",
          "Plot.ly Dash",
          "JMonkey3 Game Engine",
          "Phaser3 Game Library",
        ],
      },
      {
        name: "Technologies",
        skills: [
          "Git",
          "Vim",
          "Visual Studio Code",
          "Blender",
          "Arduino",
          "SQL",
          "MongoDB",
          "Robot Operating System",
        ],
      },
      {
        name: "Operating Systems",
        skills: [
          "Linux (i use arch btw)",
          "Windows 10",
          "Mac OSX",
        ],
      },
      {
        name: "Soft Skills",
        skills: [
          "Leadership",
          "Work Ethic",
          "Self-management",
          "Collaboration",
          "Conflict Management",
          "Problem Solving",
          "Integrity",
          "Sensitivity",
        ],
      },
    ],
  };

  render() {
    let categories = this.state.categories.map((category) => (
      <SkillBox
        key={category.name}
        name={category.name}
        skills={category.skills}
      />
    ));

    return (
      <React.Fragment>
        <Title>Skills</Title>
        {categories}
      </React.Fragment>
    );
  }
}

export default Skills;
