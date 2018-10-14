import React from 'react';
import {withRouter} from 'react-router-dom';

class SearchIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        e.preventDefault();
        
        this.props.history.push({
            pathname: `/search_results/${this.props.vehicle.vin}`,
            state: { vehicle: this.props.vehicle }
        });
    }
    render() {
        const vehicle = this.props.vehicle;
        return(
            <div>
                <div className="resultItem">    
                    <img src={vehicle.thumbnail_url} alt="Vehicle Image"/>
                    <div className="vehicle-info" onClick={this.handleClick}>
                        <h1 className="vehicleModel">{`${vehicle.year} ${vehicle.make} ${vehicle.model}`}</h1>
                        <h1>{vehicle.price}</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(SearchIndexItem);