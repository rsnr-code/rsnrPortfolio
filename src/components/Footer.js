import React, { Component } from "react";

class Footer extends Component {
  render() {


    return (
      <footer>
        <div className="">
          <div className="py-5 text-center">
            <div className="container">
              <small>
                Copyright &copy;{" "}
                {this.props.sharedBasicInfo
                  ? this.props.sharedBasicInfo.name
                  : "???"}
              </small>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
