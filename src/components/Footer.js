import React from 'react';

import logo from '../img/logotipo-bravo.svg';
import facebook from '../img/facebook.svg';
import instagram from '../img/instagram.svg';


const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer-bravo  ">
        <div className="columns is-reverse-mobile">
          <div className="logo  column no-mobile is-2">
            <div className="content is-vcentered has-text-centered">
              <img
                src={logo}
                alt="Instituto Técnico Maestro Alfredo Bravo"
                style={{ width: '14em', height: '10em', margin: 'auto' }}
              />
            </div>
          </div>

          <div className="column is-vcentered institucional">
            <div className="content is-vcentered text-wrapper">
              <div className="linea-texto has-text-weight-bold txt-p6">Instituto Técnico</div>
              <div className="linea-texto has-text-weight-bold txt-p6">Maestro Alfredo Bravo</div>
              <div className="linea-texto txt-p6">Cooperativa de Trabajo</div>
              <div className="linea-texto txt-p6">Maestro Alfredo Bravo Ltda.</div>
              <div className="linea-texto txt-p6">2020</div>
            </div>
          </div>


          <div className="logo  column solo-mobile">
            <div className="content is-vcentered has-text-centered">
              <img
                src={logo}
                alt="Instituto Técnico Maestro Alfredo Bravo"
                style={{ width: '14em', height: '10em', margin: 'auto' }}
              />
            </div>
          </div>


          <div className="column is-one-third-tablet ir-arriba-wrapper is-1">
            <div className="content is-vcentered  ">
              <a className="ir-arriba" href="#top-bravo" ></a>
            </div>
          </div>
        </div>
      </footer >
    );
  }
};

export default Footer;
