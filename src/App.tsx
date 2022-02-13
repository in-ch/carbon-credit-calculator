import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Calculator from "./pages/Calculator";
import Calculator2 from "./pages/Caluclator2";

function App() {
  return (
    <Layout>
      <Router>
          <Switch>
              <Route path="/" component={Calculator} exact />
              <Route path="/taxi" component={Calculator2} exact />
              <Route path="/bus" component={Calculator} exact />
          </Switch>
      </Router>
    </Layout>
  );
}

export default App;