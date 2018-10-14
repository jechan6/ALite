import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import { incrementViews, createVehicle} from './util/search_util';
document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    window.incrementViews = incrementViews;
    window.createVehicle = createVehicle;
    ReactDOM.render(<Root />, root);
});