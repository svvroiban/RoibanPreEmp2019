import React from "react";
import "./MainContent.css";
import SideBar from "../SideBar/SideBar";

class MainContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: {
        face: [
          "Creams&gel",
          "Patches",
          "Emulsions",
          "Toners",
          "Face cleansing",
          "Make up removal",
          "Scrubs",
          "Peeling",
          "Masks"
        ],
        body: [],
        foot: [],
        hands: [],
        hair: [],
        makeup: []
      }
    };
  }
  render() {
    for (let [key, value] of Object.entries(this.state.categories)) {
      console.log(`${key}: ${value}`);
    }
    return (
      <>
        <div>Main Content</div>
        <SideBar categories={this.state.categories} />
      </>
    );
  }
}
export default MainContent;
