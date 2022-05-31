import { gql } from '@apollo/client';

export const getAllData = gql`
{
  categories {
    name,
    products {
      id,
      name,
      inStock,
      gallery,
      description,
      category,
      attributes {
        id,
        name,
        type,
        items {
          displayValue,
          value,
          id
        }
      }
      prices {
        currency {
          label,
          symbol
        }
        amount
      }
      brand
    }
  }
}
`;

export const getAllDataForPLP = gql`
{
  categories {
    name,
    products {
      id,
      name,
      inStock,
      gallery,
      category,
      prices {
        currency {
          label,
          symbol
        }
        amount
      }
      brand
    }
  }
}
`;

// "huarache-x-stussy-le"
export const getProductForCartById = gql`
{
	product(id:$id) {
    id,
    name,
    inStock,
    gallery,
    attributes {
      id,
      name,
      type,
      items {
        displayValue,
        value,
        id
      }
    }
    prices {
      currency {
        symbol
      }
      amount
    }
    brand
  }
}
`;

export const getCurrencies = gql`
{
	currencies {
    label,
    symbol
  }
}
`;

// "huarache-x-stussy-le"
export const getProductForDisplayById = gql`
{
	product(id:$id) {
    id,
    name,
    inStock,
    gallery,
    description,
    attributes {
      id,
      name,
      type,
      items {
        displayValue,
        value,
        id
      }
    }
    prices {
      currency {
        label,
        symbol
      }
      amount
    }
    brand
  }
}
`;