import logo from './logo.svg';
import './App.css';
import Navbar from "./Navbar";
import blog from "./blog";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        
        
        <Switch>
          <Route exact path='/' component={Navbar} />
          <Route path='/blog' component={blog} />

        </Switch>
      </div>
    </Router>
  );
}


export default App;
