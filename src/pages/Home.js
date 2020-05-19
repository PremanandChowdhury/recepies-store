import React, { Component } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <Header title="Tasty recipes">
        <Link
          to="recipes"
          className=" btn btn-secondary btn-lg text-uppercase mt-3"
        >
          Search recipes
        </Link>
      </Header>
    );
  }
}
