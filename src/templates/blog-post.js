import React, { Component } from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import { PostDate, PostTitle, PostExcerpt } from '../components/Post';

class BlogPostTemplate extends Component {
  render() {
    const { data } = this.props;
    const post = data.markdownRemark;
    const siteTitle = data.site.siteMetadata.title;

    return (
      <div>
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
        <PostTitle>{post.frontmatter.title}</PostTitle>
        <PostDate>{post.frontmatter.date}</PostDate>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr />
      </div>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
