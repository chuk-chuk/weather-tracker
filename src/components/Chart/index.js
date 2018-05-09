import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchItems } from '../thunkAction';
import './styles.css';

class Chart extends Component {

    componentDidMount() {
        this.props.fetchItems('http://5826ed963900d612000138bd.mockapi.io/items');
    }

    render(){
        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }
        if(this.props.isLoading) {
            return <p>Loading…</p>;
        }
        return (
            <ul>
                {this.props.payload.map((item) => (
                    <li key={item.id}>
                        {item.label}
                    </li>
                ))}
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        payload: state.itemsFetchDataSuccess,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsAreLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchItems: (url) => dispatch(fetchItems(url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chart);