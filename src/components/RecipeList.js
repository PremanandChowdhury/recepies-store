import React, { Component } from "react";
import Recipe from "./Recipe";

export default class RecipeList extends Component {
  render() {
    const { recipes } = this.props;
    return (
      <>
        <div className="container py-5 ">
          {/* title start */}
          <div className="row">
            <div className="col-10 mx-auto col-md-8 text-uppercase text-center mb-3">
              <h1 className="text-slanted">Recipe List</h1>
            </div>
          </div>
          {/* title end */}

          <div className="row text-success">
            {recipes.map((recipe) => (
              <Recipe key={recipe.recipe_id} recipe={recipe} />
            ))}
          </div>
        </div>
      </>
    );
  }
}
