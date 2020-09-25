import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import up from '../img/up.svg';
import down from '../img/down.svg';

const MediosPago = ({ medios }) => {
    const [indexAbierto, setIndexAbierto] = useState(0);
    const prepararTexto = function (texto) {
        var lineas = texto.split("$r");
        return <div className="texto">
            {lineas.map((unaLinea, index) => (
                <p key={index} >{unaLinea}</p>
            ))
        }
        </div>
    };
    return <section className="medios-pago section">
        <div className="tituloh1">Medios de Pago</div>
        {medios.map((unMedio, index) => (
            <div key={index} className={(index === indexAbierto ? "abierto un-medio-pago" : "cerrado un-medio-pago") + ((index === medios.length - 1) ? " ultima" : "")}>
                <div className="columns" >
                    <div className="titulo column  is-half">
                        <a className={"vermasmenos " + (index === indexAbierto ? "arriba" : "abajo")} src={index === indexAbierto ? up : down} alt={index === indexAbierto ? "Ocultar detalles de este medio de pago" : "Ver  detalles de este medio de pago"} onClick={() => index === indexAbierto ? setIndexAbierto(-1) : setIndexAbierto(index)} >&nbsp;</a>
                    </div>
                    <div className="titulo column  is-half">
                        <Img fixed={unMedio.imagen.childImageSharp.fixed} alt={unMedio.titulo} />
                    </div>

                </div>
                {prepararTexto(unMedio.texto)}
            </div>

        ))}
    </section >;
};

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
