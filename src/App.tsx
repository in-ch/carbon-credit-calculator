import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Home2 from "./pages/Home2";

function App() {
  return (
    <Layout>
      <Router>
          <Switch>
              <Route path="/" exact>
                  <Home />
              </Route>
              <Route path="/taxi" exact>
                  <Home2 />
              </Route>
          </Switch>
      </Router>
    </Layout>
  );
}

export default App;