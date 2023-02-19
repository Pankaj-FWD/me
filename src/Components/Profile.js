import React from "react";
import ProfileImage from "./ProfileImage";
import { Container, Row, Col } from "reactstrap";
import ProfileDetails from "./ProfileDetails";
import { Name } from "../Constants";
class Profile extends React.Component {
  render() {
    return (
      <div className="profile">
        <Row>
          <Col>
            <ProfileImage />
          </Col>
        </Row>
        <Row>
          <Col>
          
            <h1 className="name"> {Name} </h1>
            <h4 className="name">Full stack developer (MERN)</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <ProfileDetails />
            <div class="footer-icons">
            <a
                href="https://wa.me/+918174979703"
                className="socialicon"
              >
                <i class="fab fa-whatsapp"></i>
              </a>
              <a
                href="https://instagram.com/pankajpal._?igshid=ZmZhODViOGI="
                className="socialicon"
              >
                <i class="fab fa-instagram"></i>
              </a>
              <a
                href="https://twitter.com/pankaj_pal096"
                className="socialicon"
              >
                <i class="fab fa-twitter"></i>
              </a>
              <a
                className="socialicon"
                href="https://www.linkedin.com/in/pankaj-fwd/"
              >
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/Pankaj-FWD/" className="socialicon">
                <i class="fab fa-github"></i>
              </a>
            </div>
            <a href="https://drive.google.com/file/d/1uWfwFZfGjYjanfkqtVHEektdf3sjMXxO/view?usp=sharing" target="_blank" download>
      <button className="DownloadButton">
        Please click here to download Resume
      </button>
    </a>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Profile;
