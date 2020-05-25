import React from 'react';
import classes from './BtToolbar.module.css';

const navbar = () => {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light fixed-top ${classes.bg}`}
    >
      <div className="container">
        <a className={`${classes.brand}`} href="/">
          Shipyard
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="form-inline my-2 my-lg-0 mr-auto">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
          &nbsp;&nbsp;&nbsp;
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className={`nav-link ${classes.navItem}`} href="/">
                Orders
              </a>
            </li>
            <li>
              <a className={`nav-link nav-item ${classes.navItem}`} href="/">
                <i className="fas fa-sign-out-alt" /> Logout
              </a>
            </li>
            <li className="nav-item active">
              <a className={`nav-link ${classes.navItem}`} href="/">
                Cart
              </a>
            </li>
            &nbsp;
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default navbar;

// return (
//   <Navbar
//     collapseOnSelect
//     expand="lg"
//     expanded
//     variant="dark"
//     className={classes.bg}
//   >
//     <Navbar.Brand href="#home">SHIPYARD</Navbar.Brand>
//     <Form inline>
//       <FormControl type="text" placeholder="Search" className="mr-sm-2" />
//       <Button variant="outline-light">Search</Button>
//     </Form>
//     <Nav className="mr-auto">
//       <Nav.Link href="#home" className={classes.navItem}>
//         Orders
//       </Nav.Link>
//       <Nav.Link href="#features" className={classes.navItem}>
//         Login
//       </Nav.Link>
//       <Nav.Link href="#pricing" className={classes.navItem}>
//         Cart
//       </Nav.Link>
//     </Nav>
//   </Navbar>
// );
