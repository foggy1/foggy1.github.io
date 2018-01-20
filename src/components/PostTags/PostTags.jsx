import React, { Component } from "react";
import _ from "lodash";
import Link from "gatsby-link";

class PostTags extends Component {
  render() {
    const { tags } = this.props;
    return (
      <div className="container">
        {tags &&
          tags.map(tag => (
            <Link
              className={'button is-primary is-rounded'}
              key={tag}
              style={{ textDecoration: "none", marginRight: 5, marginBottom: 5 }}
              to={`/tags/${_.kebabCase(tag)}`}
            >
              {tag}
            </Link>
          ))}
      </div>
    );
  }
}

export default PostTags;
