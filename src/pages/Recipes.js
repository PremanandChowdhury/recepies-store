import React, { Component } from "react";
import RecipeList from "../components/RecipeList";
import Search from "../components/Search";
import { recipeData } from "../data/tempList";

export default class Recipes extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    recipes: recipeData,
    search: "",
    url: `https://www.food2fork.com/api/search?key=${process.env.REACT_APP_API_KEY}`,
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
  };

  render() {
    return (
      <>
        <Search
          search={this.state.search}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <RecipeList recipes={this.state.recipes} />
      </>
    );
  }
}
