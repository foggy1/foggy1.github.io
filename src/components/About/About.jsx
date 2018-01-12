import React, { Component } from "react";
import './About.css'

class About extends Component {
  render() {
    return (
      <section className="section">
        <div className='container'>
          <h1 className='title'>About</h1>
          <div className='content'>
            <p>I'm <strong>Austin Lanari</strong>. It says it right up there.
             <a target='_blank' href='https://fuckupsomecomics.com/'> I like comics</a> and I like coding. Again, up there.</p>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
