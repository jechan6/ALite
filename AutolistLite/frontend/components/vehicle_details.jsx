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
        // const rootstate = localStorage.getItem('rootState');
        // if (this.props.location.state && this.props.location.state.results) {
        //     this.setState({ results: this.props.location.state.results });
        //     localStorage.setItem("rootState", JSON.stringify(this.props.location.state.results));
        // } else if (rootstate) {
        //     this.setState({ results: JSON.parse(rootstate) });
        // } 
        const rootstate = localStorage.getItem("vehicle");
        if(this.props.location.state && this.props.location.state.vehicle) {
            localStorage.setItem("vehicle", JSON.stringify(this.props.location.state.vehicle));
            this.setState({ vehicle: this.props.location.state.vehicle});
        } else if (rootstate) {
            this.setState({ results: JSON.parse(rootstate) });
            // localStorage.setItem("vehicle", JSON.stringify(this.props.location.state.vehicle));
        }
        // this.setState({vehicle: JSON.parse(rootstate)});
        incrementViews(JSON.parse(rootstate).vin).then(res => {
            this.setState({views: res.views_count});
        })
    }
    render() {
        const vehicle = this.state.vehicle;
        return(
            <div className="detail-container">
                <div className="vehicle-detail">
                    <img src={vehicle.thumbnail_url} alt="Vehicle Image" />
                    <div className="detail-info">
                        <h1>{`${vehicle.year} ${vehicle.make} ${vehicle.model}`}</h1>
                        <h1>{vehicle.price}</h1>
                        <h1 className="views">Views: {this.state.views}</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default VehicleDetails;