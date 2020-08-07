import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import error from '../img/error-01.svg';
import ok from '../img/ok-01.svg';

const CodigoDePago = ({ csv }) => {
    const [mensaje, setMensaje] = useState("");
    // estados: 0: inicial (boton en amarillo con mensaje inicial) , 1: error, 2:correcto el codigo ingresado
    const [estado, setEstado] = useState(0);
    const textAreaRef = useRef(null);
    console.log(`este es el csv: ${csv}`);

    //const csvfake = { publicURL: "http://localhost/ALUMNOS.csv" };

    const [codigoPago, setCodigoPago] = useState("");
    const [documentoEstudiante, setDocumentoEstudiante] = useState("");
    const manejarFocusEnInput = function () {
        setEstado(0);
        setDocumentoEstudiante("");
        setMensaje("");
    };

    const manejarSubmitForm = function (e) {
        // ver: https://github.github.io/fetch/
        if (window && window.location) {
            const fileUrl = (csv.publicURL.startsWith("/")) ? csv.publicURL : "/" + csv.publicURL;

            fetch(`/.netlify/functions/busqueda-codigo-pago?documento=${documentoEstudiante}&url=${window.location.protocol + "//" + window.location.host + fileUrl}`)
            //fetch(`http://localhost:8888/.netlify/functions/busqueda-codigo-pago?documento=${documentoEstudiante}&url=${csvfake.publicURL}`)
                .then(response => {
                    switch (response.status) {
                        case 200:
                            // Examine the text in the response
                            response.json().then(function (data) {
                                setDocumentoEstudiante(data.codigo);
                                setCodigoPago(data.codigo);
                                setMensaje("¡Código copiado!");
                                setEstado(2);
                            });
                            break;
                        default:
                            setEstado(1);
                            setMensaje("Código inválido, intente nuevamente.");
                            break;
                    }

                }, function onReject(error) {
                    console.log(error);
                    setEstado(1);
                    setMensaje("No se pudo obtener el código.");
                });
        }
        e.preventDefault();
    };
    const manejarChangeEnInput = function (event) {
        setDocumentoEstudiante(event.target.value);
    };

    useEffect(() => {
        copiarAlPortapapeles();
    }, [codigoPago]);

    /**
     * copiar codigo al portapapeles.
     * https://www.jasoft.org/Blog/post/copiado-de-texto-al-portapapeles-con-javascript-metodo-clasico.aspx
     * https://stackoverflow.com/questions/39501289/in-reactjs-how-to-copy-text-to-clipboard
     * https://stackoverflow.com/questions/58801947/copying-a-text-in-react-via-creating-a-hidden-input
     */
    const copiarAlPortapapeles = function () {
        var dummy = document.createElement("textarea");
        document.body.appendChild(dummy);
        dummy.value = textAreaRef.current.value;
        dummy.select();
        document.execCommand("copy");
        document.body.removeChild(dummy);
        /*
        var codigoACopiar = document.getElementById('codigo-de-pago-input');
        var seleccion = document.createRange();
        seleccion.selectNodeContents(codigoACopiar);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(seleccion);
        document.execCommand('copy');
        window.getSelection().removeRange(seleccion);
        console.log("copiado al portapapeles!");
        */
    };

    return (
        <section className={"codigo-pago section estado-" + estado}>
            <div className="titulo">Genera aquí tu código de pago</div>
            <p>El código de Pago Electrónico es único para cada estudiante. Es anual, es decir, será el mismo todo el año. Lo podrá utilizar para abonar en los distintos medios de pago.</p>
            <form onSubmit={manejarSubmitForm} className="columns" >
                <div className="column campo-entrada">
                    <input id="codigo-de-pago-input" type="text" name="codigo-de-pago-input" placeholder="Ingrese aquí el DNI del estudiante"
                        value={documentoEstudiante}
                        onChange={manejarChangeEnInput}
                        onFocus={manejarFocusEnInput}
                    />
                    <input id="codigo-de-pago-input-hidden" type="hidden" value={codigoPago} ref={textAreaRef} />
                </div>
                <div className="column boton-submitir">
                    <input type="submit" value="OK" className="boton-ok" />
                </div>

            </form>
            <div className="mensaje">
                <img src={error} alt="error" className="icono-status error" />
                <img src={ok} alt="ok" className="icono-status ok" />
                {mensaje}
            </div>
        </section >
    );
};

CodigoDePago.propTypes = {
    csv: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
};

export default CodigoDePago;