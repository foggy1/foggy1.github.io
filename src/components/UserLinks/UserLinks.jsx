import React, { Component } from "react";

const UserLinks = props => {
  const getLinkElements = () => {
    const { userLinks } = props.config;
    const { labeled } = props;
    return userLinks.map(link => (
      <a target='_blank' className='navbar-item' href={link.url} key={link.label}>
        <span class="icon is-small">
        <i className={link.iconClassName} />
        </span>
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
