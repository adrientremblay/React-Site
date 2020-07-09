import React, { Component } from "react";
import SkillBox from "../../components/SkillBox/SkillBox";

class Skills extends Component {
  state = {
    categories: [
      {
        name: "Languages",
        skills: ["making websites"],
      },
      {
        name: "Game Development",
        skills: ["swagging out", "smoking"],
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
