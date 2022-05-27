import { gql } from '@apollo/client';

export const getCategoryNames = gql`
{
    categories {
        name
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

export const getProductById = gql`
{
    product(id:$id) {
        id,
        name,
        inStock,
        description
    }
}
`;