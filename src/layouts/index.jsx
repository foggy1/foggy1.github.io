import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import Link from 'gatsby-link'
import UserLinks from '../components/UserLinks/UserLinks'
import Img from 'gatsby-image'
import './extend_bulma.scss'
import './index.css'

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
    let active = ''
    if (currentPath === "") {
      title = "Home";
    } else if (currentPath === "tags/") {
      title = "Tags";
    } else if (currentPath === "categories/") {
      title = "Categories";
    } else if (currentPath === "about/") {
      title = "About";
    } else if (currentPath === 'blog/') {
      title = 'Blog'
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
    const currentPath = this.props.location.pathname
    return (
      <div className='main'>
        <Helmet>
          <title>{`${config.siteTitle} |  ${this.getLocalTitle()}`}</title>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        <section className="hero is-primary is-bold">
          <div className='hero-head'>
            <nav className="navbar" role="navigation" aria-label="main navigation">
              <div className="navbar-brand">
                <Link to="/">
                  <Img
                    className='image is-64x64' 
                    alt={'Austin Lanari avatar'}
                    title={'Austin Lanari'}
                    resolutions={this.props.data.avatar.resolutions}
                    // src={image}
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 50,
                      height: 64,
                      width: 64,
                      marginLeft: 13,
                      marginTop: 13
                    }}
                  />
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
          <div className="hero-foot">
            <nav className="tabs">
              <div className="container">
                <ul>
                  <li><Link to='/'>Portfolio</Link></li>
                  <li><Link to='/blog'>Blog</Link></li>
                  <li><Link to='/about'>About</Link></li>
                </ul>
              </div>
            </nav>
          </div>
        </section>
        <div style={{flex: 1}}>
          {children()}
        </div>
        <footer className="footer">
          <div className="container">
            <div className="content has-text-centered">
              <p>
                Website content is licensed <a style={{color: 'green'}} href="http://creativecommons.org/licenses/by-nc-sa/4.0/"> CC BY NC SA 4.0</a> Austin Lanari.
                Website code is licensed <a style={{color: 'green'}} href="http://opensource.org/licenses/mit-license.php">MIT</a>.
              </p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
query GatsbyImageSampleQuery {
    avatar: imageSharp(id: { regex: "/austin/"}) {
    resolutions(width: 128, height: 128) {
      base64
      aspectRatio
      width
      height
      src
      srcSet
      srcWebp
      srcSetWebp
      originalName
    }
  }
  }
`