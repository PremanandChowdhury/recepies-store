import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Recipe extends Component {
  render() {
    const {
      publisher,
      title,
      source_url,
      recipe_id,
      image_url,
    } = this.props.recipe;
    return (
      <div className="col-10 mx-auto col-md-8 col-lg-4 my-3 ">
        <div className="card" style={{ height: "100%" }}>
          {/* card image start*/}
          <img
            src={image_url}
            style={{ height: "14rem" }}
            alt="recipe"
            className="img-card-top"
          />
          {/* card image end*/}

          {/* card body start*/}
          <div className="card-body text-capitalize">
            <h6>{title}</h6>
            <h6 className="text-warning text-slanted">
              provided by {publisher}
            </h6>
          </div>
          {/* card body end*/}

          {/* card footer start*/}
          <div className="card-footer">
            {/* This link will show the individual recipe page */}
            <Link
              to={`/recipes/${recipe_id}`}
              className="btn btn-primary text-capitalize"
            >
              details
            </Link>

            {/* This link will show the recipe in the source link */}
            <a
              href={source_url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success mx-2 text-capitalize"
            >
              recipe url
            </a>
          </div>
          {/* card footer end */}
        </div>
      </div>
    );
  }
}
