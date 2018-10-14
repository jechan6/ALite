import React from 'react';
import SearchIndexItem from './search_index_item';
class SearchIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: this.props.location.state.results
        }
    }
    render() {
        return(
            <div>
                {this.state.results.map((data, idx) => (
                    <SearchIndexItem vehicle={data} key={idx}/>
                ))}
            </div>
        )
    }
};
export default SearchIndex;