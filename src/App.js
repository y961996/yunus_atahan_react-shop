import './App.css';
import gql from 'graphql-tag';
import {useQuery} from 'react-apollo';

const CURRENCIES = gql`
query getCurrencies {
  currencies {
    label,
    symbol
  }
}
`;

const Currencies = () => {
  const {loading, error, data} = useQuery(CURRENCIES);

  if(loading) return <p>Loading ...</p>;
  if(error) return <p>Error! </p>

  return data.currencies.map(({ label, symbol }) => (
    <div key="label">
      <p>
        {symbol} : {label}
      </p>
    </div>
  ));
};

function App() {
  return (
    <div className="App">
      <Currencies></Currencies>
    </div>
  );
}

export default App;
