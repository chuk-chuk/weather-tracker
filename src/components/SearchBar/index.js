import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchItems } from '../../reducers/thunk/thunkAction';
import { searchBarQuery } from '../../reducers/query/query';
import './styles.css';

class SearchBar extends Component {

  onSearchChange = e => {
    this.props.searchBarQuery(e.target.value)
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.fetchItems(this.props.searchText)
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
    searchText: state.location || ''
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchItems: location => dispatch(fetchItems(location)),
    searchBarQuery: location => dispatch(searchBarQuery(location))
  }
}

SearchBar.propTypes = {
    searchText: PropTypes.string.isRequired,
    dispatch: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
