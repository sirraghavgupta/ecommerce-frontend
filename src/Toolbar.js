import React from 'react';
import classes from './Toolbar.module.css';
import Hamburger from './Hamburger';

const Toolbar = (props) => {
  const { toggleCategoryBar } = props;

  return (
    <header className={classes.header}>
      <nav className={classes.navbar}>
        <Hamburger clicked={toggleCategoryBar} />

        <div className={classes.logo}>
          <a href="/">SHIPYARD</a>
        </div>

        <div className={classes.spacer} />

        <div className={classes.input}>
          <input type="text" placeholder="search" />
        </div>

        <div className={classes.spacer} />

        <div className={classes.navItems}>
          <ul>
            <li>
              <a href="/">My Orders</a>
            </li>
            <li>
              <a href="/">Login</a>
            </li>
            <li>
              <a href="/">Cart</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Toolbar;
