import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ITEMS_STATE } from "../../reducers/error/error";

export class Error extends Component {
    render () {
        return(
            (this.props.hasErrored) ? 
        <div>
            Sorry, there was an error loading your request 
        </div> : null
        )
    }
}

const mapStateToProps = state => {
    return {
        hasErrored: state.itemsState === ITEMS_STATE.error
    }
}

export default connect(mapStateToProps, null)(Error)

