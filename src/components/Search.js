import React, { Component } from "react";

export default class Search extends Component {
  render() {
    // destructure the props
    const { handleChange, handleSubmit, search } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5 text-center ">
            {/* heading start */}
            <h1 className="text-slanted text-capitalize">
              search recipes with{" "}
              <strong className="text-orange">Food Recipe Villa</strong>
            </h1>
            {/* heading end */}

            <form className="mt-4">
              <label htmlFor="search" className="text-capitalize">
                search recipes separated with comma
              </label>
              {/* search bar start */}
              <div className="input-group">
                <input
                  type="text"
                  name="search"
                  placeholder="chicken, paneer, soup"
                  value={search}
                  onChange={handleChange}
                  className="form-control"
                />
                <div className="input-group-append">
                  <button
                    type="submit"
                    className="input-group-text bg-primary text-white"
                    onClick={handleSubmit}
                  >
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </div>
              {/* search bar end */}
            </form>
          </div>
        </div>
      </div>
    );
  }
}
