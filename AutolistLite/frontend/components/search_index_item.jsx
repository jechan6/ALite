import React from 'react';

class SearchIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const vehicle = this.props.vehicle;
        //year make model
        return(
            <div>
                <div className="resultItem">    
                    <img src={vehicle.thumbnail_url} alt="Vehicle Image"/>
                    <h1 className="vehicleModel">{`${vehicle.year} ${vehicle.make} ${vehicle.model}`}</h1>
                </div>
            </div>
        )
    }
}

export default SearchIndexItem;