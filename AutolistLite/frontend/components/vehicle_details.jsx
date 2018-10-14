import React from 'react';
import { incrementViews } from '../util/search_util';
class VehicleDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            views: 0,
            vehicle: ""
        }
    }
    componentDidMount() {
        const rootstate = localStorage.getItem("vehicle");
        if (!rootstate) {
            localStorage.setItem("vehicle", JSON.stringify(this.props.location.state.vehicle));
        }
        this.setState({vehicle: JSON.parse(rootstate)});
        incrementViews(JSON.parse(rootstate).vin).then(res => {
            this.setState({views: res.views_count});
        })
    }
    render() {
        const vehicle = this.state.vehicle;
        return(
            <div>
                <div>
                    <img src={vehicle.thumbnail_url} alt="Vehicle Image" />
                    <div>
                        <h1>{`${vehicle.year} ${vehicle.make} ${vehicle.model}`}</h1>
                        <h1>{vehicle.price}</h1>
                    </div>
                </div>
                <h1 className="views">Views: {this.state.views}</h1>
            </div>
        )
    }
}

export default VehicleDetails;