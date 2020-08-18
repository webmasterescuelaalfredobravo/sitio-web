import React from 'react';
import PropTypes from 'prop-types';
import fondoTablet from '../img/fondo-naranja_1024x768.svg';
import fondoDesktop from '../img/fondo-naranja_1280x800.svg';
import fondoMobile from '../img/fondo-naranja_360x740.svg';

const NotaCorta = ({ notas }) => (
    <section className="nota-corta section">
        {notas.map((unaNota, index) => (
            <div key={index} className="nota-wrapper">
                <img src={fondoTablet} alt="x" className={'fondo-tablet'} />
                <img src={fondoMobile} alt="x" className={'fondo-mobile'} />
                <img src={fondoDesktop} alt="x" className={'fondo-desktop'} />
                <div className="titulo has-text-weight-bold">{unaNota.titulo}</div>
                <div className="texto">
                    <div key={index} className="texto-wrapper">
                        {unaNota.texto}
                    </div>
                    {unaNota.link &&
                        <div className="link-wrapper">
                            <a className="leer-mas" href={unaNota.link} >Leer más</a>
                        </div>}

                </div>


            </div>
        ))}
    </section>
);

NotaCorta.propTypes = {
    notas: PropTypes.arrayOf(
        PropTypes.shape({
            titulo: PropTypes.string,
            texto: PropTypes.string,
            link: PropTypes.string,
        })
    ),
};

export default NotaCorta;
