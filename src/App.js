import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import "./index.css";
import { Home } from "./pages/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Services } from "./pages/Services";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";

function App() {
  return (
    <div>
      <Router>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/services" exact component={Services} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/about-us" exact component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
