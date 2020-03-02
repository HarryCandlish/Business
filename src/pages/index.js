import React, { Component } from "react";

import homeStyles from "../modules/home.module.scss";

import Header from '../components/header'

import coding from "../images/coding.svg";
import rocket from "../images/rocket.svg";
import creative from "../images/creative.svg";


class Index extends Component {
  render() {

    var hs = homeStyles

    return (
      <div>
         <Header/>
         {/* <img src/> */}
        <div className={hs.gridContainer}>
            <div className={hs.overlay}>
                <h1 className={hs.gridTitleOne}>
                     How we can help your business
                </h1>
                    <p className={hs.gridParagraphOne}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                      enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat.
                   </p>
                <button className={hs.gridButtonOne}>SIGN UP</button>
            </div>
            <div>
                 <img className={hs.image} src={coding} alt="coding" />
            </div>
          </div>
            <div className={hs.gridContainerTwo}>
            <div>
  <img className={hs.imageTwo} src={rocket} alt="rocket" />
</div>
                <div className={hs.overlayTwo}>
            <h1 className={hs.gridTitleTwo}>
                 Are you a junior seeking employment?
            </h1>
  <p className={hs.gridParagraphTwo}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat.
  </p>
  <button className={hs.gridButtonTwo}>JOIN US</button>
</div>
</div>
<div className={hs.gridContainer}>
            <div className={hs.overlay}>
                <h1 className={hs.gridTitleOne}>
                     Moving employment, shaping cities
                </h1>
                    <p className={hs.gridParagraphOne}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                      enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat.
                   </p>
                <button className={hs.gridButtonOne}>ABOUT US</button>
            </div>
            <div>
                 <img className={hs.imageThree} src={creative} alt="analysis" />
            </div>
          </div>
</div>
    );
  }
}

export default Index;