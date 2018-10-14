import React from 'react';
import { incrementViews } from '../util/search_util';
class VehicleDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            views: 0
        }
    }
    componentDidMount() {
        console.log(this.props.location.state.vehicle.vin);
        incrementViews(this.props.location.state.vehicle.vin).then(res => {
            console.log(res);
            this.setState({views: res.views_count})
        })
    }
    render() {
        return(
            <div>
                <h1>Views: {this.state.views}</h1>
            </div>
        )
    }
}

export default VehicleDetails;