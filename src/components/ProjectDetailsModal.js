import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import AwesomeSlider from "react-awesome-slider";
import AwesomeSliderStyles from "../scss/light-slider.scss";
import "react-awesome-slider/dist/custom-animations/scale-out-animation.css";
import { BsGithub } from "react-icons/bs";
class ProjectDetailsModal extends Component {
  render() {
    if (this.props.data) {
      const technologies = this.props.data.technologies;
      const images = this.props.data.images;
      var title = this.props.data.title;
      var titleImage = this.props.data.titleImage;
      var description = this.props.data.description;
      var why = this.props.data.why;
      var learn = this.props.data.learn;
      var hardest = this.props.data.hardest;
      var better = this.props.data.better;
      var url = this.props.data.url;
      var repo = this.props.data.repo;
      if (this.props.data.technologies) {
        var tech = technologies.map((icons, i) => {
          return (
            <li className="list-inline-item mx-3" key={i}>
              <span>
                <div className="text-center">
                  <i className={icons.class} style={{ fontSize: "300%" }}>
                    <p className="text-center" style={{ fontSize: "30%" }}>
                      {icons.name}
                    </p>
                  </i>
                </div>
              </span>
            </li>
          );
        });
        if (this.props.data.images) {
          var img = images.map((elem, i) => {
            return <div key={i} data-src={elem} />;
          });
        }
      }
    }
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modal-inside"
      >
        <span onClick={this.props.onHide} className="modal-close">
          <i className="fas fa-times fa-3x close-icon"></i>
        </span>
        <div className="col-md-12">
          <div className="col-md-10 mx-auto" style={{ paddingBottom: "50px" }}>
            <div className="slider-tab" >
              <span
                className="iconify slider-iconfiy"
                data-icon="emojione:red-circle"
                data-inline="false"
                style={{ marginLeft: "5px" }}
              ></span>{" "}
              &nbsp;{" "}
              <span
                className="iconify slider-iconfiy"
                data-icon="twemoji:yellow-circle"
                data-inline="false"
              ></span>{" "}
              &nbsp;{" "}
              <span
                className="iconify slider-iconfiy"
                data-icon="twemoji:green-circle"
                data-inline="false"
              ></span>
            </div>
            <AwesomeSlider
              cssModule={[AwesomeSliderStyles]}
              animation="scaleOutAnimation"
              className="slider-image"
            >
              {img}
            </AwesomeSlider>
          </div>
          <div className="col-md-10 mx-auto">
            <h3 style={{ padding: "5px 5px 0 5px" }}>
             
              {url ? (
               
                <div className="text-center">
                  <a href={url}  target="_blank"
                  rel="noopener noreferrer"
                  className="link-href">

                    
                     <img src={titleImage} alt="" style={{ maxWidth: "15em", maxHeight: "3em"}}/>
                  </a>
                  
                 <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-href"
                >
                  <i
                    className="fas fa-external-link-alt"
                    style={{ marginLeft: "1em" }}
                  ></i>
                </a>
                 <a
                 href={repo}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="link-href"
               >
                <BsGithub style={{ marginLeft: "10px", fontSize: "1.3em" }} />
                 
               </a> 
                </div>
                
              ) : null}
            </h3>
            <p className="modal-description">{description}</p>
            <p className="modal-description mb-1"><strong>Why did I build this app?</strong></p>
            <p className="modal-description">{why}</p>
            <p className="modal-description mb-1"><strong>What did I learn from building it?</strong></p>
            <p className="modal-description">{learn}</p>
            <p className="modal-description mb-1"><strong>What was the hardest part of building it?</strong></p>
            <p className="modal-description">{hardest}</p>
            <p className="modal-description mb-1"><strong>How can I make it better in the future?</strong></p>
            <p className="modal-description" style={{marginBottom: "2em"}}>{better}</p>
            <div className="col-md-12 text-center">
              <ul className="list-inline mx-auto">{tech}</ul>
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}

export default ProjectDetailsModal;
