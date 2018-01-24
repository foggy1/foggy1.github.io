import React, { Component, Fragment } from "react";
import graphql from './graphql.svg'
import lambda from './aws-lambda.svg'
import css from './css-3.svg'
import gatsby from './gatsby.svg'
import html from './html-5.svg'
import javascript from './javascript.svg'
import rails from './rails.svg'
import react from './react.svg'
import redux from './redux.svg'
import ruby from './ruby.svg'
import sass from './sass.svg'

class Portfolio extends Component {
  render() {
    return (
      <Fragment>
              <section className='hero is-light is-small'>
          <div className='hero-body'>
            <div className='container has-text-centered'>
              <p>I work for a small startup in a full-stack role where I help acquire data, build the API to surface it, the infrastructure to host it, and the cross-platform mobile app to deliver it to users.

              </p>
            </div>
          </div>
        </section>
        <section className="hero is-dark">
          <div className='hero-body'>
            <div className="container has-text-centered">
              <h2 className="subtitle">
                I know stuff.
              </h2>
              <div className='columns is-mobile is-centered'>
                <div className='column is-three-quarters-mobile is-narrow is-mobile'>
                  <ul className='columns is-multiline is-mobile'>
                    <li className='column is-one-third-mobile'>
                      <img style={{margin: 'auto'}}
                        alt='javascript'
                        className='image is-48x48'
                        src={javascript}
                      />
                    </li>
                    <li className='column is-one-third-mobile'>
                      <img style={{margin: 'auto'}}
                        alt='ruby'
                        className='image is-48x48'
                        src={ruby}
                      />
                    </li>
                    <li className='column is-one-third-mobile'>
                      <img style={{margin: 'auto'}}
                        alt='react'
                        className='image is-48x48'
                        src={react}
                      />
                    </li>
                    <li className='column is-one-third-mobile'>
                      <img style={{margin: 'auto'}}
                        alt='rails'
                        className='image is-48x48'
                        src={rails}
                      />
                    </li>
                    <li className='column is-one-third-mobile'>
                      <img style={{margin: 'auto'}}
                        alt='html'
                        className='image is-48x48'
                        src={html}
                      />
                    </li>
                    <li className='column is-one-third-mobile'>
                      <img style={{margin: 'auto'}}
                        alt='redux'
                        className='image is-48x48'
                        src={redux}
                      />
                    </li>
                    <li className='column is-one-third-mobile'>
                      <img style={{margin: 'auto'}}
                        alt='css'
                        className='image is-48x48'
                        src={css}
                      />
                    </li>
                    <li className='column is-one-third-mobile'>
                      <img style={{margin: 'auto'}}
                        alt='lambda'
                        className='image is-48x48'
                        src={lambda}
                      />
                    </li>
                    <li className='column is-one-third-mobile'>
                      <img style={{margin: 'auto'}}
                        alt='gatsby'
                        className='image is-48x48'
                        src={gatsby}
                      />
                    </li>
                    <li className='column is-one-third-mobile'>
                      <img style={{margin: 'auto'}}
                        alt='graphql'
                        className='image is-48x48'
                        src={graphql}
                      />
                    </li>
                    <li className='column is-one-third-mobile'>
                      <img style={{margin: 'auto'}}
                        alt='sass'
                        className='image is-48x48'
                        src={sass}
                      />
                    </li>
                  </ul>
                </div>
              </div>
                <a href='/documents/Austin_Lanari_Resume.pdf' class="button is-primary is-rounded is-hidden-desktop">
                  <span>Download Résumé</span>
                </a>
            </div>
          </div>
        </section>
        <section className='hero is-light'>
          <div className='hero-body'>
            <div className='container has-text-centered'>
              <h1 className='title'>List of projects coming soon!</h1>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Portfolio;
