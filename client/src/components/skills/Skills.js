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
          "HTML",
          "CSS",
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
          "JUnit",
          "Bootstrap",
          "Selenium",
          "Plot.ly Dash",
          "JMonkey3",
          "Phaser3",
        ],
      },
      {
        name: "Technologies",
        skills: [
          "Git",
          "Vim",
          "LaTeX",
          "Visual Studio Code",
          "Eclipse",
          "IntelliJ",
          "Blender",
          "Arduino",
          "SQL",
          "MongoDB",
          "Robot Operating System (ROS)",
        ],
      },
      {
        name: "Technical Knowledge",
        skills: [
          "Object-Oriented Design",
          "Algorithmic Efficiency (Big-O)",
          "Data Structures",
          "Agile Methodology",
          "Software Architecture",
          "UML modelling",
          "Design/Anti-Patterns",
          "Operating System design",
          "Requirements elicitation",
          "Project Planning & Management",
          "Basic computer repair",
        ],
      },
      {
        name: "Operating Systems",
        skills: ["Linux (i use arch btw)", "Windows", "Mac OSX"],
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
