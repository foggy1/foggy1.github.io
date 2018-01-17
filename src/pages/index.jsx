import React, { Component, Fragment } from "react";
import Helmet from "react-helmet";
import Portfolio from "../components/Portfolio/Portfolio";
import config from "../../data/SiteConfig";

class PortfolioPage extends Component {
  render() {
    return (
      <Fragment>
        <Helmet title={`${config.siteTitle}`} />
        <Portfolio />
      </Fragment>
    );
  }
}

export default PortfolioPage;
