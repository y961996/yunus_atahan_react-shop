import React, { Component } from 'react';
import '../styles/CategoryPage.css';
import { connect } from 'react-redux';
import { ADD_ITEM_TO_CART } from '../redux/ActionTypes';

class CategoryPage extends Component {
  render() {
    return (
      <div>CategoryPage</div>
    )
  }
}

function mapStateToProps(state){
  return {
    cartItems: state.cartItems,
  };
};

function mapDispatchToProps(dispatch){
  return {
    addItemToCart: () => dispatch(ADD_ITEM_TO_CART()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);