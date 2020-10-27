import './App.css';
import Header from './components/Header'
import Home from './pages/Home'
import Checkout from './pages/Checkout'
import Login from './pages/Login'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="app">
      <Header/>
        <Switch>
          
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/checkout">
            <Checkout/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
