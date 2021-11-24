import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route , Switch} from "react-router-dom";
import HeaderComponents from "./components/Header.components";

function App() {
  return (
    <div>
      <Router>
        <HeaderComponents/>
        <div className="container">
          <Switch>

          </Switch>

        </div>


      </Router>

    </div>
  );
}

export default App;
