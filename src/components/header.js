
import React, { Component } from "react";

import navigationStyles from "../modules/header.module.scss";

class Header extends Component {
    render() {

        var ns = navigationStyles

    return (
        <div>
            <nav>
                <div className={ns.container}>
                    <h1 className={ns.title}>
                        Pearl
                    </h1>
                </div>
                <ul className={ns.navigationList}>
                    <a className={ns.link} href="#/">
                     <li>
                        <p>Our Work</p>
                    </li>
                   </a>
                   <a className={ns.link} href="#/">
                     <li>
                        <p>Clients</p>
                    </li>
                   </a>
                   <a  className={ns.link}href="#/">
                     <li>
                        <p>Team</p>
                    </li>
                   </a>
                   <a className={ns.link} href="#/">
                   </a>
                </ul>
            </nav>
      </div>
    );
  }
}



export default Header;