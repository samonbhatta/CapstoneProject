import Product from "./webpages/Product";
import Home from "./webpages/HomePage";
import ProductList from "./webpages/ProductList";
import Register from "./webpages/Register";
import Login from "./webpages/Login";
import Cart from "./webpages/Cart";
import Success from "./webpages/Success"
import{BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
const App = () => {
  const user=false;
  return <Router>
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
    </Switch>

    <Switch>
      <Route path="/product/:id">
        <Product/>
      </Route>
    </Switch>
     
    <Switch>
      <Route path="/product_list/:category">
        <ProductList/>
      </Route>
    </Switch>
     
    <Switch>
      <Route path="/register">
      {user?<Redirect to ="/home"/>:<Register/>}
      </Route>
    </Switch>
     
    <Switch>
      <Route path="/login">
        {user?<Redirect to ="/home"/>:<Login/>}
      </Route>
    </Switch>
     
    <Switch>
      <Route path="/cart">
        <Cart/>
      </Route>

     
    </Switch>
     
     <Switch>
     <Route path="/success">
        <Success/>
      </Route>
       </Switch>

  </Router>
};

export default App;