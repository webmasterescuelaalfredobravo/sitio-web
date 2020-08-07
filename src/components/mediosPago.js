import React , { useState } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import up from '../img/up.svg';
import down from '../img/down.svg';

const MediosPago = ({ medios }) => {
    const [indexAbierto, setIndexAbierto] = useState(-1);

    return <section className="medios-pago section">
        <div className="tituloh1">Medios de Pago</div>
        {medios.map((unMedio, index) => (
            <div key={index} className={index === indexAbierto ? "abierto un-medio-pago" : "cerrado un-medio-pago"}>
                <div className="columns" >
                    <div className="titulo column  is-half">
                        <img className="vermasmenos" src={index === indexAbierto ? up : down}  alt={index === indexAbierto ? "Ocultar detalles de este medio de pago" : "Ver  detalles de este medio de pago"} onClick={() => index === indexAbierto ? setIndexAbierto(-1) : setIndexAbierto(index)} />
                        <div className="tituloh2">{unMedio.titulo}</div>
                    </div>
                    <Img fixed={unMedio.imagen.childImageSharp.fixed} alt={unMedio.titulo} className="column is-half" />
                </div>
                <div className="texto">{unMedio.texto}</div>
            </div>

        ))}
    </section >;
}

MediosPago.propTypes = {
    medios: PropTypes.arrayOf(
        PropTypes.shape({
            imagen: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
            texto: PropTypes.string,
            titulo: PropTypes.string,
        })
    ),
};

export default MediosPago;
