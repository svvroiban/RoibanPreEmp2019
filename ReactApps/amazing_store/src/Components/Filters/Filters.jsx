import React from "react";
import "./Filters.css";
import expand_arrow from "../../Img/expand_arrow.png";
import expand_arrow2 from "../../Img/expand_arrow2.png";
const arrowLeft = expand_arrow;
const arrowRight = expand_arrow2;
const Filters = () => {
  return (
    <>
      <div className="pagination-filter">
        <ul>
          <li className="inline">
            <p className="description-content">Creams & gels</p>
          </li>
        </ul>

        <div className="showing-pages">
          <ul>
            <li className="inline">
              <p className="description-number">Showing 60 of 392</p>
            </li>
            <li className="inline">
              <img src={arrowLeft} alt="arrow" />
            </li>
            <li className="inline">
              <img src={arrowRight} alt="arrow" />
            </li>
          </ul>
        </div>
      </div>
      <div className="pagination-filter">
        <div className="filter-space">
          <ul className="filters">
            <li className="inline-space">
              <p className="filter">BRAND:</p>
              <p className="filter-text">ALL BRANDS</p>
            </li>
            <li className="inline-space">
              <p className="filter">SKIN TYPE:</p>
              <p className="filter-text">FOR OILY SKIN</p>
            </li>
            <li className="inline-space">
              <p className="filter">AGE:</p>
              <p className="filter-text">30+</p>
            </li>
          </ul>
        </div>
        <div className="filter-space">
          <ul>
            <li className="inline">
              <p className="filter">SORT:</p>
              <p className="filter-text">BY POPULARITY</p>
            </li>
          </ul>
        </div>
      </div>
      <hr className="break" />
    </>
  );
};

export default Filters;
