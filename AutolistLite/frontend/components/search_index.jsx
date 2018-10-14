import React from 'react';
import SearchIndexItem from './search_index_item';
class SearchIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = { results: []};
    }
    componentDidMount() {
        const rootstate = localStorage.getItem('rootState');
        console.log(this.props.location.state);
        if (this.props.location.state && this.props.location.state.results) {
            this.setState({ results: this.props.location.state.results });
            localStorage.setItem("rootState", JSON.stringify(this.props.location.state.results));
        } else if(rootstate) {
            console.log(JSON.parse(rootstate));
            this.setState({results: JSON.parse(rootstate)});
        } 
    }

    render() {
        if(this.state.results.length <= 0) return null;
        return(
            <div className="container">
                <div className="vehicleIndex">
                    {this.state.results.map((data, idx) => (
                        <SearchIndexItem vehicle={data} key={idx}/>
                    ))}
                </div>
            </div>
        )
    }
};
export default SearchIndex;