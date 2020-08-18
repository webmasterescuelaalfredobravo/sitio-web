import React from 'react';

import logo from '../img/logotipo-bravo.svg';
import facebook from '../img/facebook.svg';
import instagram from '../img/instagram.svg';


const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer-bravo  ">
        <div className="columns is-reverse-mobile">
          <div className="column is-vcentered institucional">
            <div className="content is-vcentered text-wrapper">
              <div className="linea-texto has-text-weight-bold txt-p6">Instituto Técnico</div>
              <div className="linea-texto has-text-weight-bold txt-p6">Maestro Alfredo Bravo</div>
              <div className="linea-texto txt-p6">Cooperativa de Trabajo</div>
              <div className="linea-texto txt-p6">Maestro Alfredo Bravo Ltda.</div>
              <div className="linea-texto txt-p6">2020</div>
            </div>
          </div>


          <div className="logo  column">
            <div className="content is-vcentered has-text-centered">
              <img
                src={logo}
                alt="Instituto Técnico Maestro Alfredo Bravo"
                style={{ width: '14em', height: '10em', margin: 'auto' }}
              />
            </div>
          </div>


          <div className="column is-one-third-tablet social">
            <div className="content is-vcentered has-text-centered">
              <div className="content centrado has-text-weight-bold txt-p6">
                Nuestras Redes
              <a title="facebook" href="https://facebook.com">
                  <img
                    src={facebook}
                    alt="Facebook"
                  />
                </a>
                <a title="instagram" href="https://instagram.com">
                  <img
                    src={instagram}
                    alt="Instagram"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer >
    );
  }
};

export default Footer;
