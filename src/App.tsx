import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
const About = lazy(() => import("./About"));
// import About from "./About";
const Home = lazy(() => import("./Home")); 

const App: React.FC = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <nav className='navBar'>
        <NavLink to="/" className="navItem">Home</NavLink>
        {/* <NavLink to="/about" className="navItem">About</NavLink> */}
      </nav>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Suspense>
  </Router>
);

export default App;