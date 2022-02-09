import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";

function App() {
  return (
    <Layout>
      <Router>
          <Switch>
              <Route path="/" exact>
                  <Home />
              </Route>
          </Switch>
      </Router>
    </Layout>
  );
}

export default App;