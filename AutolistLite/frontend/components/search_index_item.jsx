import React from 'react';

class SearchIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }
    handleClick(e) {
        e.preventDefault();
        console.log("HELLO");
    }
    render() {
        const vehicle = this.props.vehicle;
        //year make model
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

export default SearchIndexItem;