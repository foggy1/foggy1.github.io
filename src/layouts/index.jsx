import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import Link from 'gatsby-link'
import UserLinks from '../components/UserLinks/UserLinks'
import "./index.css";

export default class MainLayout extends React.Component {
  getLocalTitle() {
    function capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const pathPrefix = config.pathPrefix ? config.pathPrefix : "/";
    const currentPath = this.props.location.pathname
      .replace(pathPrefix, "")
      .replace("/", "");
    let title = "";
    if (currentPath === "") {
      title = "Home";
    } else if (currentPath === "tags/") {
      title = "Tags";
    } else if (currentPath === "categories/") {
      title = "Categories";
    } else if (currentPath === "about/") {
      title = "About";
    } else if (currentPath.indexOf("posts")) {
      title = "Article";
    } else if (currentPath.indexOf("tags/")) {
      const tag = currentPath
        .replace("tags/", "")
        .replace("/", "")
        .replace("-", " ");
      title = `Tagged in ${capitalize(tag)}`;
    } else if (currentPath.indexOf("categories/")) {
      const category = currentPath
        .replace("categories/", "")
        .replace("/", "")
        .replace("-", " ");
      title = `${capitalize(category)}`;
    }
    return title;
  }
  render() {
    const { children } = this.props;
    return (
      <div>
        <Helmet>
          <title>{`${config.siteTitle} |  ${this.getLocalTitle()}`}</title>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        <section className="hero is-primary is-medium is-bold">
          <div className='hero-head'>
                  <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">
              Home
            </Link>
            <UserLinks config={config} />
          </div>
        </nav>
          </div>
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                {config.siteTitle}
              </h1>
              <h2 className="subtitle">
                {config.siteDescription}
              </h2>
            </div>
          </div>
        </section>

        {children()}
      </div>
    );
  }
}
