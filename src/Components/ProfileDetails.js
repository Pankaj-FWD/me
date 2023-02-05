import { Table } from "reactstrap";
import React from "react";
import * as Constants from "../Constants";
export default class ProfileDetails extends React.Component {
  render() {
    return (
      <>
        <div className="name">
          <h5>Contact Details -</h5>
          <h5>
            <a href="mailto:pankajpal096@gmail.com">pankajpal096@gmail.com</a>
          </h5>
          <h5> +91-8174979703</h5>
          <h5>Noida - INDIA</h5>
        </div>
      </>
    );
  }
}
