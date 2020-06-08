import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import classes from './Toolbar.module.css';
import Hamburger from '../../components/UI/Hamburger';

const Toolbar = (props) => {
  const { toggleCategoryBar, isAuthenticated } = props;

  const navItems = isAuthenticated ? (
    <ul>
      <li>
        <NavLink to="/user/profile">My Profile</NavLink>
      </li>
      <li>
        <NavLink to="/user/orders">My Orders</NavLink>
      </li>
      <li>
        <NavLink to="/user/addresses">My Addresses</NavLink>
      </li>
      <li>
        <NavLink to="/logout">Logout</NavLink>
      </li>
      <li>
        <NavLink to="/cart">Cart</NavLink>
      </li>
    </ul>
  ) : (
    <ul>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink to="/signup">Signup</NavLink>
      </li>
    </ul>
  );

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

        <div className={classes.navItems}>{navItems}</div>
      </nav>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.login.accessToken != null
  };
};

export default connect(mapStateToProps)(Toolbar);
