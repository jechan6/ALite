import React from 'react';
import axios from "axios";
import {searchApi} from '../util/search_util';
class HomeIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            searchResults: []};
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        searchApi(e.target.price_min.value, e.target.price_max.value)
            .then(res => {
                this.props.history.push({
                    pathname: '/search_results',
                    state: {results: res.records}
                });
            });
    }
    render() {
        return <div className="form-container">
            <form className="search-form" onSubmit={this.handleSubmit}>
              <label>
                <input name="price_min" placeholder="Enter Price Min..." type="text" />
              </label>
              <label>
                <input name="price_max" placeholder="Enter Price Max..." type="text" />
              </label>
              <button>Search</button>
            </form>
          </div>;
    }
};

export default HomeIndex;