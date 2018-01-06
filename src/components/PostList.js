import React, { Component } from 'react';

import { BlogLink } from '../components/Link';
import { Date, PostTitle, PostExcerpt } from '../components/Post';

class BlogList extends Component {
  render() {
    const { posts } = this.props;
    return (
      <section>
        {posts.map(post => {
          if (post.node.path !== '/404/') {
            const title = post.node.frontmatter.title || post.node.path;
            return (
              <div key={post.node.frontmatter.path}>
                <PostTitle>
                  <BlogLink to={post.node.frontmatter.path}>
                    {post.node.frontmatter.title}
                  </BlogLink>
                </PostTitle>
                <Date>{post.node.frontmatter.date}</Date>
                <PostExcerpt
                  dangerouslySetInnerHTML={{ __html: post.node.excerpt }}
                />
              </div>
            );
          }
        })}
      </section>
    );
  }
}

export default BlogList;
