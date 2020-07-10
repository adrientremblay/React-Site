import React, { Component } from "react";
import SkillBox from "../../components/SkillBox/SkillBox";

class Skills extends Component {
  state = {
    categories: [
      {
        name: "Languages",
        skills: [
          "English",
          "French",
          "Java",
          "Javascript",
          "Python3",
          "PHP",
          "C",
          "SQL",
          "Powershell",
        ],
      },
      {
        name: "Frameworks, Libraries, and Engines",
        skills: [
          "React",
          "Django",
          "Flask",
          "Node",
          "Bootstrap",
          "JMonkey3 Game Enginer",
          "Phaser3",
          "Selenium",
          "Plot.ly Dash",
        ],
      },
      {
        name: "Operating Systems",
        skills: [
          "Ubuntu 20",
          "Arch Linux",
          "Windows 10",
          "Mac OSX",
          "Robot Operating System",
        ],
      },
      {
        name: "Technologies",
        skills: ["Git", "Visual Studio Code", "Vim", "Blender", "Arduino"],
      },
      {
        name: "Soft Skills",
        skills: [
          "Leadership",
          "Idea Exchange",
          "Optimism",
          "Self-management",
          "Respect",
        ],
      },
    ],
  };

  render() {
    let categories = this.state.categories.map((category) => (
      <SkillBox name={category.name} skills={category.skills} />
    ));

    return <React.Fragment>{categories}</React.Fragment>;
  }
}

export default Skills;
