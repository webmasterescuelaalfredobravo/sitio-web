import React from 'react';
import Layout from '../../components/Layout';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MapaUbicacion from '../../components/MapaUbicacion';
import fondoTablet from '../../img/fondo-amarillo_1024x385.svg';
import fondoDesktop from '../../img/fondo-amarillo_1280x800.svg';
import fondoMobile from '../../img/fondo-amarillo_360x740.svg';
import iconoPointer from '../../img/icono-contacto.svg';

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => toast.success('Su mensaje ha sido enviado', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined
      }))
      .catch((error) => toast.error('Se produjo un error. No se pudo enviar el mensaje.', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined
      }));

  };

  render() {
    return (
      <div className="pag-contact">
        <Layout>
          <div className="margin-top-0 pagina-contacto">

            <div className="encabezado"  >
              <div className="encabezado-wrapper"  >
                <img src={fondoTablet} alt="x" className={'fondo-tablet'} />
                <img src={fondoMobile} alt="x" className={'fondo-mobile'} />
                <img src={fondoDesktop} alt="x" className={'fondo-desktop'} />
                <div className="tituloh2 has-text-weight-bold">Contacto</div>
                <img src={iconoPointer} alt="x" className={'icono-pointer'} />
                <div className="domicilio">
                  <div className="titulop3">Dermidio Loza 252 - Barrio Loza</div>
                  <div className="titulop3">Río Ceballos - Córdoba</div>
                  <div className="titulop3">Teléfono +54 3543 45-0534</div>
                </div>
              </div>
            </div>

            <div className="separador">
              <div className="separador-interno">
              </div>
            </div>

            <section className="contacto section">
              <div className="container">
                <div className="content">
                  <div className={'has-text-centered mb-5'}>
                    <div className={'has-text-weight-bold txt-p6'}>Dejanos tu mensaje</div>
                  </div>
                  <form
                    name="contact"
                    method="post"
                    action="/contact/thanks/"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={this.handleSubmit}
                  >
                    {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                    <input type="hidden" name="form-name" value="contact" />
                    <div hidden>
                      <label>
                        Don’t fill this out:{' '}
                        <input name="bot-field" onChange={this.handleChange} />
                      </label>
                    </div>
                    <div className="field is-horizontal">
                      <div className="field-body">
                        <div className="field">
                          <div className="control">
                            <div className="select destinatario">
                              <select
                                className="input"
                                name={'destinatario'}
                                onChange={this.handleChange}
                                id={'destinatario'}
                                required={true}
                              >
                                <option value="">Seleccione Destinatario</option>
                                <option value="RL">Representante Legal</option>
                                <option value="AD">Administración</option>
                                <option value="DI">Directora</option>
                                <option value="PI">Pre-inscripciones</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="field">
                          <div className="control">
                            <input
                              className="input"
                              type={'email'}
                              name={'email'}
                              onChange={this.handleChange}
                              id={'email'}
                              required={true}
                              placeholder="Email"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="field">
                      <label className="label" htmlFor={'message'}>

                      </label>
                      <div className="control">
                        <textarea
                          className="textarea"
                          name={'message'}
                          onChange={this.handleChange}
                          id={'message'}
                          required={true}
                          placeholder="Mensaje"
                        />
                      </div>
                    </div>
                    <div className="field has-text-centered">
                      <button className="button is-rounded" type="submit">
                        Enviar
                  </button>
                    </div>
                  </form>
                </div>
              </div>
              <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable={false}
                pauseOnHover
              />
            </section>

            <div className="field has-text-centered">
              < MapaUbicacion></MapaUbicacion>
            </div>
          </div>
        </Layout>
      </div>
    );
  }
}
