import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import NavbarHome from './components/NavbarHome'
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <Router>
        <NavbarHome></NavbarHome>
        <Switch>
          <Route path="/" component={Contact} />
        </Switch>
        
      </Router>
    </>
  );
}

export default App;
