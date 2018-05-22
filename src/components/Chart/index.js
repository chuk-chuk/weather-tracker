import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchItems } from '../../reducers/thunk/thunkAction';
import BarGraph from '../BarGraph';
import './styles.css';

class Chart extends Component {

  componentDidMount() {this.props.fetchItems('London')}

  render() {
    if (this.props.hasErrored) {
        return <p>Sorry! There was an error loading the items</p>
    }
    if(this.props.isLoading) {
        return <p>Loading data, please be patient…</p>
    }

    return (
      <div>
        <BarGraph weatherData={this.props.items}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
    return {
        items: state.results.list || [],
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsAreLoading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchItems: location => dispatch(fetchItems(location))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chart)
