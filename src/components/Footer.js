import React from 'react';

import logo from '../img/logotipo-bravo.svg';
import facebook from '../img/facebook.svg';
import instagram from '../img/instagram.svg';
import telegram from '../img/social/telegram.svg';

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

          <div className="column no-mobile social">
            <div className="content is-vcentered">
              <div className="content redes has-text-weight-bold txt-p6  is-vcentered">
                Nuestras Redes
               <a   title="facebook" href="https://facebook.com/InstitutoAlfredoBravo/" target="_blank" className="ml-1">
                  <img
                    src={facebook}
                    alt="Facebook"
                  />
                </a>
               <a    title="instagram" href="https://instagram.com/institutoalfredobravo/"  target="_blank" className="ml-1">
                  <img
                    src={instagram}
                    alt="Instagram"
                  />
                </a>
                <a    title="telegram" href="https://telegram.me/instalfredobravo"  target="_blank" className="ml-1">
                <img
                  src={telegram}
                  alt="Telegram"
                />
              </a>
              </div>
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

          <div className="column is-vcentered solo-mobile social">
              <div className="content is-vcentered text-wrapper width-100">
                <div className=" has-text-centered has-text-weight-bold txt-p6 width-100">
                    Nuestras Redes
                </div>
                <div className="redes has-text-weight-bold txt-p6 width-100  mt-1">
                    <a   title="facebook" href="https://facebook.com/InstitutoAlfredoBravo/" target="_blank" className="ml-1">
                        <img
                        src={facebook}
                        alt="Facebook"
                        />
                    </a>
                    <a    title="instagram" href="https://instagram.com/institutoalfredobravo/"  target="_blank" className="ml-1">
                        <img
                        src={instagram}
                        alt="Instagram"
                        />
                    </a>
                    <a    title="telegram" href="https://telegram.me/instalfredobravo"  target="_blank" className="ml-1">
                        <img
                        src={telegram}
                        alt="Telegram"
                        />
                    </a>
              </div>
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
