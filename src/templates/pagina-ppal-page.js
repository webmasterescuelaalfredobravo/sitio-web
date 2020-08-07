import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SlidePrincipal from '../components/SlidePrincipal';
import NotaCorta from '../components/NotaCorta';

export const PaginaPpalPageTemplate = ({
  slideppal,
  notacorta,
}) => (
    <div>
      <div className="margin-top-0">
        <SlidePrincipal slides={slideppal} />
        <NotaCorta notas={notacorta} />
      </div>
    </div>
  );

PaginaPpalPageTemplate.propTypes = {
  slideppal: PropTypes.array,
  notacorta: PropTypes.array,
};

const PaginaPpalPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <PaginaPpalPageTemplate
        slideppal={frontmatter.slideppal}
        notacorta={frontmatter.notacorta}
      />
    </Layout>
  );
};

PaginaPpalPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default PaginaPpalPage;

export const pageQuery = graphql`
  query PaginaPpalPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "pagina-ppal-page" } }) {
      frontmatter {
        slideppal {
          texto
          imagenfondo {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
            extension
            publicURL
          }
          link
          alineado
        }
        notacorta {
          titulo
          texto
          link
        }
      }
    }
  }
`;
