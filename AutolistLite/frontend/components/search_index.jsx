import React from 'react';
import SearchIndexItem from './search_index_item';
class SearchIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = { results: []};
    }
    componentDidMount() {
        const rootstate = localStorage.getItem('rootState');
        if(rootstate) {
            this.setState(JSON.parse(rootstate));
        } else {
            this.setState({ results: this.props.location.state.results})
            localStorage.setItem("rootState", JSON.stringify(this.props.location.state.results));
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