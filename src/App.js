import React, {useEffect} from "react";
import { Route, Switch } from 'react-router-dom';
import Login from "./pages/Login";
import About from "./pages/About";
import Error from "./pages/Error"
import FirebaseConfiguration from "./config/FirebaseConfiguration";

function App() {

    useEffect(() => {
        FirebaseConfiguration();
    }, []);

  return (
      <main>
        <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/about" component={About} />
          <Route component={Error} />
        </Switch>
      </main>
  );
}

export default App;
