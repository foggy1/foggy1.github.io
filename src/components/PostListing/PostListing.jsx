import React from "react";
import Link from "gatsby-link";
import moment from 'moment'
class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.frontmatter.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      });
    });
    return postList;
  }
  render() {
    const postList = this.getPostList();
    return (
      <div className='section'>
        <div className='container'>
          <h1 className='title'>Blog</h1>
          <ul className='columns is-multiline'>
            {/* Your post list here. */
            postList.map(post => (
              <li className='column is-half'><Link to={post.path} key={post.title}>
                <div className='box'>
                  <span>
                    <h1>{post.title}</h1>
                    <small>{moment(post.date, "DD/MM/YYYY").format("MMMM Do YYYY")}</small>
                  </span>
                  <p>{post.excerpt}</p>
                </div>
              </Link></li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default PostListing;
