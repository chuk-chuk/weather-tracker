import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchItems } from '../../reducers/thunk/thunkAction';
import { ITEMS_STATE } from "../../reducers/error/error";
import { CITY } from '../../const';
import BarGraph from '../BarGraph';
import LoadingSpinner from '../Loader';
import './styles.css';

export class Chart extends Component {
   
    componentDidMount() {this.props.fetchItems(CITY)}

    render() {
        if(this.props.isLoading) {
            return <LoadingSpinner/>
        }

        return (
        <div>
            <BarGraph weatherData={this.props.apiData} city={this.props.city}/>
        </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        apiData: state.apiData.list || [],
        city: state.apiData.city.name || '',
        isLoading: state.itemsState === ITEMS_STATE.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchItems: location => dispatch(fetchItems(location))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chart)
