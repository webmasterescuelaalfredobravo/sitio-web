import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SlideInterno from '../components/SlideInterno';
import Nota from '../components/Nota';

import fondoTablet from '../img/fondo-verde_1024x768.svg';
import fondoDesktop from '../img/fondo-verde_1280x800.svg';
import fondoMobile from '../img/fondo-verde_360x740.svg';
export const EscuelaPageTemplate = ({
  slide,
  notas
}) => (
    <div>
      <div className="margin-top-0 pagina-escuela">
        <div className="encabezado"  >
          <div className="encabezado-wrapper"  >
            <img src={fondoTablet} alt="x" className={'fondo-tablet'} />
            <img src={fondoMobile} alt="x" className={'fondo-mobile'} />
            <img src={fondoDesktop} alt="x" className={'fondo-desktop'} />
            <div className="tituloh2">La Escuela</div>
          </div>
        </div>
        <div name="novedades" id="novedades"  >
          <SlideInterno slides={slide} />
        </div>
        <div name="notas" id="notas">
          <Nota notas={notas} />
        </div>
      </div>
    </div>
  );

EscuelaPageTemplate.propTypes = {
  slide: PropTypes.array,
  notas: PropTypes.array,
};

const EscuelaPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <div className="pag-escuela">
      <Layout>
        <EscuelaPageTemplate
          slide={frontmatter.slide}
          notas={frontmatter.notas}
        />
      </Layout>
    </div>
  );
};

EscuelaPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default EscuelaPage;

export const pageQuery = graphql`
  query EscuelaPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "escuela-page" } }) {
      frontmatter {
        slide {
          titulo
          texto
          fecha
          link
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
        notas {
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
          alineado
          link
          fecha
        }
      }
    }
  }
`;
