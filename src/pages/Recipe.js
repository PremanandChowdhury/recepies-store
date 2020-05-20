import React, { Component } from "react";
import { recipeData } from "../data/tempDetails";
import { Link } from "react-router-dom";

export default class Recipe extends Component {
  constructor(props) {
    super(props);
    const id = this.props.match.params.id;
    // recipe state
    this.state = {
      recipe: recipeData, // This is for the fetching the local data
      // recipe: {}, // when we make an AJAX call
      id,
      loading: false,
    };
  }

  // AJAX Call start for the fetching the data from the API
  // async componentDidMount() {
  //   const url = `https://www.food2fork.com/api/get?key=${process.env.REACT_API_KEY}&rId=${this.state.id}`;
  //   try {
  //     const response = await fetch(url);
  //     const responseData = await response.json();
  //     this.setState({
  //       recipe: responseData.recipe,
  //       loading: false,
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // AJAX Call ends

  render() {
    const {
      image_url,
      ingredients,
      publisher,
      publisher_url,
      source_url,
      title,
    } = this.state.recipe;

    // loading condition
    if (this.state.loading) {
      return (
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-6 my-3">
              <h2 className="text-uppercase text-orange text-center">
                loading recipe...
              </h2>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="container my-5">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            {/* Link for goind back to the list page start */}
            <Link
              to="/recipes"
              className="text-capitalize btn btn-warning mb-5"
            >
              back to recipe list
            </Link>
            {/* Link for goind back to the list page end */}
            {/* recipe image start */}

            <img
              src={image_url}
              className="d-block w-100"
              style={{ maxHeight: "30rem" }}
              alt="recipe"
            />
          </div>
          {/* recipe image end */}

          {/* recipe info start */}
          <div className="col-10 mx-auto col-md-6 my-3">
            <h6 className="text-uppercase">{title}</h6>
            <h6 className="text-warning text-capitalize text-slanted">
              provided by {publisher}
            </h6>
            {/* publisher webpage start */}
            <a
              href={publisher_url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary mt-2 text-capitalize"
            >
              publisher webpage
            </a>
            {/* publisher webpage end */}

            {/* recipe url start */}
            <a
              href={source_url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success mt-2 mx-2 text-capitalize"
            >
              recipe url
            </a>
            {/* recipe url end */}

            {/* ingredients start */}
            <ul className="list-group mt-4">
              <h2 className="mt-3 mb-4">Ingredients</h2>

              {ingredients?.map((item, index) => {
                return (
                  <li key={index} className="list-group-item text-slanted">
                    {item}
                  </li>
                );
              })}
            </ul>
            {/* ingredients end */}
          </div>
          {/* recipe info end */}
        </div>
      </div>
    );
  }
}
