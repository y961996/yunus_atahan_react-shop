import React, { Component } from 'react';
import '../styles/CategoryPage.css';
import { connect } from 'react-redux';
import { addProduct, removeProduct } from '../stores/ProductsReducer';
import { useQuery } from '@apollo/client';
import { getAllDataForPLP } from '../graphql/Queries';
import Header from '../components/Header';

class CategoryPage extends Component {
  render() {
    return(
      <div>
        <Header/>
        {false ?? <TestComponent/>}
      </div>
    )
  }
}

// TODO: Add products from gql to prudcts state and if they exist don't ask for it again maybe?

const mapStateToProps = (state, ownProps) => {
  const { test } = state.cartReducer
  const { products } = state.productsReducer
  return {
    test,
    products
  }
}

const TestComponent = () => {
  const { loading, error, data } = useQuery(getAllDataForPLP);

    if(loading) return <p>Loading ...</p>
    if(error) return <p>Error : { error }</p>

    return (
      <div>
        CategoryPage
        {data.categories.map(c => (
          <div key={c.name}>
            <p><b>{c.name}</b></p>
            {c.products.map(p => (
              <div key={p.id}>
                <p>{p.id}</p>
                <p>{p.name}</p>
                <p>{p.inStock}</p>
                {p.gallery.map(img => (
                  <div key={img}>
                    <img style={{width: "40px", height: "40px"}} src={img} alt="productImage"></img>
                  </div>
                ))}
                {p.prices.map(price => (
                  <div key={price.currency.label}>
                    <p>{price.currency.symbol}{price.amount}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    )
}

const mapDispatchToProps = (dispatch) => {
  return({
    addProduct: (product) => dispatch(addProduct(product)),
    removeProduct: (productId) => dispatch(removeProduct(productId)),
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);