import React, { Component } from "react";

class Experience extends Component {
  render() {
    return (
      <section id="resume" className="pb-5">
        <div className="">
          <div className="">
            <h1 className="section-title" style={{ color: "white" }}>
              <span className="text-black" style={{ textAlign: "center" }}>
                Contact Me
              </span>
            </h1>
            <div className="social-links text-center">

        <span key="gmail">
            <a href="mailto:rishadnero@gmail.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-google" style={{color: "white", fontSize: "1.5em", margin: "15px"}}></i>
            </a>
          </span>

          <span key="github">
            <a href="https://github.com/rsnr-code" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github" style={{color: "white", fontSize: "1.5em",  margin: "15px"}}></i>
            </a>
          </span>

          <span key="linkedin">
            <a href="https://www.linkedin.com/in/rishadnero/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin" style={{color: "white", fontSize: "1.5em",  margin: "15px"}}></i>
            </a>
          </span>

          <span key="twitter">
            <a href="https://twitter.com/rsnrcode" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter" style={{color: "white", fontSize: "1.5em",  margin: "10px"}}></i>
            </a>
          </span>
        
        </div>
          </div>
        </div>
        
        </section>
    );
  }
}

export default Experience;
