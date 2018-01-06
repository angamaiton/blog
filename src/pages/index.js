import React, { Component } from 'react';
import Helmet from 'react-helmet';
import PostList from '../components/PostList';

class Index extends Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;

    return (
      <section>
        <h2>Blog</h2>
        <Helmet title={siteTitle} />
        <PostList posts={data.allMarkdownRemark.edges} />
      </section>
    );
  }
}

export default Index;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          frontmatter {
            path
            date(formatString: "MMMM DD, YYYY")
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
