import React, { Component } from "react";
import { Follow } from "react-twitter-widgets";

class UserInfo extends Component {
  render() {
    const { userTwitter } = this.props.config;
    const { expanded } = this.props;
    return (
      <a
        href={`https://twitter.com/${userTwitter}`}
        // username={userTwitter}
        // options={{ count: expanded ? true : "none" }}
        style={{backgroundColor: 'rgb(29, 161, 242)'}}
        target='_blank'
        rel='noopener'
        className='button'
      > 
        <span class="icon">
          <i style={{color: 'white'}} class="fab fa-twitter"></i>
        </span>
        <span style={{color: 'white'}}>Follow on Twitter</span>
      </a>
    );
  }
}

export default UserInfo;
