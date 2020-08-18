import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SlidePrincipal from '../components/SlidePrincipal';
import NotaCorta from '../components/NotaCorta';

export const IndexPageTemplate = ({
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

IndexPageTemplate.propTypes = {
  slideppal: PropTypes.array,
  notacorta: PropTypes.array,
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <div className="pag-inicial">
      <Layout>
        <IndexPageTemplate
          slideppal={frontmatter.slideppal}
          notacorta={frontmatter.notacorta}
        />
      </Layout>
    </div>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
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
