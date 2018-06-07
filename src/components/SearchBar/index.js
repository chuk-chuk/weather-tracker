import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchItems } from '../../reducers/thunk/thunkAction';
import { searchQuery } from '../../reducers/searchQuery/searchQuery';
import './styles.css';

export class SearchBar extends Component {

  onSearchChange = e => {
    this.props.searchQuery(e.target.value)
  }

  handleSubmit = e => {
    e.preventDefault()
    if (!this.props.cityName){
      return;
    }
    this.props.fetchItems(this.props.cityName)
    e.target.reset()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className='SearchBar__search'>
        <input type='search'
          className='SearchBar__input'
          placeholder='Search for...'
          onChange={this.onSearchChange} />
        <button type='submit' className='SearchBar__button'>Show</button>
      </form>
    )
  }
}

const mapStateToProps = state => {
  return {
    cityName: state.searchQuery || ''
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchItems: city => dispatch(fetchItems(city)),
    searchQuery: location => dispatch(searchQuery(location))
  }
}

SearchBar.propTypes = {
    searchQuery: PropTypes.func.isRequired,
    dispatch: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
