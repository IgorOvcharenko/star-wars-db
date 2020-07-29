import React from 'react';

import './header.css';

const Header = () => {
  return (
    <div className="header d-flex">
      <h3>
        <a href="#Main">
          Star DB
        </a>
      </h3>
      <ul className="d-flex">
        <li>
          <a href="#PeoplePage">People</a>
        </li>
        <li>
          <a href="#PlanetsPage">Planets</a>
        </li>
        <li>
          <a href="#StarshipPage">Starships</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;