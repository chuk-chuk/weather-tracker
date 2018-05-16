import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchItems } from '../../reducers/thunk/thunkAction';
import searchBarResult from '../../reducers/query/query';
import './styles.css';

class SearchBar extends Component {

  handleInputChange = (input) => {
    this.props.searchBarResult(input)
  }
  
  render() {
    console.log('Ss', this.state);
      return (
        <form>
          <input  placeholder='Search for...'
            ref={input => this.search = input}
            onChange={this.handleInputChange}
          />
        </form>
      );
  }
}

const mapStateToProps = (state) => {
    return {
        query: state.query
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchItems: (url) => dispatch(fetchItems(url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
