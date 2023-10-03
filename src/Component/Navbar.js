import React, { useState } from 'react';
import "/Users/harshsahcdeva/Desktop/projected/src/Styles/Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes, faBars, faHouseUser, faCircleInfo, faBriefcase, faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { Menuitems } from '/Users/harshsahcdeva/Desktop/projected/src/Component/Menuitem.js';
library.add(faTimes, faBars, faHouseUser, faCircleInfo, faBriefcase, faAddressBook);

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav className="navbar">
      <h1 className="navbar_h">Trippy</h1>

      <div className="menu-icons" onClick={handleClick}>
        <FontAwesomeIcon icon={clicked ? faTimes : faBars} />
      </div>

      <ul className={clicked?"navbar-item active":"navbar-item"}>
        {Menuitems.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.cName} href={item.url}>
              <FontAwesomeIcon icon={item.icon} className="icon-with-margin"/> 
               {item.title}
              </a>
            </li>
          );
        })}
        <button>Sign Up</button>
      </ul>
    </nav>
  );
};

export default Navbar;
