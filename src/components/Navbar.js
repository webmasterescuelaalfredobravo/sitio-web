import React from 'react';
import { Link } from 'gatsby';
import imgbg01 from '../img/elem-menu-01.svg';
import imgbg02 from '../img/elem-menu-02.svg';
const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: '',
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
            navBarActiveClass: 'is-active',
          })
          : this.setState({
            navBarActiveClass: '',
          });
      }
    );
  };

  render() {
    return (
      <nav
        className={`navbar fijo-arriba la-burger-${this.state.navBarActiveClass}`}
        role="navigation"
        aria-label="main-navigation"
      >

        <div className="container">

          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              Instituto Técnico Maestro Alfredo Bravo
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="img-bg-02">
              <img
                src={imgbg02}
                alt="bg02"
              />
            </div>

            <div className="navbar-end has-text-centered">
              <Link className="navbar-item" to="/escuela/" className={"navbar-item "} activeClassName={"activa"} partiallyActive={true}>
                <span>Escuela</span>
              </Link>

              <Link className="navbar-item" to="/administracion/" className={"navbar-item "} activeClassName={"activa"} partiallyActive={true}>
                <span>Administración</span>
              </Link>

              <Link className="navbar-item" to="/contact/" className={"navbar-item "} activeClassName={"activa"} partiallyActive={true}>
                <span>Contacto</span>
              </Link>
            </div>


            <div className="img-bg-01">
              <img
                src={imgbg01}
                alt="bg01"
              />
            </div>

          </div>


        </div>
      </nav>
    );
  }
};

export default Navbar;
