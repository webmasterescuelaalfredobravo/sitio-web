import React from 'react';
import PropTypes from 'prop-types';
/* las notas pueden estar alineadas a derecha o izquierda, segun la foto vaya a izq o der.
   en modo mobile, el titulo va arriba de la foto, asi que por eso mostramos un elemento
   de titulo que solo se visualiza en modo mobile
   Para las columnas alineadas a derecha se usa la clase is-reverse-mobile para que en modo
   mobile muestre siempre primero la imagen y debajo el texto
*/
const Nota = ({ notas }) => (
    <section className={"notas section"}>
        {notas.map((unaNota, index) => (
            <div key={index} className={"una-nota " + unaNota.alineado + ((index === notas.length -1) ? " ultima" : "")}>
                <div className="solo-mobile column">
                    {unaNota.titulo && <p className="titulo">{unaNota.titulo} </p>}
                </div>
                {unaNota.alineado === "izquierda" &&
                    <div className="columns">
                        <div className="column">
                            <img src={unaNota.imagen.publicURL} alt={unaNota.titulo} />
                        </div>
                        <div className="column">
                            {unaNota.titulo && <p className="titulo no-mobile">{unaNota.titulo} </p>}
                            {unaNota.texto && <div className="texto">{unaNota.texto}</div>}
                        </div>
                    </div>}
                {unaNota.alineado === "derecha" &&
                    <div className="columns is-reverse-mobile ">
                        <div className="column">
                            {unaNota.titulo && <p className="titulo no-mobile">{unaNota.titulo} </p>}
                            {unaNota.texto && <div className="texto">{unaNota.texto}</div>}
                        </div>
                        <div className="column">
                            <img src={unaNota.imagen.publicURL} alt={unaNota.titulo} />
                        </div>
                    </div>
                }
            </div>
        ))}
    </section>
);

Nota.propTypes = {
    notas: PropTypes.arrayOf(
        PropTypes.shape({
            imagen: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
            texto: PropTypes.string,
            titulo: PropTypes.string,
            alineado: PropTypes.string,
        })
    ),
};

export default Nota;
