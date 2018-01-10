import React, { Component } from "react";
import FontAwesome from 'react-fontawesome'

const UserLinks = props => {
  const getLinkElements = () => {
    const { userLinks } = props.config;
    const { labeled } = props;
    return userLinks.map(link => (
      <a target='_blank' className='navbar-item' href={link.url} key={link.label}>
        <FontAwesome name={link.iconClassName} href={link.url} key={link.label} />
        <span>{labeled ? link.label : ""}</span>
      </a>
    ));
  }
  const { userLinks } = props.config;
  if (!userLinks) {
    return null;
  }
  return <React.Fragment>{getLinkElements()}</React.Fragment>
}

export default UserLinks;
