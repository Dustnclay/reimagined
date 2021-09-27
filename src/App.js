import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import Films from './components/Films'
import Pricing from './components/Pricing';
import { Switch, Route} from 'react-router-dom'
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  return (

    <div className="body" >
      <Header/> 
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/films">
            <Films />
          </Route>
          <Route path="/pricing">
            <Pricing />
          </Route>
        </Switch>

      <Footer/>

    </div>
  );
}

export default App;
