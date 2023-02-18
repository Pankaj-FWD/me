import React from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col } from "reactstrap";
import Profile from "./Components/Profile";
import CustomTabPane from "./Components/CustomTabPane";

import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";
import Footer from "./Components/Footer";

class App extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col lg={3}>
         
            <Profile />
            <a href="https://drive.google.com/file/d/1uWfwFZfGjYjanfkqtVHEektdf3sjMXxO/view?usp=sharing" target="_blank" download>
      <button className="DownloadButton">
        Please click here to download Resume
      </button>
    </a>
          </Col>
          <Col lg={9}>
          
            <CustomTabPane />
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
