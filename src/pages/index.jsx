import React from "react";
import Helmet from "react-helmet";
import PostListing from "../components/PostListing/PostListing";
import UserLinks from '../components/UserLinks/UserLinks'
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import bulma from 'bulma'

class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <div className="index-container">
        <Helmet title={config.siteTitle} />
        <SEO postEdges={postEdges} />
        <section className="hero is-primary is-bold">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                {config.siteTitle}
              </h1>
              <h2 className="subtitle">
                {config.siteDescription}
              </h2>
            </div>
          </div>
        </section>
        <PostListing postEdges={postEdges} />
      </div>
    );
  }
}

export default Index;

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;
