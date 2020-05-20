import React, { Component } from "react";
import RecipeList from "../components/RecipeList";
import Search from "../components/Search";
import { recipeData } from "../data/tempList";

export default class Recipes extends Component {
  constructor(props) {
    super(props);
    this.getRecipes = this.getRecipes.bind(this);
  }

  // STATE
  state = {
    recipes: recipeData,
    search: "",
    url: `https://www.food2fork.com/api/search?key=${process.env.REACT_APP_API_KEY}`,

    base_url: `https://www.food2fork.com/api/search?key=${process.env.REACT_APP_API_KEY}`,
    query: "&q=",
    error: "",
  };

  // getRecipes starts here
  // function for fetching the recipes for homepage

  async getRecipes() {
    try {
      const data = await fetch(this.state.url);
      const jsonData = await data.json();

      if (jsonData.recipes.length === 0) {
        this.setState({
          error: "match not found, try again please",
        });
      } else {
        this.setState({
          recipes: jsonData.recipes,
          error: "",
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  // getRecipes ends here

  componentDidMount() {
    this.getRecipes();
  }

  // ON CHANGE
  handleChange = (e) => {
    this.setState({
      search: e.target.value,
    });
  };

  // ON SUBMIT
  handleSubmit = (e) => {
    e.preventDefault();
    // AJAX Call for the searched items
    const { base_url, query, search } = this.state;
    this.setState(
      {
        url: `${base_url}${query}${search}`,
        search: "",
      },
      () => this.getRecipes()
    );
  };

  render() {
    return (
      <>
        <Search
          search={this.state.search}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        {/* Conditional rendering */}

        {this.state.error ? (
          <section>
            <div className="row">
              <div className="col">
                <h2 className="text-orange text-center text-uppercase mt-5">
                  {this.state.error}
                </h2>
              </div>
            </div>
          </section>
        ) : (
          <RecipeList recipes={this.state.recipes} />
        )}
      </>
    );
  }
}
