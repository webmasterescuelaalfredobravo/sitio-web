import React from 'react';
import PropTypes from 'prop-types';
import fondoDesktop from '../img/fondo-naranja_1280x50.svg';
import fondoMobile from '../img/fondo-naranja_1280x70.svg';

const NotaCorta = ({ notas }) => (
    <section className="nota-corta section">
        {notas.map((unaNota, index) => (
            <div key={index} className="nota-wrapper">

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
                <img src={fondoDesktop} alt="x" className={'fondo-tablet'} />
                <img src={fondoMobile} alt="fondomobile" className={'fondo-mobile'} />
                <img src={fondoDesktop} alt="x" className={'fondo-desktop'} />

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
