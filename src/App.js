import './App.css';
import Navbar from './components/Navbar';
import Main from './pages/Main';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import notfound from './components/notfound';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route component={notfound} />
          </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
