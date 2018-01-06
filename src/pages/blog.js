import React, { Component } from 'react';
import Helmet from 'react-helmet';
import PostList from '../components/PostList';

class Blog extends Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;

    return (
      <section>
        <h2>Blog</h2>
        <Helmet title={siteTitle} />
        <PostList posts={data.allMarkdownRemark.edges} />
      </section>
    );
  }
}

export default Blog;

export const pageQuery = graphql`
  query BlogQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/(/src/pages)/.*\\.md$/" } }
    ) {
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
