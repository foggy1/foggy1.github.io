import React, { Component } from "react";
import Helmet from "react-helmet";
import Portfolio from "../components/Portfolio/Portfolio";
import config from "../../data/SiteConfig";

class PortfolioPage extends Component {
  render() {
    return (
      <div className="portfolio-container">
        <Helmet title={`${config.siteTitle}`} />
        <Portfolio />
      </div>
    );
  }
}

export default PortfolioPage;
