import React, { Component } from "react";
import "./UserLinks.css";
import FontAwesome from 'react-fontawesome'

class UserLinks extends Component {
  getLinkElements() {
    const { userLinks } = this.props.config;
    const { labeled } = this.props;
    return userLinks.map(link => (
      <a className='buttons' href={link.url} key={link.label}>
        <FontAwesome size='3x' name={link.iconClassName} href={link.url} key={link.label} />
        <span>{labeled ? link.label : ""}</span>
      </a>
    ));
  }
  render() {
    const { userLinks } = this.props.config;
    if (!userLinks) {
      return null;
    }
    return <div className="user-links">{this.getLinkElements()}</div>;
  }
}

export default UserLinks;
