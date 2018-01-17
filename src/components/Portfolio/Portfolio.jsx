import React, { Component } from "react";
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

class About extends Component {
  render() {
    console.log(graphql)
    return (
      <section className="hero is-dark">
        <div className='hero-body'>
          <div class="container has-text-centered">
            <h1 class="title">
              Title
            </h1>
            <h2 class="subtitle">
              Subtitle
            </h2>
            <div className='columns is-mobile is-centered'>
              <div className='column is-three-quarters-mobile is-narrow is-mobile'>
                <ul className='columns is-multiline is-mobile'>
                  <li className='column is-one-third-mobile'>
                    <img style={{margin: 'auto'}}
                      className='image is-48x48'
                      src={graphql}
                    />
                  </li>
                  <li className='column is-one-third-mobile'>
                    <img style={{margin: 'auto'}}
                      className='image is-48x48'
                      src={ruby}
                    />
                  </li>
                  <li className='column is-one-third-mobile'>
                    <img style={{margin: 'auto'}}
                      className='image is-48x48'
                      src={javascript}
                    />
                  </li>
                  <li className='column is-one-third-mobile'>
                    <img style={{margin: 'auto'}}
                      className='image is-48x48'
                      src={redux}
                    />
                  </li>
                  <li className='column is-one-third-mobile'>
                    <img style={{margin: 'auto'}}
                      className='image is-48x48'
                      src={react}
                    />
                  </li>
                  <li className='column is-one-third-mobile'>
                    <img style={{margin: 'auto'}}
                      className='image is-48x48'
                      src={css}
                    />
                  </li>
                  <li className='column is-one-third-mobile'>
                    <img style={{margin: 'auto'}}
                      className='image is-48x48'
                      src={html}
                    />
                  </li>
                  <li className='column is-one-third-mobile'>
                    <img style={{margin: 'auto'}}
                      className='image is-48x48'
                      src={gatsby}
                    />
                  </li>
                  <li className='column is-one-third-mobile'>
                    <img style={{margin: 'auto'}}
                      className='image is-48x48'
                      src={lambda}
                    />
                  </li>
                  <li className='column is-one-third-mobile'>
                    <img style={{margin: 'auto'}}
                      className='image is-48x48'
                      src={rails}
                    />
                  </li>
                  <li className='column is-one-third-mobile'>
                    <img style={{margin: 'auto'}}
                      className='image is-48x48'
                      src={sass}
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
