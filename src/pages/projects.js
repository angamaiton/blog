import React, { Component } from 'react';
import Img from 'gatsby-image';

import { BlogLink } from '../components/Link';
import { Date, PostTitle, PostExcerpt, ImgWrapper } from '../components/Post';

class Projects extends Component {
  render() {
    const { data } = this.props;
    const projects = data.allMarkdownRemark.edges;

    return (
      <section>
        <h2>Projects</h2>
        {projects.map(project => {
          const title = project.node.frontmatter.title || project.node.path;
          return (
            <div key={project.node.frontmatter.path}>
              <PostTitle>
                <BlogLink to={project.node.frontmatter.path}>
                  {project.node.frontmatter.title}
                </BlogLink>
              </PostTitle>
              <ImgWrapper>
                <Img
                  sizes={
                    project.node.frontmatter.featuredImage.childImageSharp.sizes
                  }
                />
              </ImgWrapper>
            </div>
          );
        })}
      </section>
    );
  }
}

export default Projects;

export const pageQuery = graphql`
  query ProjectsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/(/src/projects)/.*\\.md$/" } }
    ) {
      edges {
        node {
          frontmatter {
            path
          }
          frontmatter {
            title
            featuredImage {
              childImageSharp {
                sizes(maxWidth: 500) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`;
