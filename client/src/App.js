import './App.css';

import AllProductsListed from './components/AllProductsListed';
import Info from './components/Info';
import Specific from './components/Specific';

import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

function App() {



  return (
    <BrowserRouter>
      <div className="App container">
        

        <Switch>

          <Route exact path="/api/products">
            <Info></Info>
            <AllProductsListed></AllProductsListed>
          </Route>
          <Route exact path="/api/products/:idParam">
            <Specific></Specific>
          </Route>
        </Switch>
  </div>
    </BrowserRouter>
  );
}

export default App;
