import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import { MovieDetails } from "./components/MovieDetails.js";
import { Films } from "./data";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} Films={Films} />
          <Route
            path="/MovieDetails/:id"
            render={(props) => <MovieDetails {...props} Films={Films} />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
