import React from 'react';
import { Link } from 'gatsby';

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
            <div className="navbar-end has-text-centered">
              <Link className="navbar-item" to="/escuela/" className={"navbar-item " } activeClassName={"activa"} partiallyActive={true}>
              <span>La Escuela</span>
              </Link>
              <Link className="navbar-item" to="/escuela#novedades" className={"navbar-item nivel-2"}>
                Novedades
              </Link>
              <Link className="navbar-item" to="/escuela#notas" className={"navbar-item nivel-2"}>
                Nuestro Proyecto
              </Link>
              <Link className="navbar-item" to="/administracion/" className={"navbar-item "}  activeClassName={"activa"} partiallyActive={true}>
              <span>Administración</span>
              </Link>
              <Link className="navbar-item" to="/administracion#codigo-de-pago" className={"navbar-item nivel-2"}>
                Código de Pago
              </Link>
              <Link className="navbar-item" to="/administracion#medios-pago" className={"navbar-item nivel-2"}>
                Medios de Pago
              </Link>
              <Link className="navbar-item" to="/administracion#novedades" className={"navbar-item nivel-2"}>
                Novedades
              </Link>
              <Link className="navbar-item" to="/contact/" className={"navbar-item "}  activeClassName={"activa"} partiallyActive={true}>
              <span>Contacto</span>
              </Link>
            </div>

          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
