import React, { Component } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

export default class Error extends Component {
  render() {
    return (
      <Header title="404" styleClass="default-hero">
        <h2 className="text-light text-uppercase">No search results</h2>
        <Link to="/" className="btn btn-secondary btn-lg text-uppercase mt-3">
          return to home
        </Link>
      </Header>
    );
  }
}
