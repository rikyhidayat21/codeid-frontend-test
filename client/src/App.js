import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import NavbarHome from "./components/NavbarHome";
import Contact from "./pages/Contact";
import AddContact from "./pages/AddContact";
import EditContact from "./pages/EditContact";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <>
      <Router>
        <NavbarHome></NavbarHome>
        <Switch>
          <Route path="/add-contact" component={AddContact} />

          <Route path="/edit-contact/:contact_id" component={EditContact} />

          <Route path="/favorites" component={Favorites} />

          <Route path="/" component={Contact} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
