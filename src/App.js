
import RestaurantsContainer from './components/RestaurantsContainer';
import "./App.css";

import {data} from './data/data';

//App is the root of our application and where we load in our components.
function App() {
  return (
    <div className="App">
      <RestaurantsContainer restaurants={data}/>
    </div>
  );
}

export default App;
