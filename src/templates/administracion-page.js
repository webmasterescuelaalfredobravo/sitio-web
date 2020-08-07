import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import MediosPago from '../components/mediosPago';
import SlideInterno from '../components/SlideInterno';
import CodigoDePago from '../components/CodigoDePago';

import fondoTablet from '../img/fondo-celeste_1024x768.svg';
import fondoDesktop from '../img/fondo-celeste_1280x800.svg';
import fondoMobile from '../img/fondo-celeste_360x740.svg';
export const AdministracionPageTemplate = ({
  slide,
  mediospago,
  csvcodpago
}) => (
    <div>
      <div className="margin-top-0 pagina-administracion">
        <div className="encabezado"  >
          <div className="encabezado-wrapper"  >
            <img src={fondoTablet} alt="x" className={'fondo-tablet'} />
            <img src={fondoMobile} alt="x" className={'fondo-mobile'} />
            <img src={fondoDesktop} alt="x" className={'fondo-desktop'} />
            <div className="tituloh2">Administración</div>
          </div>
        </div>
        <div name="codigo-de-pago" id="codigo-de-pago">
          <CodigoDePago csv={csvcodpago} />
        </div>
        <div name="medios-de-pago" id="medios-de-pago">
          <MediosPago medios={mediospago} />
        </div>
        <div name="novedades" id="novedades">
          <SlideInterno slides={slide} />
        </div>
      </div>
    </div>
  );

AdministracionPageTemplate.propTypes = {
  slide: PropTypes.array,
  csvcodpago: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  mediospago: PropTypes.array,
};

const AdministracionPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <AdministracionPageTemplate
        slide={frontmatter.slide}
        csvcodpago={frontmatter.csvcodpago}
        mediospago={frontmatter.mediospago}
      />
    </Layout>
  );
};

AdministracionPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default AdministracionPage;

export const pageQuery = graphql`
  query AdministracionPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "administracion-page" } }) {
      frontmatter {
        slide {
          titulo
          texto
          fecha
          imagenfondo {
            childImageSharp {
              fixed(width: 336, height: 336) {
                ...GatsbyImageSharpFixed
              }
            }
            extension
            publicURL
          }
        }
        csvcodpago {
          extension
          publicURL
        }
        mediospago {
          texto
          imagen {
            childImageSharp {
              fixed(width: 300, height: 90) {
                ...GatsbyImageSharpFixed
              }
            }
            extension
            publicURL
          }
          titulo
        }
      }
    }
  }
`;
