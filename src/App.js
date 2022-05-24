import './App.css';
import { useQuery, gql } from '@apollo/client';

const GET_CATEGORY_NAMES = gql `
  query GetCategoryNames {
    categories {
      name
    }
  }
`

function GetCategoryNames() {
  const { loading, error, data } = useQuery(GET_CATEGORY_NAMES);
  
  if(loading) return <p> Loading ... </p>
  if(error) return <p> Error : {error}</p>

  return data.categories.map(category => (
    <div key={category.name}>
      <p>{category.name}</p>
    </div>
  ));
}

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <GetCategoryNames></GetCategoryNames>
    </div>
  );
}

export default App;
