import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Calculator from "./pages/Calculator";
import Calculator2 from "./pages/Caluclator2";
import Home from "./pages/Home";

function App() {
  return (
    <Layout>
      <Router>
          <Switch>
              <Route path="/" exact component={Home}>
              </Route>
              <Route path="/taxi" exact component={Calculator2}>
              </Route>
              <Route path="/bus" exact component={Calculator}>
              </Route>
          </Switch>
      </Router>
    </Layout>
  );
}

export default App;