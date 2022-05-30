import React, { Component } from 'react';
import '../styles/CategoryPage.css';
import { connect } from 'react-redux';
import { toggleTest } from '../stores/CartReducer';

class CategoryPage extends Component {
  render() {
    return (
      <div>
        CategoryPage
        TEST: {this.props.test ? <h2>True</h2> : <h2>False</h2>} <br/>
        <button onClick={this.props.toggleTest}>Toggle TEST</button>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { test } = state.cartReducer
  return {
    test,
  }
}

const mapDispatchToProps = (dispatch) => {
  return({
    toggleTest: () => dispatch(toggleTest()),
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);