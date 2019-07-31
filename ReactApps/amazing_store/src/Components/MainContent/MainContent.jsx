import React from "react";
import "./MainContent.css";
import SideBar from "../SideBar/SideBar";
import expand_arrow from "../../Img/expand_arrow.png";
import expand_arrow2 from "../../Img/expand_arrow2.png";
const arrowLeft = expand_arrow;
const arrowRight = expand_arrow2;

class MainContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: {
        FACE: [
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
        BODY: [
          "Patches",
          "Emulsions",
          "Toners",
          "Face cleansing",
          "Make up removal",
          "Scrubs",
          "Peeling"
        ],
        FOOT: ["Scrubs", "Peeling", "Masks"],
        HANDS: [],
        HAIR: [],
        MAKEUP: ["Emulsions", "Toners", "Face cleansing"]
      },
      toggle: -1
    };
  }
  showSubCategories = index => {
    this.setState({ toggle: index });
  };
  render() {
    console.log(this.state.toggle);
    return (
      <>
        <div className="container">
          <div className="column1">
            <SideBar
              categories={this.state.categories}
              showSubCategories={this.showSubCategories}
              toggle={this.state.toggle}
            />
          </div>
          <div className="column2">
            <div className="pagination-filter">
              <div>
                <ul>
                  <li className="inline">
                    <p className="description-content">Creams & gels</p>
                  </li>
                </ul>
              </div>
              <div className="showing-pages">
                <ul>
                  <li className="inline">
                    <p className="description-number">Showing 60 of 392</p>
                  </li>
                  <li className="inline">
                    <img src={arrowLeft} />
                  </li>
                  <li className="inline">
                    <img src={arrowRight} />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default MainContent;
